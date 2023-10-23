import { I18nManager, Linking, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../components/AppText'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { colors } from '../others/utils/colors'
import { mvs, width } from '../others/utils/responsive'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../assets/images'
import { COMMON_STYLES } from '../others/utils/commonStyles'
import navServices from '../others/utils/navServices'
import PrimaryHeader from '../components/reusables/PrimaryHeader'
import AlertModal from '../components/reusables/AlertModal'
import DeviceInfo from 'react-native-device-info';
import ToggleSwitch from 'toggle-switch-react-native'
import { fontFamily } from '../others/utils/fonts'
import store from '../others/redux/store'
import { setUser } from '../others/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import i18next from 'i18next'
import { setAsyncStorageValue } from '../others/utils/helpers'
import i18n from '../others/utils/i18n'
import RNRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next'


const CustomDrawer = (props: any) => {
    const { t } = useTranslation()

    const [modal, setmodal] = useState('')
    const isTablet = DeviceInfo.isTablet();
    const { Settings } = useSelector((state: any) => state.user)
    const androidLink = Settings?.find((setting: any) => setting?.name === 'androidStore')?.value
    const iphoneLink = Settings?.find((setting: any) => setting?.name === 'iPhoneStore')?.value

    const [toggle, settoggle] = useState(i18next.language === 'ar' ? true : false)
    const languageChange = async () => {
        I18nManager.forceRTL(i18n.language !== 'ar');
        await setAsyncStorageValue('lang', i18next.language === 'ar' ? 'en' : 'ar');
        RNRestart.Restart();
    }
    return (
        <View style={styles.backDark} >
            {/* header */}
            <PrimaryHeader rightIcon={false} containerStyle={{ marginTop: mvs(10) }} title={t('Menu')} />
            <View style={styles.backWhite} >

                {/* Drawer List Item */}
                <DrawerContentScrollView
                    {...props}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ position: 'absolute', top: 0, left: 0, right: 0, }}
                    bounces={false}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        labelStyle={{
                            height: mvs(48),
                            paddingVertical: 0,
                            marginVertical: 0,
                        }}
                        onPress={() => {
                            if (Platform.OS == 'android') {
                                Linking.openURL(androidLink)
                            } else Linking.openURL(iphoneLink)
                            navServices.navigate('Home')
                        }}
                        label={({ focused, color }) => (<AppText FONT_16 bold color={colors.darkGreen} children={t("Rate Us")} />)}
                        icon={({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES['Layer24']}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                resizeMode='contain'
                            />
                        )} />
                    <DrawerItem
                        labelStyle={{
                            height: mvs(48),
                            paddingVertical: 0,
                            marginVertical: 0,
                        }}
                        activeTintColor='red'
                        onPress={languageChange}
                        label={({ focused, color }) => (
                            <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { width: width - 115 }]}>
                                <AppText FONT_16 bold color={colors.darkGreen} children={t("Language")} />
                                <ToggleSwitch
                                    isOn={toggle}
                                    onColor={'#4bb04f'}
                                    offColor={colors.darkGreen}
                                    label={toggle ? 'AR' : 'EN'}
                                    labelStyle={{ color: "black", fontFamily: fontFamily[600] }}
                                    size="small"
                                    onToggle={languageChange}
                                />
                            </View>
                        )}
                        icon={({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES['Layer23']}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                resizeMode='contain'
                            />
                        )} />
                    <DrawerItem
                        labelStyle={{
                            height: mvs(48),
                            paddingVertical: 0,
                            marginVertical: 0,
                        }}
                        onPress={() => setmodal('signout')}
                        label={({ focused, color }) => (<AppText FONT_16 bold color={colors.darkGreen} children={t("Logout")} />)}
                        icon={({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES['logoutIcon']}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                resizeMode='contain'
                            />
                        )} />

                </DrawerContentScrollView>
                {/* footer */}
                <View >
                    <AppText color={colors.GRAY} center children={t('Developed by Selida Interactive')} />
                    <AppText color={colors.GRAY} style={{ marginBottom: 10 }} center children={t('Version ') + "1.0.0"} />
                </View >
            </View >

            {
                modal == 'signout' &&
                <AlertModal
                    setmodalvisible={() => { setmodal('') }}
                    title={t('Sign Out')}
                    description={t('Are you sure you want to Sign Out?')}
                    handleYes={() => {
                        store?.dispatch(setUser({
                            loggedInUser: false,
                            user: null,
                            access_token: null
                        }))
                    }}
                />
            }
        </View >
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    backDark: {
        flex: 1,
        backgroundColor: colors.darkGreen,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 20
    },
    backWhite: {
        // marginTop: 20,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
        // borderBottomRightRadius: 20
    },
    items: {
        ...COMMON_STYLES.rowDirection,
        marginVertical: 7,
        width: '70%',
        padding: 10,
        borderRadius: mvs(20)
    },
    items1: {
        ...COMMON_STYLES.rowDirection,
        marginVertical: 20
    },
    items2: {
        ...COMMON_STYLES.rowDirection,
    }

})