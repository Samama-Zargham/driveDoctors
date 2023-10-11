import { Animated, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
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
import ServiceModal from './ServiceModal'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import { AddCar } from '../others/CarDetails'
import SelectCarModal from './SelectCarModal'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { useSelector, useDispatch } from 'react-redux'
import store, { RootState } from '../../../others/redux/store'
import { setBookings, setVehicles } from '../../../others/redux/reducers/userReducer'
import { BUCKET_URL } from '../../../others/utils/serviceConfig'
const Home = () => {
    const [selectedServices, setselectedServices] = useState([])
    const [modal, setmodal] = useState('')
    const [selectCar, setselectCar] = useState('')
    const [state, setState] = useState('')
    const [selectedItem, setselectedItem] = useState({});
    const servicesData = useSelector((state: RootState) => state.user.services.filter(e => !e.category));

    const [services, setservices] = useState([...servicesData,
    // {
    //     id: 1,
    //     name: 'Car Diagnostic',
    //     icon: IMAGES['Layer7'],
    //     onPress: (item: any) => setmodal(item?.name)
    // },
    // {
    //     id: 2,
    //     name: 'Change Oil',
    //     icon: IMAGES['Layer8']
    // },
    // {
    //     id: 3,
    //     name: 'Suspension',
    //     icon: IMAGES['Layer13copy']
    // },
    // {
    //     id: 4,
    //     name: 'AC Repair',
    //     icon: IMAGES['Layer10'],
    //     onPress: (item: any) => setmodal(item?.name)
    // },
    // {
    //     id: 5,
    //     name: 'Tranmission',
    //     icon: IMAGES['Layer13copy']
    // },
    // {
    //     id: 7,
    //     name: 'Electrical work',
    //     icon: IMAGES['Layer7'],
    //     onPress: (item: any) => setmodal(item?.name)
    // },
    {
        id: 123456789,
        name: 'Other Car Repair',
        icon: IMAGES['Layer14'],
        category: 'EXTRAT_ITEM',
        isSubService: true
    }
    ])


    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;
    const { user } = useSelector((state: RootState) => state.user)
    const myvehicles = useApi(APIService.myvehicles)
    const dispatch = useDispatch()
    useEffect(() => {
        myvehicles.requestCall(user?.id)
            .then((response) => {
                // console.log(response)
                dispatch(setVehicles(response.vehicles))
            })
            .catch(() => { });
    }, [])

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
    // console.log({state})
    const handleReset = () => {
        delete state[modal]
        SelectUnSelectItems(selectedItem, selectedServices, setselectedServices)
        setmodal('')
    }
    const handleSumit = (newItem: any) => {
        setState((pre: any) => ({ ...pre, [modal]: newItem }))
        setmodal('')
    }
    const Modal = React.useMemo(() => {
        if (modal) {
            return (<ServiceModal
                state={state}
                handleReset={handleReset}
                setState={setState}
                modal={modal}
                handleSumit={handleSumit}
                setmodal={setmodal}
                item={selectedItem}
            />)
        } else null
    }, [modal])
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title={'Hi, ' + user?.name} />
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
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    setselectedItem(item)
                                                    console.log({ item })
                                                    if (state[item?.id] && item?.isSubService) {
                                                        setmodal(item?.id)
                                                    }
                                                    else {
                                                        // item?.onPress && !foundElement?.id && item?.onPress(item)
                                                        if (item?.ask_description === "1" && !foundElement?.id) {
                                                            setmodal(item?.id)
                                                        } else if (item?.category === "EXTRAT_ITEM" && !foundElement?.id) {
                                                            setmodal(item?.id)
                                                        }
                                                        SelectUnSelectItems(item, selectedServices, setselectedServices)
                                                    }
                                                }} >
                                                <LinearGradient
                                                    style={styles.service}
                                                    start={{ x: 0, y: 2 }} end={{ x: 1.5, y: 0 }}
                                                    colors={foundElement?.id ? [colors.parrot, colors.parrot] : [colors.parrot, colors.parrot2, colors.parrot2]} >
                                                    <AppText Medium children={item.name} />
                                                    <FastImage
                                                        source={{ uri: `${BUCKET_URL}/${item.icon}` }}
                                                        resizeMode='contain'
                                                        style={styles.icon}
                                                    />
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </Animated.View>
                                    )
                                })
                            }
                        </View>
                        {/* {console.log(JSON.stringify({selectedServices, state}))} */}
                        {/* <PrimaryButton disabled={!selectedServices[0]?.id} onPress={() => navServices.navigate('CarDetails')} title='Continue' /> */}
                        <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                            <PrimaryButton
                                disabled={!selectedServices[0]?.id}
                                onPress={() => setselectCar('SelectCarModal')}
                                isBorder width={'47%'}
                                title='Select Car' />
                            <PrimaryButton
                                onPress={() => setselectCar('addCar')}
                                disabled={!selectedServices[0]?.id}
                                width={'47%'}
                                title='Add New Car' />
                        </View>
                    </ScrollView>

                </View>
            </View>
            {Modal}
            {
                selectCar == 'addCar' && <AddCar isNavigate={true} setmodal={setselectCar} />
            }
            {
                selectCar == 'SelectCarModal' && <SelectCarModal setmodal={setselectCar} />
            }
        </BaseScreen>
    )
}

export default Home

const styles = StyleSheet.create({
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
    onPress?: any,
    isSubService: boolean
}