import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
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
import { _returnError, convertArrayToObject, showError } from '../../others/utils/helpers'

const Login = () => {

    const [phone, setPhone] = useState<any>('123456');
    // const [password, setPassword] = useState<string>("123456");

    const loginService = useApi(APIService.login)
    const mainCategoryServices = useApi(APIService.mainServices)
    const getSettings = useApi(APIService.getSettings)
    useEffect(() => {
        getSettings.requestCall().then((res: any) => {
            console.log({ settings: res?.settings })
            store.dispatch(setSettings(res?.settings))
        }).catch((err) => console.log({ err }))
    }, [])

    const handleSignIn = () => {
        const regex = /^[0-9]+$/;

        // if (phone?.length > 15 || phone?.length < 7) {
        //     return showError('Please write correct phone number')
        // }
        // if (!regex.test(phone)) {
        //     return showError('Please write phone number in correct format')
        // }
        // else {
        loginService.requestCall({ phone }).then((response) => {
            console.log({ response: response.data })
            // store.dispatch(setUser(response.data));
            if (response?.data?.error == 'Invalid customer phone.') {
                showError('Phone number not registered')
            }
            else {
                mainCategoryServices.requestCall().then((response) => {
                    console.log({ services: response.services })
                    store.dispatch(setServices(response.services));
                    navServices.navigate('VerifyCode', { phone })
                }).catch((error) => { })
            }
        }).catch((error) => console.log(_returnError(error)))
        // }

    };
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.login}>
                <AppText bold FONT_22 children='Sign In' color={colors.WHITE} />
                <PrimaryInput top={10} value={phone} placeholder='Phone Number' onChangeText={setPhone} />
                {/* <PrimaryInput top={10} value={password} placeholder='Password' onChangeText={setPassword} /> */}
                {/* <TouchableOpacity onPress={() => navServices.navigate('ForgetPassword')} style={{ padding: 5 }} >
                    <AppText style={{ alignSelf: "flex-end", top: 7 }} Medium center children={`Forget Password? `} color={colors.WHITE} />
                </TouchableOpacity> */}
                <PrimaryButton loading={loginService.loading || mainCategoryServices?.loading} disabled={loginService.loading} onPress={handleSignIn} title='Sign In' />
                <TouchableOpacity onPress={() => navServices.navigate('Register')} style={{ padding: 5 }} >
                    <AppText Medium center children={`Don't have an account? Sign Up`} color={colors.WHITE} />
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