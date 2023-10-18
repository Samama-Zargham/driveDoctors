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
import { useSelector } from 'react-redux'
import store from '../../../others/redux/store'
import { setSelectedServices } from '../../../others/redux/reducers/userReducer'
import moment from 'moment'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import BaseModal from '../../../components/reusables/BaseModal'

const PickUp = (props) => {
    const { vehicle_id } = props.route.params
    const selectedServices = useSelector((state: any) => state.user?.selectedServices);
    const [pickUpType, setpickUpType] = useState()
    const [date, setdate] = useState('')
    const [time, settime] = useState('')

    const [modal, setmodal] = useState('')
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
    const addBooking = useApi(APIService.addBooking)
    const handleConfirm = () => {
        let dateTimeStr = date + " " + time;
        const parsedDate = moment(dateTimeStr, "YYYY-MM-DD h:mm A");
        let time1: any = parsedDate?.toISOString();
        // store.dispatch(setSelectedServices({ ...selectedServices, time: time1 })) //PREV
        store.dispatch(setSelectedServices({ ...selectedServices, time: dateTimeStr })) //NOW
        let serviceIds: any = [];
        let serviceNames: any = [];

        let messages = { ...selectedServices?.state }
        delete messages[123456789]
        console.log(messages)
        let price = 0;
        if (selectedServices?.selectedServices?.length) {
            selectedServices?.selectedServices?.forEach((element: any) => {
                if (element?.id != '123456789') {
                    serviceIds?.push(element?.id)
                    serviceNames?.push(element?.name)

                    price += +element?.charges
                }
            });
        }
        if (Object.keys(selectedServices?.state).length !== 0) {
            Object.keys(selectedServices?.state).forEach(function (key, index) {
                let noKey = '123456789'
                if (key?.toString() == noKey?.toString()) {
                    selectedServices?.state['123456789']?.forEach((element: any) => {
                        if (element?.id != '123456789') {
                            serviceIds?.push(element?.id)
                            serviceNames?.push(element?.name)
                            price += +element?.charges
                        }
                    });
                } else {
                    serviceIds.push(key)
                }
            });
        }

        let payload: {
            customer_id: number;
            vehicle_id: number;
            services: string;
            price: number;
            time: string;
            is_pickup: number | string;
            service_messages?: any
        } = {
            customer_id: selectedServices?.customer_id,
            vehicle_id: vehicle_id,//selectedServices?.vehicle_id,
            services: [...new Set(serviceIds)].join(','),
            price,
            time: dateTimeStr,//selectedServices?.time1,
            is_pickup: selectedServices?.is_pickup,
        }
        if (messages) {

            payload.service_messages = messages
        }

        // const formData = new FormData(); // @ts-ignore
        // Object.keys(payload).forEach(key => formData.append(key, payload));
        addBooking.requestCall(payload).then((res: any) => {
            store.dispatch(setSelectedServices({
                ...selectedServices,
                serviceId: res?.data?.id,
                price,
                date,
                time,
                serviceNames: [...new Set(serviceNames)].join(','),
            })) //PREV

            setmodal('LottieView')
            setTimeout(() => {
                setmodal('')
                navServices.navigate('ThanksScreen')
            }, 3000);
        }).catch((err) => {
            console.log({ err })
        })


    }
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
                                            store.dispatch(setSelectedServices({ ...selectedServices, is_pickup: _?.id == 1 ? 1 : 0 }))
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
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => setmodal('time')}
                                    style={styles.inputView} >
                                    <AppText FONT_18 children={time || 'Select Time Slot'} />
                                    <FastImage source={IMAGES['date']}
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                    />
                                </TouchableOpacity>

                            </>
                        }
                        {
                            time &&
                            <PrimaryButton loading={addBooking.loading} onPress={handleConfirm} title='Confirm' />
                        }

                    </ScrollView>
                </View>
            </View>

            {
                modal == 'LottieView' &&
                <View
                    style={styles.loader}>
                    <LottieView
                        source={require('../../../assets/gif/booked.json')}
                        autoPlay
                        loop={false}
                        colorFilters={ColorFilter}
                        style={{
                            position: "absolute",
                            width: '100%',
                            height: mvs(isTablet ? 400 : 250)
                        }}
                    />
                </View>
            }
            {
                modal == 'time' &&
                <BaseModal
                    containerStyle={{ width: '85%', maxHeight: 350, overflow: "hidden" }}
                    modalvisible={true}
                    toggleModal={() => setmodal('')}>
                    <AppText FONT_18 bold color={colors.darkGreen2} children={'Select Time'} />
                    <ScrollView>
                        <View style={styles.scrollContent}>

                            {
                                timeArray?.map((_: any, i: number) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => {
                                                settime(_)
                                                setmodal('')
                                            }}
                                            key={i} style={[styles.time, { backgroundColor: time == _ ? colors.parrot : colors.WHITE }]} >
                                            <AppText Medium style={{ padding: 2 }} children={_} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </BaseModal>
            }
        </BaseScreen >
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
    inputView: {
        backgroundColor: colors.WHITE,
        height: mvs(60),
        borderRadius: mvs(10),
        paddingLeft: 10,
        marginTop: mvs(18),
        borderWidth: 0.9,
        borderColor: colors.GRAY,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: mvs(20)
    },
    scrollContent: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
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


const ColorFilter = [
    {
        keypath: 'Shape Layer 9', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Layer 2/confirmation Outlines', // Replace with the name of the layer or path you want to target
        color: colors.WHITE, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 6', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 7', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 8', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 3', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 4', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 2', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Shape Layer 5', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'ADBE Vector Graphic - Fill', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Comp 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Fill 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Ellipse 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'ADBE Vector Group', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Trim Paths 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Transform', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Transform', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Transform', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Capa 1/confirmation Outlines', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Group 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'Path 1', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'ADBE Vector Shape - Group', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'ADBE Vector Graphic - Fill', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },
    {
        keypath: 'ADBE Vector Group', // Replace with the name of the layer or path you want to target
        color: colors.darkGreen, // Replace with the desired color
    },

]


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