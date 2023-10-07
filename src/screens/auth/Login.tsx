import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
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
import { setServices, setUser } from '../../others/redux/reducers/userReducer'
import { convertArrayToObject } from '../../others/utils/helpers'

const Login = () => {

    const [phone, setPhone] = useState<string>("123456");
    const [password, setPassword] = useState<string>("123456");
    // console.log(store.getState().user)
    const loginService = useApi(APIService.login)
    const mainCategoryServices = useApi(APIService.mainServices)
    const handleSignIn = () => {
        // Perform sign-in logic (e.g., validation, authentication, etc.)
        loginService.requestCall({
            phone,
            password:phone
        }).then((response) => {
            // If sign-in is successful, navigate to the dashboard
            store.dispatch(setUser(response.data));
            // navServices.navigate('VerifyCode', {response:response.data})
        }).catch((error) => { })
        mainCategoryServices.requestCall().then((response) => {
            store.dispatch(setServices(response.services));
        }).catch((error) => { })
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
                <PrimaryButton loading={loginService.loading } disabled={loginService.loading} onPress={handleSignIn} title='Sign In' />
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