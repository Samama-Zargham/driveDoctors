import { Animated, Easing, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import DropDown from '../../../components/reusables/DropDown'
import FastImage from 'react-native-fast-image'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import { IMAGES } from '../../../assets/images'
import navServices from '../../../others/utils/navServices'
import { useRoute } from '@react-navigation/native'
import BaseModal from '../../../components/reusables/BaseModal'
import AnyIcon, { Icons } from '../../../components/reusables/AnyIcon'
import {useSelector} from 'react-redux'
import store, { RootState } from '../../../others/redux/store'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { setVehicles } from '../../../others/redux/reducers/userReducer'
const CarDetails = () => {
    const route = useRoute();
    const isTab = route.name === 'CarDetails';
    const [selectedCar, setselectedCar] = useState('')
    const [modal, setmodal] = useState(false)


    const [animation] = useState(new Animated.Value(0));
    const { user, bookings } = useSelector((state: RootState) => state.user)
    const myVehicleService = useApi(APIService.myvehicles)

    useEffect(() => {
        myVehicleService.requestCall(user.id)
            .then((response) => {
                store.dispatch(setVehicles(response.booking))
            })
            .catch(() => { });
    }, [])


    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1, // Final value (fully visible)
            duration: 1000, // Animation duration in milliseconds
            easing: Easing.linear, // Easing function
            useNativeDriver: false, // Required for opacity animation
        }).start(); // Start the animation
    }, []);

    const animatedStyles = {
        transform: [
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0],
                }),
            },
        ],
        opacity: animation,
    };

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer={isTab} title='Car Details' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>

                        <AppText style={{ marginTop: mvs(20) }} FONT_18 semiBold children={'Listed Cars'} />
                        {
                            [1, 2, 3].map((item: any, index: number) => {
                                return (
                                    <Animated.View style={animatedStyles} key={index}>
                                        <TouchableOpacity
                                            disabled={!isTab}
                                            onPress={() => setselectedCar(item)}
                                            activeOpacity={0.9}
                                            style={[styles.booking, { backgroundColor: selectedCar == item ? colors.parrot : colors.WHITE }]} key={index} >

                                            <View style={COMMON_STYLES.rowDirection} >
                                                <FastImage style={styles.car}
                                                    source={IMAGES['car']}
                                                    resizeMode='contain'
                                                />
                                                <AppText Medium children={"      " + 'KIA Telluride'} />
                                            </View>

                                        </TouchableOpacity>
                                        {
                                            index == 2 &&
                                            isTab &&
                                            <PrimaryButton disabled={selectedCar == ''} onPress={() => { navServices.navigate('PickUp') }} title='Continue' />
                                        }
                                    </Animated.View>
                                )
                            })
                        }

                        <PrimaryButton
                            containerStyle={styles.addCar}
                            txtColor={colors.WHITE}
                            backgroundColor={colors.darkGreen}
                            onPress={() => setmodal(true)}
                            title='Add New Car' />



                    </ScrollView>
                </View>
            </View>
            {
                modal &&
                <AddCar setmodal={setmodal} />
            }
        </BaseScreen>
    )
}

export default CarDetails


export const AddCar = ({ setmodal, isNavigate = false }: any) => {
    const [carMake, setcarMake] = useState('')
    const [carModal, setcarModal] = useState('')


    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 450,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);

    const animatedStyles = {
        transform: [
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-width, 0], // Reverse the values
                }),
            },
        ],
        opacity: animation,
    }
    return (
        <BaseModal
            containerStyle={{ maxHeight: '85%', paddingBottom: 0 }}
            isBottomSheet
            modalvisible={true}
            toggleModal={() => setmodal(false)}>
            <AppText FONT_24 bold children={'Add Car Details'} />
            <ScrollView
                onStartShouldSetResponder={() => true}
                style={[styles.backWhite]}
                showsVerticalScrollIndicator={false}>
                <Animated.View style={animatedStyles}>
                    <DropDown zIndex={2} value={carMake} setValue={setcarMake} header='Car Make' />
                    <DropDown value={carModal} setValue={setcarModal} header='Car Modal' />
                    <PrimaryInput placeholder='ex: ABDC 1234' header='Car Number Plate' />
                    <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { marginBottom: 90 }]} >
                        <PrimaryButton onPress={() => setmodal(false)} isBorder width={'47%'} title='Cancel' />
                        <PrimaryButton
                            onPress={() => {
                                setmodal(false)
                                if (isNavigate) {
                                    navServices.navigate('PickUp')
                                }
                            }}
                            disabled={!carModal || !carMake}
                            width={'47%'}
                            title='Continue' />
                    </View>
                </Animated.View>
            </ScrollView>
        </BaseModal>
    )
}




const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
    },
    addCar: {
        position: "absolute",
        borderRadius: mvs(20),
        width: '40%',
        alignSelf: "flex-end",
        bottom: 20,
    },
    car: {
        width: mvs(60),
        height: mvs(30)
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginVertical: mvs(10)
    },
})