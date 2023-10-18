import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import AppText from '../../../components/AppText'
import { useSelector } from 'react-redux'
import RenderHTML from 'react-native-render-html'

const PrivacyPolicy = () => {

    const { Settings } = useSelector((state: any) => state.user)
    console.log({ Settings: Settings[1]?.value })
    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Privacy Policy' />
                <ScrollView style={styles.backWhite} >
                    <RenderHTML
                        contentWidth={width}
                        source={{ html: Settings[2]?.value }}
                    />
                    <AppText children={`\n`} />
                </ScrollView>
            </View>
        </BaseScreen>
    )
}

export default PrivacyPolicy

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
