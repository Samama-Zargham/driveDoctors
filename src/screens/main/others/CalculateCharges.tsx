
import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import BaseModal from '../../../components/reusables/BaseModal'
import LottieView from 'lottie-react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

const CalculateCharges = () => {
    const [modal, setmodal] = useState(false)
    const nav = useNavigation()
    const handleBookNow = () => {
        setmodal(true)
        setTimeout(() => {
            setmodal(false)
            nav.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' }
                    ],
                })
            );
            nav.navigate('Home')
        }, 3200);
    }
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Price' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ flex: 1 }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        {
                            [
                                {
                                    name: 'Car Oil Change',
                                    quantity: 1
                                },
                                {
                                    name: 'Car AC Repair',
                                    quantity: 1
                                },
                                {
                                    name: 'Labour Charges',
                                    amount: '100'
                                },
                                {
                                    name: 'Total',
                                    amount: '350'
                                }
                            ].map((item: any, index: number) => {
                                return (
                                    <View style={styles.booking} key={index} >
                                        <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                                            <AppText FONT_16 semiBold children={item?.name} />
                                            <View style={COMMON_STYLES.rowDirection} >
                                                {
                                                    item.quantity ?
                                                        <>
                                                            <AppText bold children={'125' + '   '} />
                                                            <AppText color={colors.parrot} FONT_10 bold children={'X'} />
                                                            <AppText color={colors.parrot} FONT_18 Medium children={'1'} />
                                                        </>
                                                        :
                                                        <>
                                                            <AppText FONT_16 bold children={item.amount} />
                                                            <AppText FONT_12 color={colors.parrot} Medium children={'   ' + 'QAR'} />
                                                        </>
                                                }

                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <PrimaryButton onPress={handleBookNow} title='Book Now' />

                    </ScrollView>
                </View>
            </View>
            {
                modal &&
                <BaseModal
                    containerStyle={{ padding: mvs(20) }}
                    modalvisible={true}
                    toggleModal={() => setmodal(false)}>

                    <View style={styles.lottie}>
                        <LottieView
                            autoPlay
                            style={{ width: '100%', height: mvs(90) }}
                            source={require('../../../assets/lottie/splash.json')}
                        />
                        <AppText style={{ marginVertical: mvs(6) }} semiBold FONT_16 children={'Successfully Booked!'} color={colors.darkGreen1} />
                    </View>
                </BaseModal>
            }
        </BaseScreen>
    )
}

export default CalculateCharges

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
    lottie: {
        backgroundColor: colors.parrot2,
        width: mvs(250),
        justifyContent: "center",
        alignItems: 'center'
    },
    car: {
        width: mvs(60),
        height: mvs(30)
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginVertical: mvs(5)
    },
})