import { Animated, Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { IMAGES } from '../../../assets/images'
import { STATUS, SelectUnSelectItems, extractNamesByKey, isArabic, processArray } from '../../../others/utils/helpers'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import LinearGradient from 'react-native-linear-gradient'
import ServiceModal from './ServiceModal'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import { AddCar } from '../others/CarDetails'
import SelectCarModal from './SelectCarModal'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { useSelector, useDispatch } from 'react-redux'
import store from '../../../others/redux/store'
import { setBookingStatus, setBookings, setSelectedServices, setServices, setSettings, setVehicles } from '../../../others/redux/reducers/userReducer'
import { BUCKET_URL } from '../../../others/utils/serviceConfig'
import { useIsFocused } from '@react-navigation/native'
import { BookingStatus } from '../../../others/utils/staticData'
import { useTranslation } from 'react-i18next';
import i18n from '../../../others/utils/i18n'

const Home = () => {

    const { t } = useTranslation()
    const [selectedServices, setselectedServices] = useState([])
    const [modal, setmodal] = useState('')
    const [selectCar, setselectCar] = useState('')
    const [state, setState] = useState('')
    const [selectedItem, setselectedItem] = useState({});
    const servicesData1 = useSelector((state: any) => state.user?.services);
    const { vehicles, bookings, servicesObject, bookingStatus } = useSelector((state: any) => state.user);
    const getSettings = useApi(APIService.getSettings)
    const cloneBooking = Object.assign([], bookings);
    const BOOKINGS = bookings?.filter((e: any) => (e.orignalStatus != "COMPLETED" && e.orignalStatus != "CANCELLED"))?.reverse();
    // console.log({ BOOKINGS })
    const servicesData = servicesData1?.filter((e: any) => !e.category)
    const [services, setservices] = useState([...servicesData,
    {
        id: 123456789,
        name: 'Other Car Repair',
        name_ar:'مشاكل اخرى',
        icon: IMAGES['Layer14'],
        category: 'EXTRAT_ITEM',
        isSubService: true
    }
    ])
    const [index, setIndex] = useState(0)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;
    const { user } = useSelector((state: any) => state.user)
    const myvehicles = useApi(APIService.myvehicles)
    const dispatch = useDispatch()
    const mainCategoryServices = useApi(APIService.mainServices)
    const myBookingsService = useApi(APIService.myBookings)
    const isFocused = useIsFocused()
    useEffect(() => {
        myBookingsService.requestCall(user?.id)
            .then((response) => {
                store.dispatch(setBookingStatus(response.statuses))

                store.dispatch(setBookings(response.booking.map((book: any) => {
                    const servicesArray = book?.services?.split(',');
                    const parts = book?.time?.split(' ');
                    const timestamp = parts[0];
                    const STATUSES = response?.statuses
                    console.log({ book })
                    return ({
                        ...book,
                        carName: vehicles.some((e: any) => e.id === book.vehicle_id) ? `${vehicles.find((e: any) => e.id === book.vehicle_id)?.make} ${vehicles.find((e: any) => e.id === book.vehicle_id)?.model}` : "",
                        serviceId: book?.id,
                        services: extractNamesByKey(servicesObject, servicesArray).join(', '),
                        date: timestamp,
                        time: parts[1] + " " + parts[2],
                        status: STATUSES[book?.status + (isArabic() ? '_AR' : "")],
                        orignalStatus: book?.status,
                        payment: `${book?.price | 0} QAR`,
                    })
                }
                )))
            })
            .catch(() => { });
    }, [isFocused])
    useLayoutEffect(() => {
        mainCategoryServices.requestCall().then((response) => {
            // console.log({ services: response.services })
            store.dispatch(setServices(response.services));
        }).catch((error) => { })
        myvehicles.requestCall(user?.id)
            .then((response) => {
                // console.log(response)
                dispatch(setVehicles(response.vehicles))
            })
            .catch(() => { });
    }, [isFocused])
    const isCarousel = React.useRef(null)

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
    const updateProfiles = useApi(APIService.updateProfile)
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
    const CarouselCardItem = ({ item, index }: any) => {
        // console.log({ item })
        return (
            <View
                style={styles.carcare1}>
                <FastImage
                    source={IMAGES['Layer55']}
                    resizeMode='contain'
                    style={styles.image}
                />
                <AppText FONT_16 bold color='black' children={`${t('Number')} ${item?.plate} - ${t('ServiceId')} ${item?.serviceId}  (${item?.carName})`} />
                <AppText FONT_16 style={{ width: '75%' }} bold color={colors.darkGreen2} children={`${item?.date} ${t('at')} ${item?.time}\n${t('Status:')} ${item?.status}`} />
                <AppText style={{ width: '70%' }} children={`${t('Service:')} ${item?.services}`} />
            </View>
        )
    }
    const handleSumit = (newItem: any) => {
        setState((pre: any) => ({ ...pre, [modal]: newItem }))
        setmodal('')
    }
    // const Modal = () => {
    //     if (modal) {
    //         return ()
    //     } else null
    // }
    useEffect(() => {
        store.dispatch(setSelectedServices({ customer_id: user?.id, selectedServices, state }))
    }, [selectCar])
    useEffect(() => {
        getSettings.requestCall().then((res: any) => {
            // console.log({ settingssettingssettingssettings: res?.settings })
            store.dispatch(setSettings(res?.settings))
        }).catch((err) => console.log({ err }))
    }, [])
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title={t('Hi, ') + user?.name} />
                <View style={styles.backWhite} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {BOOKINGS?.length > 0 ?
                            <View >
                                <Carousel
                                    layout="default"
                                    layoutCardOffset={9}
                                    ref={isCarousel}
                                    data={processArray(BOOKINGS)}
                                    renderItem={CarouselCardItem}
                                    sliderWidth={width}
                                    itemWidth={width}
                                    inactiveSlideShift={0}
                                    useScrollView={true}
                                    onSnapToItem={(index: number) => setIndex(index)}
                                />
                            </View>
                            :
                            <Animated.View
                                style={[styles.carcare,
                                {
                                    opacity: fadeAnim,
                                    transform: [{ translateX: slideAnim }],
                                },
                                ]}>
                                <FastImage
                                    source={IMAGES['Layer55']}
                                    resizeMode='contain'
                                    style={styles.image}
                                />
                                <AppText FONT_18 style={{ left: 10 }} bold color={colors.darkGreen2} children={t(`Welcome\nto our clinic`)} />
                            </Animated.View>
                        }
                        <AppText style={{ marginVertical: BOOKINGS?.length > 0 ? 14 : 0, marginBottom: mvs(14) }} FONT_18 Medium children={t('Our Services')} />
                        <View style={[styles.scrollContent, {}]} >
                            {
                                services.map((item: any, idx: number) => {
                                    const foundElement: any = selectedServices.find((i: services) => i.id == item.id);
                                    return (
                                        <Animated.View
                                            key={idx}
                                            style={{ opacity: animatedValues[idx], width: '47%' }}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    setselectedItem(item)
                                                    // console.log({ item })
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
                                                    <AppText Medium children={isArabic() ? item?.name_ar : item?.name} />
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
                        {/* {console.log(JSON.stringify({ selectedServices, state }))} */}
                        <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                            <PrimaryButton
                                disabled={!selectedServices[0]?.id}
                                onPress={() => setselectCar('SelectCarModal')}
                                isBorder width={'47%'}
                                title={t('Select Car')} />
                            <PrimaryButton
                                onPress={() => setselectCar('addCar')}
                                disabled={!selectedServices[0]?.id}
                                width={'47%'}
                                title={t('Add New Car')} />
                        </View>
                    </ScrollView>

                </View>
            </View>
            {modal &&
                <ServiceModal
                    state={state}
                    handleReset={handleReset}
                    setState={setState}
                    modal={modal}
                    handleSumit={handleSumit}
                    setmodal={setmodal}
                    item={selectedItem}
                />
            }
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
        width: "100%",
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
        bottom: 0,
        right: mvs(10)
    },
    carcare: {
        backgroundColor: colors.parrot1,
        borderRadius: mvs(18),
        padding: mvs(20),
        width: width - 34,
        alignSelf: 'center',
        marginBottom: mvs(13)
    },
    carcare1: {
        backgroundColor: colors.parrot1,
        borderRadius: mvs(18),
        padding: mvs(20),
        width: width - 34,
    },
})

type services = {
    id: number,
    name: string,
    icon: any,
    onPress?: any,
    isSubService: boolean
}