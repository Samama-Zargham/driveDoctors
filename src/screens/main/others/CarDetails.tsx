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

const CarDetails = () => {
    const route = useRoute();
    const isDrawer = route.name === 'CarDetails';

    const [carMake, setcarMake] = useState('')
    const [carModal, setcarModal] = useState('')
    const [selectedCar, setselectedCar] = useState('')

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer={isDrawer} title='Car Details' />
                <View style={styles.backWhite} >
                    <ScrollView style={{ flex: 1 }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        <PrimaryInput placeholder='ex: ABDC 1234' header='Car Number Plate' />
                        <DropDown zIndex={2} value={carMake} setValue={setcarMake} header='Car Make' />
                        <DropDown value={carModal} setValue={setcarModal} header='Car Modal' />
                        <AppText style={{ marginTop: mvs(20) }} FONT_18 semiBold children={'Select Listed Car'} />
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

                        <PrimaryButton onPress={() => navServices.navigate('PickUp')} title='Save' />
                    </ScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default CarDetails

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