import { StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'
import PrimaryInput from '../../../components/reusables/PrimaryInput'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const MapScreen = () => {

    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader notDrawer title='Location' />
                <View style={styles.backWhite} >
                    <AppText style={{ paddingLeft: mvs(30) }} children={'Please Select your Location'} color='white' />
                    <View style={styles.backWhite1} >

                        <View style={styles.container}>
                            <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={styles.map}
                                scrollEnabled
                                region={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                            >
                            </MapView>
                        </View>

                        <View style={styles.btns}>
                            <PrimaryInput location placeholder='Al Doha Airport' />
                            <PrimaryButton onPress={() => { navServices.navigate('PickUp') }} title='Continue' />
                        </View>

                    </View>

                </View>
            </View>
        </BaseScreen>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    btns: {
        position: 'absolute',
        width: '100%',
        bottom: 10,
        paddingHorizontal: mvs(14),
    },
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.darkGreen1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        flex: 1,
    },
    backWhite1: {
        marginTop: 20,
        backgroundColor: colors.parrot3,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(10),
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