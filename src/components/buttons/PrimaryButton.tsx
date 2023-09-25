import { StyleProp, StyleSheet, TouchableOpacity, ViewProps } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'

type Props = {
    title: string,
    onPress?: () => void;
    disabled?: any;
    containerStyle?: StyleProp<ViewProps>;
    width?: string | number,
    isBorder?: boolean
}
const PrimaryButton: React.FC<Props> = ({
    title,
    onPress,
    disabled = false,
    containerStyle = {},
    width,
    isBorder = false
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
            style={[styles.btn, containerStyle, width ? { width } : {}, isBorder ? { borderColor: colors.darkGreen, borderWidth: 1 } : {}, { backgroundColor: colors[disabled ? 'SILVER' : isBorder ? 'parrot2' : 'parrot'] }]}>
            <AppText FONT_18 Medium children={title} />
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btn: {
        paddingVertical: mvs(15),
        borderRadius: mvs(10),
        marginVertical: mvs(20),
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})