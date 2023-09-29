import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import { IMAGES } from '../../../assets/images'
import FastImage from 'react-native-fast-image'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import navServices from '../../../others/utils/navServices'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { Rating, AirbnbRating } from 'react-native-ratings';
import AppText from '../../../components/AppText'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DeviceInfo from 'react-native-device-info';

const RateUs = () => {

    const isTablet = DeviceInfo.isTablet();

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Rate Us' />
                <View style={styles.backWhite} >
                    <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <FastImage
                            source={IMAGES.darkLogo}
                            style={styles.userImage}
                            resizeMode='contain'
                        />
                        <AppText FONT_18 semiBold children={'Ratings'} />
                        <AirbnbRating
                            showRating={false}
                            defaultRating={0}
                            selectedColor={colors.darkGreen}
                            unSelectedColor={colors.WHITE}
                            starContainerStyle={{ paddingHorizontal: 30 }}
                        />

                        <PrimaryInput multiLine placeholder='Write Feedback...' header='FeedBack' />
                        <View style={{ marginTop: isTablet ? '60%' : '70%' }} />
                        <PrimaryButton onPress={() => navServices.navigate('Home')} title='Submit' />
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default RateUs

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    userImage: {
        width: mvs(150),
        height: mvs(68),
        alignSelf: "center",
        marginBottom: 50,
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
