import { Animated, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import { SelectUnSelectItems } from '../../../others/utils/helpers'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import navServices from '../../../others/utils/navServices'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import LinearGradient from 'react-native-linear-gradient'
import BaseModal from '../../../components/reusables/BaseModal'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import { fontFamily } from '../../../others/utils/fonts'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'

const Home = () => {
    const [selectedServices, setselectedServices] = useState([])
    const [modal, setmodal] = useState('')
    const [services, setservices] = useState([
        {
            id: 1,
            name: 'Car Diagnostic',
            icon: IMAGES['Layer7'],
            onPress: (item: any) => setmodal(item?.name)
        },
        {
            id: 2,
            name: 'Car Oil Change',
            icon: IMAGES['Layer8']
        },
        {
            id: 3,
            name: 'Battery Replace',
            icon: IMAGES['Layer9']
        },
        {
            id: 4,
            name: 'AC Repair',
            icon: IMAGES['Layer10'],
            onPress: (item: any) => setmodal(item?.name)
        },
        {
            id: 5,
            name: 'Try Change',
            icon: IMAGES['Layer13copy']
        },
        {
            id: 6,
            name: 'Car Repair',
            icon: IMAGES['Layer14'],
            onPress: (item: any) => navServices.navigate('SubServices', { item })
        },
    ])
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        const fadeIn = Animated.timing(fadeAnim, {
            toValue: 1, // Fade-in to full opacity
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // For performance, use native driver
        });

        const slideIn = Animated.timing(slideAnim, {
            toValue: 0, // Slide to the right (on the screen)
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // For performance, use native driver
        });

        Animated.parallel([fadeIn, slideIn]).start();
    }, [fadeAnim, slideAnim]);

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
                <PrimaryHeader title='Hi, John Doe' />
                <View style={styles.backWhite} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Animated.View
                            style={[styles.carcare,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateX: slideAnim }],
                            },
                            ]}>
                            <FastImage
                                source={IMAGES['Layer5']}
                                resizeMode='contain'
                                style={styles.image}
                            />
                            <AppText FONT_18 style={{ left: 10 }} bold color={colors.darkGreen2} children={`Car care at\nat your doorstep`} />
                        </Animated.View>
                        <AppText style={{ marginVertical: mvs(14) }} FONT_18 Medium children='Our Services' />
                        <View style={styles.scrollContent} >
                            {
                                services.map((item: services, idx: number) => {
                                    const foundElement: any = selectedServices.find((i: services) => i.id == item.id);
                                    return (
                                        <Animated.View
                                            key={idx}
                                            style={{ opacity: animatedValues[idx], width: '47%' }}>
                                            <LinearGradient
                                                style={styles.service}
                                                start={{ x: 0, y: 2 }} end={{ x: 1.5, y: 0 }}
                                                colors={foundElement?.id ? [colors.parrot, colors.parrot] : [colors.parrot, colors.parrot2, colors.parrot2]} >
                                                <TouchableOpacity
                                                    activeOpacity={0.7}
                                                    onPress={() => {
                                                        if (!foundElement?.id && item?.onPress) {
                                                            item?.onPress(item)
                                                        }
                                                        SelectUnSelectItems(item, selectedServices, setselectedServices)
                                                    }} >
                                                    <AppText Medium children={item.name} />
                                                    <FastImage
                                                        source={item.icon}
                                                        resizeMode='contain'
                                                        style={styles.icon}
                                                    />
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </Animated.View>
                                    )
                                })
                            }
                        </View>
                        {
                            selectedServices.length > 0 &&
                            <PrimaryButton onPress={() => navServices.navigate('CarDetails')} title='Continue' />
                        }
                    </ScrollView>
                    {
                        modal &&
                        <InputModal modal={modal} setmodal={setmodal} />
                    }
                </View>
            </View>
        </BaseScreen>
    )
}

export default Home
const InputModal = ({ setmodal, modal }: any) => {
    const handleModal = () => setmodal(false)
    const [txt, settxt] = useState('')
    const handleReset = () => {

    }
    return (
        <BaseModal
            containerStyle={{ paddingBottom: mvs(5), width: '85%', overflow: "hidden" }}
            modalvisible={true}
            toggleModal={() => setmodal(false)}>

            <AppText FONT_18 style={{ marginBottom: mvs(10) }} semiBold children={modal} />
            <TextInput
                style={styles.input}
                multiline={true}
                onChangeText={settxt}
                placeholder={'Describe the issue you are facing...'}
            />
            <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                <PrimaryButton onPress={handleReset} isBorder width={'47%'} title='Reset' />
                <PrimaryButton
                    onPress={() => {
                        handleModal()
                        navServices.navigate('Login')
                    }}
                    disabled={!txt}
                    width={'47%'}
                    title='Submit' />
            </View>
        </BaseModal>
    )
}
const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: colors.WHITE,
        borderRadius: 6,
        height: mvs(120),
        textAlignVertical: "top",
        padding: 10,
        fontFamily: fontFamily[400],
        alignSelf: "center"
    },
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    icon: {
        width: mvs(90),
        height: mvs(65),
        alignSelf: "flex-end",
        left: mvs(20),
        top: mvs(10),
        right: mvs(10)
    },
    scrollContent: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%"
    },
    service: {
        borderRadius: mvs(20),
        padding: mvs(20),
        width: "100%",
        minHeight: mvs(100),
        marginBottom: mvs(22),
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1
    },
    image: {
        width: mvs(100),
        height: mvs(70),
        position: "absolute",
        alignSelf: "flex-end",
        top: Platform.OS == 'android' ? 26 : 24,
        right: mvs(10)
    },
    carcare: {
        backgroundColor: colors.parrot1,
        borderRadius: mvs(20),
        padding: mvs(20),
    },
})

type services = {
    id: number,
    name: string,
    icon: any,
    onPress?: any
}