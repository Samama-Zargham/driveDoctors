import { Animated, View } from 'react-native'
import React, { useEffect, useRef, useState, } from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '../../others/utils/colors';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../assets/images';

const Splash = () => {
    // const [splash, setsplash] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setsplash(false)
    //     }, 1500);
    // }, [])
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        const fadeIn = Animated.timing(fadeAnim, {
            toValue: 1, // Fade-in to full opacity
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: true, // For performance, use native driver
        });

        const slideIn = Animated.timing(slideAnim, {
            toValue: 0, // Slide to the right (on the screen)
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // For performance, use native driver
        });

        Animated.parallel([fadeIn, slideIn]).start();
    }, [fadeAnim, slideAnim]);

    return <View style={{
        backgroundColor: colors.parrot2
    }}>
        {/* <LottieView
            autoPlay
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/lottie/splash.json')}
        /> */}
        {/* <Animated.View
            style={{
                opacity: fadeAnim,
                transform: [{ translateX: slideAnim }],
                width: '100%',
                height: '100%',
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center"
            }
            }>
            <FastImage
                resizeMode='cover'
                style={{
                    width: '70%',
                    height: 200,
                    borderRadius: 20
                }}
                source={IMAGES['darkLogo']} />
        </Animated.View> */}

    </View>
}

export default Splash