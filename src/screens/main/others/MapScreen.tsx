import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import navServices from '../../../others/utils/navServices'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'


const MapScreen = () => {
    const [Location, setLocation] = useState('')
    const [MarkerCoordinate, setMarkerCoordinate] = useState({ latitude: 37.78825, longitude: -122.4324 })
    const [isDragging, setIsDragging] = useState(false);

    const handleMarkerPress = () => {
        setIsDragging(true);
    };

    const handleMapPress = (e: any) => {
        if (isDragging) {
            const newCoordinate = e.nativeEvent.coordinate;
            setMarkerCoordinate(newCoordinate);
            setIsDragging(false);
        }
    };
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
                                onPress={handleMapPress}
                                region={{
                                    latitude: MarkerCoordinate.latitude,
                                    longitude: MarkerCoordinate.longitude,
                                    latitudeDelta: 0.02,
                                    longitudeDelta: 0.02
                                }}>
                                <Marker
                                    title={Location}
                                    coordinate={MarkerCoordinate}
                                    draggable={true}
                                    onPress={handleMarkerPress}
                                />
                            </MapView>
                        </View>

                        <View style={styles.btns}>
                            <MapInput
                                setMarkerCoordinate={setMarkerCoordinate}
                                setLocation={setLocation}
                            />
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
    google: {
        description: { color: "black" },
        textInputContainer: { width: "100%", alignSelf: "center" },
        poweredContainer: { display: 'none' },
        container: {
            zIndex: 100, flex: 0
        },
        textInput: {
            backgroundColor: colors.WHITE,
            height: mvs(60),
            borderRadius: mvs(10),
            marginTop: 5,
            paddingLeft: 10,
            width: "100%",
            ...COMMON_STYLES.elevation1,
            marginVertical: 30,
            color: "black"
        },

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



const MapInput = ({ setMarkerCoordinate, setLocation }: any) => {


    return (
        <GooglePlacesAutocomplete
            placeholder={"Find a location..."}
            listViewDisplayed={false}
            styles={styles.google}
            query={{
                key: 'AIzaSyCEKdRBb3B05Q1OTcyEdtl16PoLCtkR3d8',
                language: 'en',
            }}
            fetchDetails={true}
            onPress={(data: any, details: any) => {
                setMarkerCoordinate(
                    {
                        latitude: details?.geometry?.location?.lat,
                        longitude: details?.geometry?.location?.lng
                    }
                )
                setLocation(data.description);
            }}
            placeholderTextColor="gray"
            onFail={(error) => console.error(error)}
        />
    )
}