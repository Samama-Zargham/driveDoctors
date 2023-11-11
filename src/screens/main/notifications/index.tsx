import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import { useIsFocused } from '@react-navigation/native'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { useSelector } from 'react-redux'
import store from '../../../others/redux/store'
import { setNotifications } from '../../../others/redux/reducers/userReducer'
import { useTranslation } from 'react-i18next'
import { isArabic } from '../../../others/utils/helpers'

const Notifications = () => {
    const isFocused = useIsFocused()
    const { requestCall, loading } = useApi(APIService.getNotify)
    const { user, Notifications, vehicles, bookingStatus } = useSelector((state: any) => state.user)
    const { t } = useTranslation()
    const animatedValues = useRef(Notifications?.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        requestCall(user?.id)
            .then((response) => {
                store.dispatch(setNotifications(response?.notifications))
            })
            .catch((err) => { console.log({ err }) });
    }, [isFocused])

    useEffect(() => {
        if (Notifications?.length > 0) {
            const animations = Notifications?.map((item: any, index: number) =>
                Animated.timing(animatedValues[index], {
                    toValue: 1, // Fade-in to full opacity
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // For performance, use native driver
                    delay: index * 200, // Delay each animation
                })
            );

            Animated.stagger(200, animations).start();
        }// Start animations in sequence with a stagger
    }, []);

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title={t('Notifications')} />

                <View style={styles.backWhite} >
                    {Notifications?.length > 0 && <AppText
                        onPress={() => { store.dispatch(setNotifications([])) }}
                        FONT_18 style={{ right: 10, alignSelf: 'flex-end' }}
                        bold color={colors.darkGreen} children={t('Clear All')} />}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            Notifications?.length > 0 ?
                                Notifications?.map((item: any, idx: number) => {
                                    let vehicle = vehicles?.filter((i: any) => i?.id == item?.vehicle_id)
                                    return (
                                        <Animated.View
                                            key={idx}
                                            style={[styles.notifi,
                                            { opacity: animatedValues[idx || 0] },
                                            ]}>
                                            {vehicle[0]?.plate &&
                                                <View>
                                                    <AppText children={t('Car Info: ') + vehicle[0]?.make + " " + vehicle[0]?.model} />
                                                    <AppText children={t('Number Plate: ') + vehicle[0]?.plate + '\n'} />
                                                </View>
                                            }
                                            {/* <AppText children={isArabic() ? item?.message_ar : item?.message} /> */}
                                            <AppText children={bookingStatus[item?.message?.split("_")?.[0]+ (isArabic() ? '_AR' : "")]} />
                                        </Animated.View>
                                    )
                                })
                                :
                                <AppText center FONT_16 children={t('No data found')} />
                        }
                    </ScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default Notifications

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    notifi: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginVertical: mvs(10)
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1
    },
})
