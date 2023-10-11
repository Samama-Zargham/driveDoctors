import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { updateSnackBar } from '../../others/redux/reducers/userReducer';
import store from '../../others/redux/store';
import { colors } from '../../others/utils/colors';
import { COMMON_STYLES } from '../../others/utils/commonStyles';
import { mvs } from '../../others/utils/responsive';
import AppText from '../AppText';

const CustomSnackBar = () => {

    const { snackBar } = useSelector((state: any) => state.user)
    const { message, duration, onClose = () => { }, type } = snackBar
    // let svgName = type == 'success' ? 'greenTick' : type == 'info' ? 'info' : Icons.

    const [isVisible, setisVisible] = useState(false);
    const [animate] = useState(new Animated.Value(0));
    const timerRef = useRef();

    const handleOpen = () => {
        setisVisible(true);
        Animated.timing(animate, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            timerRef.current = setTimeout(() => handleClose(), duration);
        });
    };

    const handleClose = () => {
        clearTimeout(timerRef.current);
        // Animated.timing(animate, {
        //     toValue: 1,
        //     duration: 250,
        //     useNativeDriver: true,
        // }).start(() => {
        setisVisible(false);
        store.dispatch(updateSnackBar({
            message: null,
            type: null,
            duration: 3000
        }))
        onClose && onClose();
        // });
    };

    useEffect(() => {
        (message && type) && handleOpen();
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [message, type]);

    if (type) {
        const backgroundColor = colors.WHITE;
        const translateY = animate.interpolate({
            inputRange: [0, 1],
            outputRange: [-40, 0],
        });

        if (!isVisible) {
            return null;
        }
        return (
            <ReactNativeModal
                avoidKeyboard
                animationIn="slideInUp"
                backdropOpacity={0.2}
                backdropColor="black"
                onBackdropPress={handleClose}
                style={{ padding: 0, margin: 0 }}
                isVisible={isVisible}>
                <View style={styles.container}>
                    <Animated.View style={[styles.animatedViewStyle1, { transform: [{ translateY }] }]} />
                    <Animated.View style={[styles.animatedViewStyle, { backgroundColor, transform: [{ translateY }] }]}>
                        <View style={COMMON_STYLES.rowDirection}>
                            {/* <AnySvg disabled size={34} name={svgName} /> */}
                            <View style={{ marginLeft: mvs(20) }}>
                                <AppText FONT_16 color={colors.inputColor} semiBold children={type.toString().charAt(0).toUpperCase() + type.toString().slice(1)} />
                                <AppText style={{ width: mvs(240) }} numberOfLines={3} FONT_12 color={colors.inputColor} children={message} />
                            </View>
                        </View>
                        {/* <AnySvg onPress={handleClose} size={27} name='crossCircle' /> */}
                    </Animated.View>
                </View>
            </ReactNativeModal>
        );
        ;
    } else {
        return null
    }
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: mvs(10),
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 1,
    },

    animatedViewStyle: {
        padding: mvs(20),
        ...COMMON_STYLES.GeneralWidth,
        borderRadius: mvs(16),
        zIndex: 3,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    },
    animatedViewStyle1: {
        bottom: -8,
        padding: mvs(20),
        ...COMMON_STYLES.GeneralWidth,
        borderRadius: mvs(18),
        backgroundColor: 'rgba(255,255,255,0.4)',
        zIndex: 2,
        position: "absolute"
    }
});

export default CustomSnackBar
