import { StyleProp, StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'
import { COMMON_STYLES } from '../../others/utils/commonStyles'
import AnyIcon, { Icons } from '../reusables/AnyIcon'

type Props = {
    title: string,
    onPress?: () => void;
    disabled?: any;
    containerStyle?: StyleProp<ViewProps>;
    width?: string | number,
    isBorder?: boolean,
    backgroundColor?: string,
    txtColor?: string;
    rightIcon?: string
}
const PrimaryButton: React.FC<Props> = ({
    title,
    onPress,
    disabled = false,
    containerStyle = {},
    width,
    isBorder = false,
    backgroundColor,
    txtColor,
    rightIcon = false
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
            style={[styles.btn, containerStyle,
            width ? { width } : {},
            isBorder ? { borderColor: colors.darkGreen, borderWidth: 1 } : {},
            { backgroundColor: backgroundColor ? backgroundColor : disabled ? '#cecece' : colors[isBorder ? 'parrot2' : 'parrot'] }]}>
            <View style={COMMON_STYLES.rowDirection}>
                {rightIcon && <AnyIcon style={{ marginRight: 10 }} size={25} type={Icons.MaterialCommunityIcons} name={rightIcon} />}
                <AppText color={txtColor ? txtColor : colors.BLACK} FONT_18 Medium children={title} />
            </View>
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