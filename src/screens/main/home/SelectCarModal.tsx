import { Animated, Easing, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseModal from '../../../components/reusables/BaseModal'
import { mvs, width } from '../../../others/utils/responsive'
import FastImage from 'react-native-fast-image'
import AppText from '../../../components/AppText'
import { colors } from '../../../others/utils/colors'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import { IMAGES } from '../../../assets/images'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import navServices from '../../../others/utils/navServices'

const SelectCarModal = ({ setmodal }: any) => {
    const [selectedCar, setselectedCar] = useState('')


    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1, // Final value (fully visible)
            duration: 1000, // Animation duration in milliseconds
            easing: Easing.linear, // Easing function
            useNativeDriver: false, // Required for opacity animation
        }).start(); // Start the animation
    }, []);

    const animatedStyles = {
        transform: [
            {
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0],
                }),
            },
        ],
        opacity: animation,
    };
    return (
        <BaseModal
            isBottomSheet
            containerStyle={{ maxHeight: mvs(500), paddingBottom: 0, paddingHorizontal: 12 }}
            modalvisible={true}
            toggleModal={() => setmodal(false)}>
            <ScrollView
                onStartShouldSetResponder={() => true}
                contentContainerStyle={{
                    paddingBottom: 40,
                }} style={styles.backWhite}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>

                <AppText style={{ marginTop: mvs(20) }} FONT_18 semiBold children={'Listed Cars'} />
                {
                    [1, 2, 3, 9, 87, 6].map((item: any, index: number) => {
                        return (
                            <Animated.View style={animatedStyles} key={index}>
                                <TouchableOpacity
                                    onPress={() => setselectedCar(item)}
                                    activeOpacity={0.9}
                                    style={[styles.booking, { backgroundColor: selectedCar == item ? colors.parrot : colors.WHITE }]} key={index} >

                                    <View style={COMMON_STYLES.rowDirection} >
                                        <FastImage style={styles.car}
                                            source={IMAGES['car']}
                                            resizeMode='contain'
                                        />
                                        <AppText Medium children={"      " + 'KIA Telluride'} />
                                    </View>

                                </TouchableOpacity>

                            </Animated.View>
                        )
                    })
                }
                <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                    <PrimaryButton
                        onPress={() => setmodal('')}
                        isBorder width={'47%'}
                        title='Cancel' />
                    <PrimaryButton
                        disabled={selectedCar == ''}
                        onPress={() => {
                            setmodal(''),
                                navServices.navigate('PickUp')
                        }}
                        width={'47%'}
                        title='Select' />
                </View>
            </ScrollView>
        </BaseModal >
    )
}

export default SelectCarModal

const styles = StyleSheet.create({
    backDark: { flex: 1, backgroundColor: colors.darkGreen },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingHorizontal: mvs(14),
    },
    addCar: {
        position: "absolute",
        borderRadius: mvs(20),
        width: '40%',
        alignSelf: "flex-end",
        bottom: 20,
    },
    car: {
        width: mvs(55),
        height: mvs(25)
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(20),
        paddingVertical: 13,
        marginVertical: mvs(10)
    },
})