import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import Home from '../screens/main/home';
import Bookings from '../screens/main/bookings';
import Profile from '../screens/main/profile';
import Notifications from '../screens/main/notifications';
import FastImage from "react-native-fast-image";
import { IMAGES } from '../assets/images';
import { colors } from '../others/utils/colors';
import { mvs } from '../others/utils/responsive';
import { COMMON_STYLES } from '../others/utils/commonStyles';
import { Platform, StatusBar, Text, View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import VerifyCode from '../screens/auth/VerifyCode';
import PickUp from '../screens/main/others/PickUp';
import CarDetails from '../screens/main/others/CarDetails';
import CalculateCharges from '../screens/main/others/CalculateCharges';
import Contact from '../screens/main/others/Contact';
import MachanicContact from '../screens/main/others/MachanicContact';
import MapScreen from '../screens/main/others/MapScreen';
import ForgetPassword from '../screens/auth/ForgetPassword';
import Disclaimer from '../screens/main/others/Disclaimer';
import PrivacyPolicy from '../screens/main/others/PrivacyPolicy';
import RateUs from '../screens/main/others/RateUs';
import AppText from '../components/AppText';
import ThanksScreen from '../screens/main/others/ThanksScreen';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainNav() {
    const isLogedIn = useSelector((state: any) => state.user.loggedInUser)
    // console.log({ isLogedIn })
    const insets = useSafeAreaInsets();
    return (
        <View style={[{ flex: 1 }, Platform.OS == 'android' && { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            {isLogedIn ? <MainStack /> : <AuthStack />}
        </View>
    );
}

function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName='MyDrawer'
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: customTransition
            }}>
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
            <Stack.Screen name="PickUp" component={PickUp} />
            <Stack.Screen name="CarDetails" component={CarDetails} />
            <Stack.Screen name="CalculateCharges" component={CalculateCharges} />
            <Stack.Screen name="MachanicContact" component={MachanicContact} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ThanksScreen" component={ThanksScreen} />

        </Stack.Navigator>
    );
}

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: customTransition
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
        </Stack.Navigator>
    );
}



function MyDrawer() {
    const { t } = useTranslation()
    const DrawerItems = [
        {
            label: t("Home "),
            icon: "Layer19",
            route: 'Home',
            component: BottomTab,
        },
        {
            label: t("Bookings"),
            icon: "Layer18",
            route: 'booking',
            component: Bookings,
        },
        {
            label: t("Listed Cars"),
            icon: "Layer21",
            route: 'CarDetails',
            component: CarDetails,
        },
        {
            label: t("Notifications"),
            icon: "Layer16",
            route: 'Notification',
            component: Notifications,
        },
        {
            label: t("Contact Us"),
            icon: "Layer20",
            route: 'Contact',
            component: Contact,
        },
        {
            label: t("Privacy Policy"),
            icon: "Layer25copy",
            route: 'PrivacyPolicy',
            component: PrivacyPolicy,
        },
        {
            label: t("Disclaimer"),
            icon: "Layer26",
            route: 'Disclaimer',
            component: Disclaimer,
        }
    ];

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer  {...props} data={DrawerItems} />}
            screenOptions={{
                headerShown: false,
                // overlayColor: "transparent",
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width: '100%',
                },
                drawerActiveBackgroundColor: colors.darkGreen
            }}>
            {DrawerItems.map((_: any, i: any) => (
                <Drawer.Screen
                    key={i}
                    name={_.label}
                    component={_.component}
                    // options={{
                    //     // @ts-ignore
                    //     item: _,
                    //     unmountOnBlur: _?.unmountOnBlur || false
                    // }}
                    options={{
                        swipeEnabled: false,
                        // @ts-ignore
                        item: _,
                        unmountOnBlur: _?.unmountOnBlur || false,
                        drawerItemStyle: {
                            height: mvs(48),
                            width: mvs(200),
                            paddingVertical: 0,
                            marginVertical: 0,
                        },
                        drawerLabel: ({ focused, color }) => <AppText bold FONT_16 color={focused ? colors.WHITE : colors.darkGreen} children={_.label} />,
                        drawerIcon: ({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES[_.icon]}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                tintColor={focused ? colors.WHITE : colors.BLACK}
                                resizeMode='contain'
                            />
                        )
                    }}
                />
            ))}
        </Drawer.Navigator >
    );
}

const BottomTab = () => {
    const { t } = useTranslation()
    const TabItems = [
        {
            label: t("Home"),
            icon: "Layer19",
            component: Home,
        },
        {
            label: t("Bookings"),
            icon: "Layer18",
            component: Bookings,
        },
        {
            label: t("Notifications"),
            icon: "Layer16",
            component: Notifications,
        },
        {
            label: t("Profile"),
            icon: "Layer152",
            component: Profile,
        },
    ];
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarActiveTintColor: colors.BLACK,
                tabBarStyle: {
                    ...COMMON_STYLES.elevation10,
                    backgroundColor: colors.WHITE,
                    paddingTop: 5,
                    height: Platform.OS == 'android' ? mvs(60) : mvs(90)
                },
                tabBarLabelStyle: {
                    paddingBottom: mvs(5)
                }
            }}>
            {TabItems.map((_: any, i: number) => (
                <Tab.Screen key={i} name={_?.label} component={_?.component}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            // console.log({name,focused}) // @ts-ignore
                            const icon: any = IMAGES[_.icon];
                            return (<FastImage source={icon}
                                style={{ height: mvs(24), width: mvs(24) }}
                                resizeMode='contain'
                                tintColor={focused ? colors.BLACK : colors.GRAY}
                            />
                            );
                        }
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}
export default MainNav;

const customTransition = ({ current }: any) => {
    return {
        cardStyle: {
            opacity: current.progress,
            transform: [
                {
                    scale: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                    }),
                },
            ],
        },
    };
};



