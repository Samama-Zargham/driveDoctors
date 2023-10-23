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
import { useDispatch, useSelector } from 'react-redux'
import store from '../../../others/redux/store'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { setSelectedServices, setVehicles } from '../../../others/redux/reducers/userReducer'
import { carDataFormatted, getCarModels } from '../../../others/utils/carsData'
import { useTranslation } from 'react-i18next'
const CarDetails = () => {
    const route = useRoute();
    const isTab = route.name === 'CarDetails';
    const [selectedCar, setselectedCar] = useState('')
    const [modal, setmodal] = useState(false)
    const [isAdded, setIsAdded] = useState(false)


    const [animation] = useState(new Animated.Value(0));
    const { user, vehicles, servicesObject } = useSelector((state: any) => state.user)

    console.log({ servicesObject })
    const myVehicleService = useApi(APIService.myvehicles)


    useEffect(() => {
        myVehicleService.requestCall(user?.id)
            .then((response) => {
                store.dispatch(setVehicles(response.vehicles))
            })
            .catch(() => { });
    }, [isAdded])



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
    const { t } = useTranslation()
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer={isTab} title={t('Car Details')} />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>

                        <AppText style={{ marginTop: mvs(20) }} FONT_18 semiBold children={t('Listed Cars')} />
                        {
                            vehicles.map((item: any, index: number) => {
                                return (
                                    <Animated.View style={animatedStyles} key={index}>
                                        <TouchableOpacity
                                            disabled={!isTab}
                                            onPress={() => setselectedCar(item.id)}
                                            activeOpacity={0.9}
                                            style={[styles.booking, { backgroundColor: selectedCar == item.id ? colors.parrot : colors.WHITE }]} key={index} >

                                            <View style={COMMON_STYLES.rowDirection} >
                                                <FastImage style={styles.car}
                                                    source={IMAGES['car']}
                                                    resizeMode='contain'
                                                />
                                                <AppText Medium children={`   ${item.make} |  ${item.model} | ${item.plate}`} />
                                            </View>

                                        </TouchableOpacity>
                                        {
                                            index == 2 &&
                                            isTab &&
                                            <PrimaryButton disabled={selectedCar == ''} onPress={() => { navServices.navigate('PickUp', { vehicle_id: selectedCar }) }} title={t('Continue')} />
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
                            title={t('Add New Car')} />



                    </ScrollView>
                </View>
            </View>
            {
                modal &&
                <AddCar isNavigate={isTab} setmodal={setmodal} setIsAdded={setIsAdded} />
            }
        </BaseScreen>
    )
}

export default CarDetails


export const AddCar = ({ setmodal, isNavigate = false, setIsAdded }: any) => {
    const [carMake, setcarMake] = useState('Acura')
    const [carModal, setcarModal] = useState('')
    const [numberPlate, setNumberPlate] = useState('')

    const { t } = useTranslation()
    const [animation] = useState(new Animated.Value(0));
    const { user } = useSelector((state: any) => state.user)

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
    const selectedServices = useSelector((state: any) => state.user?.selectedServices);

    const addVehicle = useApi(APIService.addVehicle)


    return (
        <BaseModal
            containerStyle={{ maxHeight: '85%', paddingBottom: 0 }}
            isBottomSheet
            modalvisible={true}
            toggleModal={() => {
                if (addVehicle.loading) {

                } else {
                    setmodal(false)
                }
            }}>
            <AppText FONT_24 bold children={t('Add Car Details')} />
            <ScrollView
                onStartShouldSetResponder={() => true}
                style={[styles.backWhite]}
                showsVerticalScrollIndicator={false}>
                <Animated.View style={animatedStyles}>
                    <DropDown zIndex={2} value={carMake} itemsArray={carDataFormatted} schema={{
                        label: 'key',
                        value: 'value'
                    }} setValue={setcarMake}
                        header={t('Car Make')} />
                    {console.log(getCarModels(carMake))}
                    <DropDown value={carModal} setValue={setcarModal}

                        itemsArray={getCarModels(carMake)}
                        schema={{
                            label: 'model',
                            value: 'model'
                        }}
                        header={t('Car Modal')} />
                    <PrimaryInput placeholder={t('ex: ABDC 1234')} header={t('Car Number Plate')} onChangeText={setNumberPlate} />
                    <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { marginBottom: 90 }]} >
                        <PrimaryButton onPress={() => addVehicle.loading ? {} : setmodal(false)} isBorder width={'47%'} title={t('Cancel')} />
                        <PrimaryButton
                            loading={addVehicle.loading}
                            onPress={() => {

                                // if () {
                                //     // navServices.navigate('PickUp')
                                // } else {
                                addVehicle.requestCall({
                                    customer_id: user?.id,
                                    make: carMake,
                                    model: carModal,
                                    plate: numberPlate
                                }).then((response) => {// RESPONSE MN VEHICLE_ID NHI AA RHI
                                    //Zohaib bhai idhr jo vehicle id aye gi wo store me dispatch kerwadey selectedServices ki state me
                                    store.dispatch(setSelectedServices({ ...selectedServices, vehicle_id: response?.id, carName: carModal + " " + carMake }))
                                    setIsAdded && setIsAdded(Math.random())
                                    console.log(response)
                                    setmodal(false)
                                    isNavigate && navServices.navigate('PickUp', { vehicle_id: response.id })
                                }).catch((error) => { })
                                // }
                            }}
                            disabled={!carModal || !carMake || !numberPlate}
                            width={'47%'}
                            title={t('Continue')} />
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