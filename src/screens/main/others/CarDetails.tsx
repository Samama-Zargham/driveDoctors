import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
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

const CarDetails = () => {
    const route = useRoute();
    const isTab = route.name === 'CarDetails';
    const [selectedCar, setselectedCar] = useState('')
    const [modal, setmodal] = useState(false)


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
                                    <TouchableOpacity
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
                                )
                            })
                        }

                        <PrimaryButton
                            containerStyle={styles.addCar}
                            txtColor={colors.WHITE}
                            backgroundColor={colors.darkGreen}
                            onPress={() => setmodal(true)}
                            title='Add New Car' />


                        {
                            isTab &&
                            <PrimaryButton onPress={() => { navServices.navigate('PickUp') }} title='Continue' />
                        }
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


const AddCar = ({ setmodal }: any) => {
    const [carMake, setcarMake] = useState('')
    const [carModal, setcarModal] = useState('')
    return (
        <BaseModal
            containerStyle={{ maxHeight: '85%', paddingBottom: 0 }}
            isBottomSheet
            modalvisible={true}
            toggleModal={() => setmodal(false)}>
            <AppText FONT_24 bold children={'Add Car Details'} />
            <ScrollView
                onStartShouldSetResponder={() => true}
                style={styles.backWhite}
                showsVerticalScrollIndicator={false}>
                <PrimaryInput placeholder='ex: ABDC 1234' header='Car Number Plate' />
                <DropDown zIndex={2} value={carMake} setValue={setcarMake} header='Car Make' />
                <DropDown value={carModal} setValue={setcarModal} header='Car Modal' />
                <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { marginBottom: 90 }]} >
                    <PrimaryButton onPress={() => setmodal(false)} isBorder width={'47%'} title='Cancel' />
                    <PrimaryButton
                        onPress={() => setmodal(false)}
                        disabled={!carModal || !carMake}
                        width={'47%'}
                        title='Continue' />
                </View>
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