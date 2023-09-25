import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'
import OtpVerification from '../../components/reusables/OtpVerification'

const VerifyCode = () => {
    const [val, setVal] = useState('')
    return (
        <ImageBackground
            resizeMode='stretch'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.VerifyCode}>
                <AppText bold FONT_22 children='Code Verification' color={colors.WHITE} />
                <OtpVerification value={val} setValue={setVal} />
                <PrimaryButton onPress={() => navServices.navigate('Login')} title='Submit' />
                <TouchableOpacity onPress={() => { }} style={{ padding: 5 }} >
                    <AppText Medium center children={`Resend confirmation code?`} color={colors.WHITE} />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default VerifyCode

const styles = StyleSheet.create({
    VerifyCode: {
        flex: 1,
        backgroundColor: 'rgbargba(0,28,6, 0.9)',
        paddingHorizontal: mvs(20),
        justifyContent: "center",
        paddingTop: 20
    }
})