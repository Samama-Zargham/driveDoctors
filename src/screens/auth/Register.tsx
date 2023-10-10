import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../../assets/images'
import AppText from '../../components/AppText'
import { colors } from '../../others/utils/colors'
import PrimaryInput from '../../components/reusables/PrimaryInput'
import { mvs } from '../../others/utils/responsive'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import navServices from '../../others/utils/navServices'
import { useApi } from '../../others/services/useApi'
import { APIService } from '../../others/services/APIServices'
import { showError } from '../../others/utils/helpers'

const Register = () => {
    const registerService = useApi(APIService.signUp)

    const [phone, setphone] = useState<any>();
    const [password, setpassword] = useState<any>();
    const [name, setname] = useState<any>();
    const handleRegister = () => {
        const regex = /^[0-9]+$/;
        if (!phone || !name || !password) {
            return showError('Please enter all fields')

        }
        else if (phone?.length > 15 || phone?.length < 7) {
            return showError('Please write correct phone number')
        }
        else if (!regex.test(phone)) {
            console.log(regex.test(phone))
            return showError('Please write phone number in correct format')
        } else {
            registerService.requestCall({ phone, name, password }).then((response) => {
                console.log({ response: response.data })
                navServices.navigate('VerifyCode', { phone })
            }).catch((error) => console.log(error))
        }
    }
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.register}>
                <AppText bold FONT_22 children='Register' color={colors.WHITE} />
                <PrimaryInput top={10} placeholder='Full Name' onChangeText={setname} />
                {/* <PrimaryInput top={10} placeholder='Phone' /> */}
                <PrimaryInput top={10} placeholder='Phone Number' onChangeText={setphone} />
                <PrimaryInput top={10} placeholder='Password' onChangeText={setpassword} />
                <PrimaryButton loading={registerService.loading} onPress={handleRegister} title='Register' />
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