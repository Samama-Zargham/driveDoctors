import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import AlertModal from '../../../components/reusables/AlertModal'
import { useApi } from '../../../others/services/useApi'
import { APIService } from '../../../others/services/APIServices'
import { useSelector } from 'react-redux'
import store from '../../../others/redux/store'
import { setUser, updateUser } from '../../../others/redux/reducers/userReducer'
import { showError } from '../../../others/utils/helpers'
import navServices from '../../../others/utils/navServices'

const Profile = () => {
    const [modal, setmodal] = useState(false)
    const { requestCall, loading } = useApi(APIService.deleteAccount)
    const updateProfile = useApi(APIService.updateProfile)

    const { user } = useSelector((state: any) => state.user)
    const [name, setname] = useState(user?.name || '')
    const [phone, setphone] = useState(user?.phone || '')
    const [password, setpassword] = useState('')
    const [password_Confirm, setpassword_Confirm] = useState('')
    console.log({ user })
    const handleDelete = () => {
        setmodal('delete')
    }
    const profileUpdate = () => {
        if (!name) {
            return showError('Name field should not be empty')
        }
        if (name?.length > 25) {
            return showError('Name should not be greater than 25 characters')
        }
        if (password !== password_Confirm) {
            return showError(`Password does'nt match`)
        } else {
            let body = {
                name,
                phone
            }
            updateProfile.requestCall(user?.id, body).then((res) => {
                console.log({ res })
                store.dispatch(updateUser({ ...user, name }))
                navServices.navigate('Home')
            }).catch((err) => console.log({ err }))
        }
    }

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Profile' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ paddingTop: mvs(20) }} showsVerticalScrollIndicator={false}>
                        <FastImage
                            source={IMAGES.Layer15}
                            style={styles.userImage}
                            resizeMode='contain'
                        />
                        <AppText center FONT_18 semiBold children={name} />
                        <PrimaryInput value={name} placeholder='' header='Name' onChangeText={setname} />
                        {/* <PrimaryInput placeholder='dummy@gmail.com' header='Email' /> */}
                        <PrimaryInput editable={false} value={phone} placeholder='ex: +947 3030392388' header='Phone' onChangeText={setphone} />
                        <PrimaryInput isEye placeholder='New Password' onChangeText={setpassword} header='Password' />
                        <PrimaryInput isEye placeholder='Confirm New Password' onChangeText={setpassword} header='Confirm Password' />

                        <PrimaryButton loading={updateProfile.loading} onPress={profileUpdate} title='Save' />
                        <PrimaryButton loading={loading} onPress={handleDelete} containerStyle={{ marginTop: 2 }} title='Delete Account' />

                    </ScrollView>
                </View>
            </View>
            {
                modal == 'delete' &&
                <AlertModal
                    setmodalvisible={setmodal}
                    title='Delete Account'
                    description='Are you sure you want to delete account?'
                    handleYes={() => {
                        requestCall(user?.id).then((res) => {
                            console.log(res)
                            store?.dispatch(setUser({
                                loggedInUser: false,
                                user: null,
                                access_token: null
                            }))
                        }).catch((err) => console.log({ err }))


                    }}
                />
            }
        </BaseScreen>
    )
}

export default Profile

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    userImage: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 8
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
    },
})
