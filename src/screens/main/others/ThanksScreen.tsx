
import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import { CommonActions, useNavigation } from '@react-navigation/native'


const ThanksScreen = () => {
    const navigation = useNavigation()
    const [services, setservices] = useState([
        {
            carName: 'KIA telluride',
            serviceId: '22115',
            service: 'Filter Change, Oil Change',
            date: '17 Septemper 2023',
            TimeSlot: '11:00-11:30',
            status: 'Our clinic waiting for your car',
            payment: '250 QAR'
        }
    ])
    const handleOnpress = () => {
        // setmodal(true)
        setTimeout(() => {
            // setmodal(false)
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' }
                    ]
                }),
                navigation.navigate('Home')
            );
        })
    }
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <AppText color={colors.WHITE} FONT_22 children='' />
                <View style={styles.backWhite} >
                    <AppText center FONT_24 children={'Thanks For Your Booking'} color='white' />
                    <View style={styles.backWhite1}>

                        {
                            services.map((item: booking, idx: number) => {
                                return (
                                    <View
                                        key={idx}
                                        style={styles.booking}>
                                        <View style={[COMMON_STYLES.rowDirection, { alignSelf: "center" }]} >
                                            <FastImage style={styles.car}
                                                source={IMAGES['car']}
                                                resizeMode='contain'
                                            />
                                            <AppText Medium style={{ marginLeft: mvs(30) }} FONT_20 children={item.carName} />
                                        </View>
                                        {
                                            Object.entries(item).map(([key, val], index) => {
                                                if (index > 0) {
                                                    return (
                                                        <View key={index} style={styles.rowText} >
                                                            <AppText FONT_16 children={key.charAt(0).toUpperCase() + key.slice(1)} />
                                                            <AppText FONT_16 children={val.charAt(0).toUpperCase() + val.slice(1)} />
                                                        </View>
                                                    )
                                                }
                                            })
                                        }
                                        <PrimaryButton onPress={handleOnpress} containerStyle={{ alignSelf: 'center' }} width={'78%'} title='Back to Home' />
                                    </View>
                                )
                            })
                        }

                    </View>
                </View>
            </View>
        </BaseScreen >
    )
}

export default ThanksScreen

const styles = StyleSheet.create({
    backWhite1: {
        backgroundColor: colors.WHITE,
        flex: 1,
        marginTop: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    car: {
        width: mvs(70),
        height: mvs(40)
    },
    rowText: {
        ...COMMON_STYLES.rowDirectionWithSpaceBTW,
        marginVertical: mvs(10),
        backgroundColor: colors.parrot3,
        borderRadius: 10,
        padding: 12,
        width: "100%"
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginBottom: mvs(20),
        width: '100%',
        alignSelf: "center",
        flex: 1
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.darkGreen1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        flex: 1,
    }
})

type booking = {
    carName: string;
    service: string;
    date: string;
    status: string;
    payment: string;
}