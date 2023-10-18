import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../components/reusables/BaseScreen'
import { mvs, width } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryHeader from '../../../components/reusables/PrimaryHeader'
import { useSelector } from 'react-redux'
import AppText from '../../../components/AppText'
import RenderHTML from 'react-native-render-html'

const Disclaimer = () => {
    const { Settings } = useSelector((state: any) => state.user)


    return (
        <BaseScreen>
            <View style={styles.backDark} >
                <PrimaryHeader title='Disclaimer' />
                <ScrollView style={styles.backWhite} >
                    <RenderHTML
                        contentWidth={width}
                        source={{ html: Settings[1]?.value }}
                    />
                    <AppText children={`\n`} />
                </ScrollView>
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
