import { Animated, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { height, mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import { useRoute } from '@react-navigation/native'
import AnyIcon, { Icons } from '../../../components/reusables/AnyIcon'
import { SelectUnSelectItems } from '../../../others/utils/helpers'

const SubServices = () => {
    const item: any = useRoute().params?.item
    const [selectedServices, setselectedServices] = useState([])
    const [data, setdata] = useState([
        {
            id: 1,
            name: 'Car Repair',
        },
        {
            id: 2,
            name: 'Car Oil Change',
        },
        {
            id: 3,
            name: 'Battery Replace',
        },
        {
            id: 4,
            name: 'AC Repair',
        },
        {
            id: 5,
            name: 'Try Change',
        },
        {
            id: 6,
            name: 'Car Diagnostics',
        },

    ])
    const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        const animations = data.map((item, index) =>
            Animated.timing(animatedValues[index], {
                toValue: 1, // Fade-in to full opacity
                duration: 1000, // Animation duration in milliseconds
                useNativeDriver: true, // For performance, use native driver
                delay: index * 200, // Delay each animation
            })
        );

        Animated.stagger(200, animations).start(); // Start animations in sequence with a stagger

    }, [animatedValues, data]);

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Add Services' />
                <View style={styles.backWhite} >
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={styles.booking}  >
                            <AnyIcon name='check' color='white' type={Icons.Entypo} disabled size={26} containerStyle={styles.tick} />
                            <AppText FONT_16 Medium children={'     ' + item?.name} />
                        </View>
                        <AppText FONT_18 Medium style={{ marginVertical: 10 }} children='People also add this service' />
                        {
                            data.map((item: any, idx: number) => {
                                const foundElement: any = selectedServices.find((i: any) => i.id == item.id);

                                return (
                                    <TouchableOpacity
                                        onPress={() => SelectUnSelectItems(item, selectedServices, setselectedServices)}
                                        activeOpacity={0.7}  >
                                        <Animated.View
                                            key={idx}
                                            style={[{ opacity: animatedValues[idx] }, styles.booking]}>
                                            <AnyIcon name='check'
                                                color='white'
                                                disabled
                                                type={Icons.Entypo}
                                                size={26}
                                                containerStyle={[styles.tick,
                                                { backgroundColor: foundElement?.id ? colors.green : colors.LIGHT_GRAY }]}
                                            />
                                            <AppText FONT_18 children={'     ' + item?.name} />
                                        </Animated.View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                    <PrimaryButton containerStyle={styles.btn} onPress={() => navServices.navigate('PickUp')} title='Continue' />
                </View>
            </View>
        </BaseScreen>
    )
}

export default SubServices

const styles = StyleSheet.create({
    btn: {
        position: "absolute",
        width: "100%",
        bottom: 10,
        alignSelf: "center"
    },
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    tick: {
        backgroundColor: colors.green,
        borderRadius: 100,
        width: mvs(38),
        height: mvs(38),
        justifyContent: "center",
        alignItems: 'center'
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(10),
        marginVertical: mvs(5),
        ...COMMON_STYLES.rowDirection
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
    },
})
