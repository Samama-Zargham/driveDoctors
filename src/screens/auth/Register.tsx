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
import { countryCode, showError, showSuccess } from '../../others/utils/helpers'
import { setServices } from '../../others/redux/reducers/userReducer'
import store from '../../others/redux/store'
import { useTranslation } from 'react-i18next'

const Register = () => {
    const registerService = useApi(APIService.signUp)
    const mainCategoryServices = useApi(APIService.mainServices)
    const { t } = useTranslation();
    const [phone, setphone] = useState<any>();
    const [password, setpassword] = useState<any>();
    const [name, setname] = useState<any>();
    const handleRegister = () => {
        const regex = /^[0-9]+$/;
        if (!phone || !name || !password) {
            return showError(t('Please enter all fields'))

        }
        else if (phone?.length > 15 || phone?.length < 7) {
            return showError(t('Please write correct phone number'))
        }
        else if (!regex.test(phone)) {
            return showError(t('Please write phone number in correct format'))
        } else {
            registerService.requestCall({ phone: countryCode + phone, name, password }).then((response) => {
                // console.log({ response: response.data })
                mainCategoryServices.requestCall().then((response) => {
                    showSuccess(t('Otp code send successfully'))

                    // console.log({ services: response.services })
                    store.dispatch(setServices(response.services));
                    navServices.navigate('VerifyCode', { phone })
                }).catch((error: any) => { })
            }).catch((error) => console.log(error))
        }
    }
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }} source={IMAGES['login2']}>
            <View style={styles.register}>
                <AppText bold FONT_22 children={t('Register')} color={colors.WHITE} />
                <PrimaryInput top={10} placeholder={t('Full Name')} onChangeText={setname} />
                {/* <PrimaryInput top={10} placeholder='Phone' /> */}
                <PrimaryInput keyboardType='phone-pad' isPhone top={10} placeholder={t('Phone Number')} onChangeText={setphone} />
                <PrimaryInput top={10} isEye placeholder={t('Password')} onChangeText={setpassword} />
                <PrimaryButton loading={registerService.loading || mainCategoryServices.loading} onPress={handleRegister} title={t('Register')} />
                <TouchableOpacity onPress={() => navServices.navigate('Login')} style={{ padding: 5 }} >
                    <AppText Medium center children={t(`Already have a account? Sign In`)} color={colors.WHITE} />
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