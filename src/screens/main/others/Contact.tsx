import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'

const Contact = () => {


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Contact Us' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <FastImage
                            source={IMAGES.darkLogo}
                            style={styles.userImage}
                            resizeMode='contain'
                        />
                        <PrimaryInput placeholder='ex: dummy@gmail.com' header='Email' />
                        <PrimaryInput multiLine placeholder='Write a note...' header='Note' />
                        <View style={{ marginTop: '85%' }} />
                        <PrimaryButton onPress={() => navServices.navigate('Home')} title='Submit' />
                    </ScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default Contact

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    userImage: {
        width: mvs(150),
        height: mvs(68),
        alignSelf: "center",
        marginBottom: 8,
        borderRadius: 10,
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
