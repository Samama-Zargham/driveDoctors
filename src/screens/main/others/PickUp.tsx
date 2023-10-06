import { Animated, Easing, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import DatePicker from '../../../components/datePicker'
import LottieView from 'lottie-react-native'
import navServices from '../../../others/utils/navServices'
import DeviceInfo from 'react-native-device-info'

const PickUp = () => {
    const [pickUpType, setpickUpType] = useState()
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const data = [
        {
            id: 1,
            title: 'Pick From Location',
            icon: 'truk'
        },
        {
            id: 2,
            title: 'Drop to Work Shop',
            icon: 'home'
        },

    ]
    const timeArray = [
        // "9:00 AM",
        // "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
        "9:30 PM",
        // "10:00 PM",
        // "10:30 PM"
    ];
    const [modal, setmodal] = useState(false)
    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
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
    const isTablet = DeviceInfo.isTablet();

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Pick Up' />

                <View style={styles.backWhite} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {data.map((_: any, i: number) => {
                            return (
                                <Animated.View style={animatedStyles} key={i}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setpickUpType(_?.id)
                                        }}
                                        activeOpacity={0.9}
                                        style={[styles.carcare, { backgroundColor: pickUpType == _.id ? colors.parrot : colors.WHITE }]} >
                                        <AppText FONT_18 style={{ left: 10 }} bold color={colors.darkGreen2} children={_?.title} />
                                        <FastImage
                                            source={IMAGES[_?.icon]}
                                            resizeMode='contain'
                                            style={styles.image}
                                        />
                                    </TouchableOpacity>
                                </Animated.View>
                            )
                        })}
                        {pickUpType &&
                            <>
                                <AppText FONT_18 bold color={colors.darkGreen2} children={'Date and Time'} />
                                <DatePicker date={date} setDate={setdate} />
                            </>
                        }
                        {date &&
                            <>
                                <AppText style={{ marginTop: 18 }} FONT_18 bold color={colors.darkGreen2} children={'Select time slot'} />
                                <View style={styles.scrollContent}>
                                    {
                                        timeArray?.map((_: any, i: number) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.9}
                                                    onPress={() => settime(_)}
                                                    key={i} style={[styles.time, { backgroundColor: time == _ ? colors.parrot : colors.WHITE }]} >
                                                    <AppText Medium style={{ padding: 2 }} children={_} />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            </>
                        }
                        {
                            time &&
                            <PrimaryButton onPress={() => {
                                setmodal(true)
                                setTimeout(() => {
                                    navServices.navigate('ThanksScreen'),
                                        setmodal(false)
                                }, 1000);
                            }} title='Continue' />
                        }

                    </ScrollView>
                </View>
            </View>

            {modal &&
                <View
                    style={styles.loader}>
                    <LottieView
                        source={require('../../../assets/gif/animation3.json')}
                        autoPlay
                        style={{
                            position: "absolute",
                            width: mvs(400),
                            height: mvs(isTablet ? 400 : 250)
                        }}
                    />
                </View>
            }
        </BaseScreen>
    )
}

export default PickUp

const styles = StyleSheet.create({
    backDark: {
        flex: 1,
        backgroundColor: colors.darkGreen
    },
    loader: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(255,255,255,0.15)`,
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
    scrollContent: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 10
    },
    image: {
        width: mvs(140),
        height: mvs(80),
        top: mvs(20)
    },
    carcare: {
        borderRadius: mvs(20),
        padding: mvs(10),
        minHeight: mvs(100),
        ...COMMON_STYLES.rowDirectionWithSpaceBTW,
        marginBottom: mvs(20)
    },
    time: {
        borderRadius: mvs(10),
        padding: mvs(10),
        marginBottom: mvs(20),
        borderWidth: 0.9,
        borderColor: colors.GRAY,
        marginRight: 5
    },
})
