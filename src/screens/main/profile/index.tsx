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

const Profile = () => {
    const [modal, setmodal] = useState(false)

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
                        <AppText center FONT_18 semiBold children='dummy Name' />
                        <PrimaryInput placeholder='Sam Zar' header='Name' />
                        {/* <PrimaryInput placeholder='dummy@gmail.com' header='Email' /> */}
                        <PrimaryInput placeholder='+947 3030392388' header='Phone' />
                        <PrimaryInput placeholder='New Password' header='Password' />
                        <PrimaryInput placeholder='Confirm New Password' header='Confirm Password' />

                        <PrimaryButton title='Save' />
                        <PrimaryButton onPress={() => setmodal('delete')} containerStyle={{ marginTop: 2 }} title='Delete Account' />

                    </ScrollView>
                </View>
            </View>
            {
                modal == 'delete' &&
                <AlertModal
                    setmodalvisible={setmodal}
                    title='Delete Account'
                    description='Are you sure you want to delete account?'
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
