import { ImageBackground,I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import PrimaryInput from '../../components/reusables/PrimaryInput'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'
import { APIService } from '../../others/services/APIServices'
import { useApi } from '../../others/services/useApi'
import store from '../../others/redux/store'
import { setServices, setSettings, setUser } from '../../others/redux/reducers/userReducer'
import { _returnError, convertArrayToObject, countryCode,setAsyncStorageValue, showError, showSuccess } from '../../others/utils/helpers'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import i18n from '../../others/utils/i18n'
import RNRestart from 'react-native-restart';
import { COMMON_STYLES } from '../../others/utils/commonStyles'
const Login = () => {
    const { t } = useTranslation();
    const [phone, setPhone] = useState<any>('');
    // const [password, setPassword] = useState<string>("123456");

    const loginService = useApi(APIService.login)
    const mainCategoryServices = useApi(APIService.mainServices)
    const getSettings = useApi(APIService.getSettings)
    useEffect(() => {
        getSettings.requestCall().then((res: any) => {
            // console.log({ settings: res?.settings })
            store.dispatch(setSettings(res?.settings))
        }).catch((err) => console.log({ err }))
    }, [])

    const handleSignIn = () => {
        const regex = /^[0-9]+$/;
        if (!phone) {
            return showError(t('Input Field is empty'))
        }
        if (phone?.length > 15 || phone?.length < 7) {
            return showError(t('Please write correct phone number'))
        }
        // if (!regex.test(phone)) {
        //     return showError('Please write phone number in correct format')
        // }
        // else {
        loginService.requestCall({ phone: countryCode + phone }).then((response) => {
            // console.log({ loginService: response.data })
            store.dispatch(setUser(response.data));
            if (response?.data?.error == 'Invalid customer phone.') {
                showError(t('Phone number not registered'))
            }
            else {
                mainCategoryServices.requestCall().then((response) => {
                    showSuccess(t('Otp code send successfully'))
                    console.log({ services: response.services })
                    store.dispatch(setServices(response.services));
                    navServices.navigate('VerifyCode', { phone })
                }).catch((error) => { })
            }
        }).catch((error) => console.log(_returnError(error)))
        // }

    };
    const languageChange = async (lang: string) => {
        if (i18n.language !== lang) {
            I18nManager.forceRTL(i18n.language !== 'ar');
            await setAsyncStorageValue('lang', lang);
            RNRestart.Restart();
        }
    }

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.login}>
                <AppText bold FONT_22 children={t('Sign In')} color={colors.WHITE} />
                <PrimaryInput keyboardType='phone-pad' isPhone top={10} value={phone} placeholder={t('Phone Number')} onChangeText={setPhone} />
                {/* <PrimaryInput top={10} value={password} placeholder='Password' onChangeText={setPassword} /> */}
                {/* <TouchableOpacity onPress={() => navServices.navigate('ForgetPassword')} style={{ padding: 5 }} >
                    <AppText style={{ alignSelf: "flex-end", top: 7 }} Medium center children={`Forget Password? `} color={colors.WHITE} />
                </TouchableOpacity> */}
                <PrimaryButton loading={loginService.loading || mainCategoryServices?.loading} disabled={loginService.loading} onPress={handleSignIn} title={t('Sign In')} />
                <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                    <PrimaryButton
                        onPress={() => languageChange('ar')}
                        isBorder={i18next.language !== 'ar'}
                        width={'47%'}
                        title={t('Arabic')} />
                    <PrimaryButton
                        onPress={() => languageChange('en')}
                        isBorder={i18next.language !== 'en'}
                        width={'47%'}
                        title={t('English')} />
                </View>
                <TouchableOpacity onPress={() => navServices.navigate('Register')} style={{ padding: 5 }} >
                    <AppText Medium center children={t(`Don't have an account? Sign Up`)} color={colors.WHITE} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: 'rgbargba(0,28,6, 0.9)',
        paddingHorizontal: mvs(20),
        justifyContent: "center",
        paddingTop: 20
    }
})