import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/images'

const Splash = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={IMAGES['splash']} />
    )
}

export default Splash

const styles = StyleSheet.create({})