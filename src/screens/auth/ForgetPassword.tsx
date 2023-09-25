import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import PrimaryInput from '../../components/reusables/PrimaryInput'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'

const ForgetPassword = () => {
    return (
        <ImageBackground
            resizeMode='stretch'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.ForgetPassword}>
                <AppText bold FONT_22 children='Forget Password' color={colors.WHITE} />
                <PrimaryInput top={10} placeholder='Email' />
                <PrimaryButton onPress={() => navServices.navigate('VerifyCode')} title='Forget' />
                <TouchableOpacity onPress={() => navServices.navigate('Login')} style={{ padding: 5 }} >
                    <AppText Medium center children={`back to login`} color={colors.WHITE} />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    ForgetPassword: {
        flex: 1,
        backgroundColor: 'rgbargba(0,28,6, 0.9)',
        paddingHorizontal: mvs(20),
        justifyContent: "center",
        paddingTop: 20
    }
})