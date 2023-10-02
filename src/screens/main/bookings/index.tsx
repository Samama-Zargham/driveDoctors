import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'

const Bookings = () => {
    const [services, setservices] = useState([
        {
            carName: 'KIA telluride',
            service: 'Filter Change, Oil Change',
            date: '17 Septemper 2023',
            status: 'Our clinic waiting your car',
            payment: '250 QAR'
        },
        {
            carName: 'KIA telluride',
            service: 'Filter Change, Oil Change',
            date: '17 Septemper 2023',
            status: 'In-Progress',
            payment: '250 QAR'
        }, {
            carName: 'KIA telluride',
            service: 'Filter Change, Oil Change',
            date: '17 Septemper 2023',
            status: 'In-Progress',
            payment: '250 QAR'
        }, {
            carName: 'KIA telluride',
            service: 'Filter Change, Oil Change',
            date: '17 Septemper 2023',
            status: 'In-Progress',
            payment: '250 QAR'
        },

    ])

    const animatedValues = useRef(services.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        const animations = services.map((item, index) =>
            Animated.timing(animatedValues[index], {
                toValue: 1, // Fade-in to full opacity
                duration: 1000, // Animation duration in milliseconds
                useNativeDriver: true, // For performance, use native driver
                delay: index * 200, // Delay each animation
            })
        );

        Animated.stagger(200, animations).start(); // Start animations in sequence with a stagger

    }, [animatedValues, services]);


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Bookings' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ paddingTop: mvs(20) }} showsVerticalScrollIndicator={false}>
                        {
                            services.map((item: booking, idx: number) => {
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
                                                            <AppText children={key.charAt(0).toUpperCase() + key.slice(1)} />
                                                            <AppText style={styles.sText} children={val.charAt(0).toUpperCase() + val.slice(1)} />

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
        left: mvs(78)
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