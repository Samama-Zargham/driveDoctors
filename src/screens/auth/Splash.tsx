import { View } from 'react-native'
import React, { useEffect, useState, } from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '../../others/utils/colors';

const Splash = () => {
    // const [splash, setsplash] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setsplash(false)
    //     }, 1500);
    // }, [])

    return <View style={{ flex: 1, backgroundColor: colors.parrot2 }}>
        <LottieView
            autoPlay
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/lottie/splash.json')}
        />
    </View>
}

export default Splash