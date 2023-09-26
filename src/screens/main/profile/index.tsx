import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'

const Profile = () => {


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Profile' />
                <View style={styles.backWhite} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <FastImage
                            source={IMAGES.Layer15}
                            style={styles.userImage}
                            resizeMode='contain'
                        />
                        <AppText center FONT_18 semiBold children='dummy Name' />
                        <PrimaryInput placeholder='Sam Zar' header='Name' />
                        <PrimaryInput placeholder='dummy@gmail.com' header='Email' />
                        <PrimaryInput placeholder='+947 3030392388' header='Phone' />
                        <PrimaryInput placeholder='Password' header='Password' />
                        <PrimaryInput placeholder='Confirm Password' header='Confirm Password' />

                    </ScrollView>
                    <PrimaryButton title='Save' />
                </View>
            </View>
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
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
    },
})
