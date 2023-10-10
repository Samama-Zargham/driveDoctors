import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import OtpVerification from '../../components/reusables/OtpVerification'
import navServices from '../../others/utils/navServices'
import store from '../../others/redux/store'
import { setUser } from '../../others/redux/reducers/userReducer'
import { useRoute } from '@react-navigation/native'
import { APIService } from '../../others/services/APIServices'
import { useApi } from '../../others/services/useApi'
import { showError } from '../../others/utils/helpers'
import { useDispatch } from 'react-redux'

const VerifyCode = () => {
    const loginService = useApi(APIService.login)
    const verifyOtp = useApi(APIService.verifyOtp)
    const dispatch = useDispatch()

    // let data = useRoute()?.params
    let phone = useRoute()?.params?.phone
    // data = data ? data.response : null
    const [otp, setotp] = useState('')
    const [counter, setCounter] = useState(60);
    console.log({ phone })
    useEffect(() => {
        let interval: any;
        if (counter > 0) {
            interval = setInterval(() => {
                setCounter((pre) => pre - 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [counter]);


    const handleOtpVerification = () => {
        // if (data) {
        //     if (val === data?.user?.otp) {
        //         store.dispatch(setUser(data));
        //         navServices.navigate('MyDrawer')
        //     }
        // }

        if (otp?.length < 4) {
            return alert('Please enter correct OTP')
        } else {
            verifyOtp.requestCall({
                phone,
                otp
            }).then((res) => {
                if (res?.data?.error == 'Invalid OTP.') {
                    showError('Invalid OTP')
                }
                else dispatch(setUser({ ...res?.data, loggedInUser: true }));
            }).catch((err) => console.log({ err }))
        }
    }
    const handleResend = () => {
        if (counter == 0) { setCounter(60) }
        loginService.requestCall({ phone }).then((response) => {
            console.log({ response: response.data })
        }).catch((error) => console.log(error))
    }

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.VerifyCode}>
                <AppText bold FONT_22 children='Code Verification' color={colors.WHITE} />
                <OtpVerification value={otp} setValue={setotp} />
                <PrimaryButton loading={verifyOtp.loading} onPress={handleOtpVerification} title='Submit' />
                <TouchableOpacity disabled={counter !== 0} onPress={handleResend} style={{ padding: 5 }} >
                    <AppText Medium center children={counter == 0 ? `Resend confirmation code?` : counter + ' seconds left'} color={colors.WHITE} />
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


