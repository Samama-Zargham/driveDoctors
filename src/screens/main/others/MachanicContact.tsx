import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../../../assets/images'

const MachanicContact = () => {

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Contact' />
                <View style={styles.backWhite} >
                    <ScrollView contentContainerStyle={{ flex: 1 }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            backgroundColor: colors.darkGreen,
                            padding: 20,
                            borderRadius: 100,
                            alignSelf: "center"
                        }}>
                            <FastImage source={IMAGES['homeIcon20']}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                                resizeMode='contain'
                            />
                        </View>
                        <FastImage source={IMAGES.carLogo}
                            style={{
                                width: useWindowDimensions().width - 28,
                                height: 200,
                                borderRadius: 10,
                                marginTop: 20
                            }}
                            resizeMode='cover'
                        />
                        <View style={styles.booking}  >
                            <AppText FONT_20 children={'CarsDoctors W.L.L'} />
                            <AppText FONT_20 children={'Doha, Qatar'} />
                            <AppText FONT_20 children={'Phone 3040404500834'} />
                        </View>


                        <PrimaryButton onPress={() => navServices.navigate('CalculateCharges')} title='Continue' />

                    </ScrollView>
                </View>
            </View>
        </BaseScreen>
    )
}

export default MachanicContact

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
    },
    car: {
        width: mvs(60),
        height: mvs(30)
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        marginVertical: mvs(5),
        flexDirection: 'column',
        gap: mvs(10),
        marginTop: 20
    },
})