import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import store from '../../../others/redux/store'
import { setBookings } from '../../../others/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import { extractNamesByKey } from '../../../others/utils/helpers'
const Bookings = () => {
    // const [services, setservices] = useState([
    //     {
    //         carName: 'KIA telluride',
    //         service: 'Filter Change, Oil Change',
    //         date: '17 Septemper 2023',
    //         status: 'Our clinic waiting for your car',
    //         payment: '250 QAR'
    //     },
    //     {
    //         carName: 'KIA telluride',
    //         service: 'Filter Change, Oil Change',
    //         date: '17 Septemper 2023',
    //         status: 'Our clinic waiting for your car',
    //         payment: '250 QAR'
    //     }, {
    //         carName: 'KIA telluride',
    //         service: 'Filter Change, Oil Change',
    //         date: '17 Septemper 2023',
    //         status: 'Our clinic waiting for your car',
    //         payment: '250 QAR'
    //     }, {
    //         carName: 'KIA telluride',
    //         service: 'Filter Change, Oil Change',
    //         date: '17 Septemper 2023',
    //         status: 'Our clinic waiting for your car',
    //         payment: '250 QAR'
    //     },

    // ])

    const { user, bookings, servicesObject, vehicles } = useSelector((state: any) => state.user)
    const animatedValues = useRef(bookings.map(() => new Animated.Value(0))).current;
    const myBookingsService = useApi(APIService.myBookings)
    console.log({ bookings })
    useLayoutEffect(() => {
        myBookingsService.requestCall(user.id)
            .then((response) => {

                store.dispatch(setBookings(response.booking.map((book: any) => ({
                    ...book,
                    carName: vehicles.some((e: any) => e.id === book.vehicle_id) ? `${vehicles.find((e: any) => e.id === book.vehicle_id)?.make} ${vehicles.find((e: any) => e.id === book.vehicle_id)?.model}` : "",
                    service: extractNamesByKey(servicesObject, book?.services).join(', '),
                    date: book?.time,
                    status: 'Our clinic waiting for your car',
                    payment: `${book?.price | 0} QAR`
                }))))
            })
            .catch(() => { });
    }, [])

    useEffect(() => {

        // if (bookings.length > 0) {
        const animations = bookings.map((item, index) =>
            Animated.timing(animatedValues[index], {
                toValue: 1, // Fade-in to full opacity
                duration: 1000, // Animation duration in milliseconds
                useNativeDriver: true, // For performance, use native driver
                delay: index * 200, // Delay each animation
            })
        );

        Animated.stagger(200, animations).start(); // Start animations in sequence with a stagger
        // }

    }, []);


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Bookings' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ paddingTop: mvs(20) }} showsVerticalScrollIndicator={false}>
                        {
                            bookings.map((item: booking, idx: number) => {
                                return (
                                    <Animated.View
                                        key={idx}
                                        style={[styles.booking,
                                        { opacity: animatedValues[idx] },
                                        ]}>
                                        <View style={COMMON_STYLES.rowDirection} >
                                            <FastImage style={styles.car}
                                                source={IMAGES['car']}
                                                resizeMode='contain'
                                            />
                                            <AppText Medium children={"      " + item.carName} />
                                        </View>
                                        {
                                            Object.entries(item).map(([key, val], index) => {
                                                if ('date' == key || 'status' == key || 'payment' == key || 'service' == key) {
                                                    return (
                                                        <View key={index} style={styles.rowText} >
                                                            <AppText children={key} style={{ textTransform: 'capitalize' }} />
                                                            <AppText style={styles.sText} children={val} />

                                                        </View>
                                                    )
                                                }
                                            })
                                        }
                                    </Animated.View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default Bookings

const styles = StyleSheet.create({
    sText: {
        position: "absolute",
        left: mvs(78),
        textTransform: 'capitalize'
    },
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    car: {
        width: mvs(60),
        height: mvs(30)
    },
    rowText: {
        ...COMMON_STYLES.rowDirection,
        marginVertical: 5,
        backgroundColor: colors.parrot3,
        borderRadius: 4,
        padding: 1
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginVertical: mvs(10),
        width: '100%'
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1
    },
})

type booking = {
    carName: string;
    service: string;
    date: string;
    status: string;
    payment: string;
}