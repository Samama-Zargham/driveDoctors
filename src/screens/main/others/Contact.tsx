import { Linking, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'
import DeviceInfo from 'react-native-device-info';
import AppText from '../../../components/AppText'

const Contact = () => {
    const isTablet = DeviceInfo.isTablet();
    const phoneNumber = '0097451300087'; // Replace with the recipient's phone number
    let whatsapp = `whatsapp://send?phone=${phoneNumber}`;
    let phone = `tel:${phoneNumber}`
    const handlePress = (url: any) => {
        if (phoneNumber.length < 10) {
            alert('Please insert correct WhatsApp number');
            return;
        }
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened', { data });
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            })
    };

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Contact Us' />
                <View style={styles.backWhite} >
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <FastImage
                            source={IMAGES.darkLogo}
                            style={styles.userImage}
                            resizeMode='contain'
                        />
                        <PrimaryInput placeholder='ex: 303024802348' header='Phone' />
                        <PrimaryInput multiLine placeholder='Write a note...' header='Note' />
                        <View style={{ marginTop: '20%' }} />
                        <PrimaryButton
                            txtColor={colors.WHITE}
                            backgroundColor={colors.darkGreen}
                            // onPress={() => handlePress(phone)}
                            title='Submit Note' />
                        <View>
                            <AppText FONT_18 semiBold center children='or' />
                        </View>
                        <PrimaryButton
                            rightIcon='phone-classic'
                            onPress={() => handlePress(phone)}
                            title='Phone Call' />
                        <PrimaryButton
                            rightIcon='whatsapp'
                            containerStyle={{ marginTop: 0 }}
                            isBorder onPress={() => handlePress(whatsapp)}
                            title='Contact on WhatsApp' />

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
