import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'

const Notifications = () => {
    const [services, setservices] = useState([
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
        },
        {
            carName: 'Your KIA vehicle 3214 is now in maintainance phase and will be ready on Wednesday',
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
                <PrimaryHeader title='Notifications' />

                <View style={styles.backWhite} >
                    {services?.length > 0 && <AppText onPress={() => { setservices([]) }} FONT_18 style={{ right: 10, alignSelf: 'flex-end' }} bold color={colors.darkGreen} children='Clear All' />}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            services?.length > 0 ?
                                services.map((item: any, idx: number) => {
                                    return (
                                        <Animated.View
                                            key={idx}
                                            style={[styles.notifi,
                                            { opacity: animatedValues[idx] },
                                            ]}>
                                            <AppText Medium children={'17 September 2023\n'} />
                                            <AppText children={item.carName} />

                                        </Animated.View>
                                    )
                                })
                                :
                                <AppText center FONT_16 children='No data found' />
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
