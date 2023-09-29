import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import PrimaryInput from '../../components/reusables/PrimaryInput'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'

const Login = () => {
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.login}>
                <AppText bold FONT_22 children='Sign In' color={colors.WHITE} />
                <PrimaryInput top={10} placeholder='Email' />
                <PrimaryInput top={10} placeholder='Password' />
                <TouchableOpacity onPress={() => navServices.navigate('ForgetPassword')} style={{ padding: 5 }} >
                    <AppText style={{ alignSelf: "flex-end", top: 7 }} Medium center children={`Forget Password? `} color={colors.WHITE} />
                </TouchableOpacity>
                <PrimaryButton onPress={() => navServices.navigate('MyDrawer')} title='Sign In' />
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