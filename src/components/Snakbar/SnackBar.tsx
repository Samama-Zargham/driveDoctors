import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Easing, Platform, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { updateSnackBar } from '../../others/redux/reducers/userReducer';
import store from '../../others/redux/store';
import { colors } from '../../others/utils/colors';
import { COMMON_STYLES } from '../../others/utils/commonStyles';
import { mvs, width } from '../../others/utils/responsive';
import AppText from '../AppText';
import { PanGestureHandler } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../assets/images';


const CustomSnackBar = () => {

    const { snackBar } = useSelector(state => state?.user)
    const { message, duration, onClose = () => { }, type } = snackBar
    let svgName = type == 'success' ? IMAGES['tick'] : IMAGES['cross']
    const [isVisible, setisVisible] = useState(true);
    const [animate] = useState(new Animated.Value(0));

    const handleOpen = useCallback(() => {
        setisVisible(true);
        Animated.timing(animate, {
            toValue: 1, // Final value (fully visible)
            duration: 500, // Animation duration in milliseconds
            easing: Easing.linear, // Easing function
            useNativeDriver: true, // Required for opacity animation
        }).start(() => {
            setTimeout(() => {
                Animated.timing(animate, {
                    duration: 400,
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
                handleClose()
            }, 3000);
        });
    }, [message, type])

    const handleClose = () => {
        setTimeout(() => {
            setisVisible(false);
            store.dispatch(updateSnackBar({
                message: null,
                type: null,
                duration: 2000
            }))
            onClose && onClose();
        }, 500);
    };

    useEffect(() => {
        (message && type) && handleOpen();
    }, [message, type]);

    const animatedStyles = {
        transform: [
            {
                translateX: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0], // Reverse the values
                }),
            },
        ],
        opacity: animate,
    }
    if (type) {

        if (!isVisible) {
            return null;
        }
        return (
            <PanGestureHandler>

                <Animated.View style={[styles.container, animatedStyles]}>
                    <View style={[styles.animatedViewStyle1, { backgroundColor: type == 'success' ? '#3cc575' : colors.error }]} />
                    <View style={[styles.animatedViewStyle, { borderColor: type == 'success' ? '#3cc575' : colors.error }]}>
                        <View style={COMMON_STYLES.rowDirection}>
                            <FastImage
                                style={{
                                    width: 34,
                                    height: 34
                                }} source={svgName} />
                            <View style={{ marginLeft: mvs(20) }}>
                                <AppText color={'#4E4B66'} semiBold children={type.toString().charAt(0).toUpperCase() + type.toString().slice(1)} />
                                <AppText FONT_10 style={{ width: mvs(220) }} numberOfLines={3} FONT_12 color={'#4E4B66'} children={message} />
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        );
    } else {
        return null
    }
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? mvs(60) : mvs(30),
        zIndex: 1,
        right: mvs(12)
    },

    animatedViewStyle: {
        padding: mvs(15),
        ...COMMON_STYLES.GeneralWidth,
        ...COMMON_STYLES.elevation3,
        borderRadius: mvs(16),
        zIndex: 3,
        borderWidth: 0.5,
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: mvs(350)
    },
    animatedViewStyle1: {
        bottom: -4,
        padding: mvs(15),
        ...COMMON_STYLES.GeneralWidth,
        ...COMMON_STYLES.elevation10,
        borderRadius: mvs(18),
        zIndex: 2,
        position: "absolute",
        width: mvs(350)
    }
});

export default CustomSnackBar