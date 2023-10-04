import { Animated, View } from 'react-native'
import React, { useEffect, useRef, useState, } from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '../../others/utils/colors';
import FastImage from 'react-native-fast-image';
import { height, width } from '../../others/utils/responsive';
import DeviceInfo from 'react-native-device-info';

const Splash = () => {
    const isTablet = DeviceInfo.isTablet();

    return <View
        style={{
            backgroundColor: '#001a05',
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>

        <FastImage
            resizeMode={'contain'}
            style={{
                width: '80%',
                height: '35%',
                borderRadius: 20
            }}
            source={require('../../assets/gif/carsdoctor.gif')} />

    </View>
}

export default Splash