import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import PrimaryInput from '../../components/reusables/PrimaryInput'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'

const Register = () => {
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login']}>
            <View style={styles.register}>
                <AppText bold FONT_22 children='Register' color={colors.WHITE} />
                <PrimaryInput top={10} placeholder='Full Name' />
                <PrimaryInput top={10} placeholder='Email' />
                <PrimaryInput top={10} placeholder='Password' />
                <PrimaryInput top={10} placeholder='Phone Number' />
                <PrimaryButton onPress={() => navServices.navigate('VerifyCode')} title='Register' />
                <TouchableOpacity onPress={() => navServices.navigate('Login')} style={{ padding: 5 }} >
                    <AppText Medium center children={`Already have a account? Sign In`} color={colors.WHITE} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Register

const styles = StyleSheet.create({
    register: {
        flex: 1,
        backgroundColor: 'rgbargba(0,28,6, 0.9)',
        paddingHorizontal: mvs(20),
        justifyContent: "center",
        paddingTop: 50
    }
})