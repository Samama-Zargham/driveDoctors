import { StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'

const Disclaimer = () => {


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Disclaimer' />
                <View style={styles.backWhite} >

                </View>
            </View>
        </BaseScreen>
    )
}

export default Disclaimer

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
})
