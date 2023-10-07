import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'
import OtpVerification from '../../components/reusables/OtpVerification'
import store from '../../others/redux/store'
import { setUser } from '../../others/redux/reducers/userReducer'

const VerifyCode = (props) => {
    let data = props?.route?.params
    data = data ? data.response : null
    const [val, setVal] = useState('')
    const [counter, setCounter] = useState(60);

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
        if (data) {
            if (val === data?.user?.otp) {
                store.dispatch(setUser(data));
                navServices.navigate('MyDrawer')
            }
        }
    }

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.VerifyCode}>
                <AppText bold FONT_22 children='Code Verification' color={colors.WHITE} />
                <OtpVerification value={val} setValue={setVal} />
                <PrimaryButton onPress={handleOtpVerification} title='Submit' />
                <TouchableOpacity onPress={() => { }} style={{ padding: 5 }} >
                    <AppText onPress={() => { if (counter == 0) { setCounter(60) } }} Medium center children={counter == 0 ? `Resend confirmation code?` : counter + ' seconds left'} color={colors.WHITE} />
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


