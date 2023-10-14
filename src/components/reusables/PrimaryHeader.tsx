import { StyleProp, StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import { mvs } from '../../others/utils/responsive';
import { colors } from '../../others/utils/colors';
import { COMMON_STYLES } from '../../others/utils/commonStyles';
import navServices from '../../others/utils/navServices';
import AnyIcon, { Icons } from './AnyIcon';

type Props = {
    title: string;
    containerStyle?: StyleProp<ViewProps>;
    notDrawer?: boolean
    rightIcon?: boolean;
}
const PrimaryHeader: React.FC<Props> = ({
    title,
    containerStyle,
    notDrawer = false,
    rightIcon = true
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => notDrawer ? navServices.goBack() : navServices.toggleDrawer()}
            style={[styles.main, containerStyle]}>
            <View style={[COMMON_STYLES.rowDirection, rightIcon ? { right: 10 } : {}]}>
                {rightIcon && <AnyIcon
                    disabled
                    type={Icons.Ionicons}
                    name={notDrawer ? 'chevron-back' : 'menu-outline'} //reorder-three-outline
                    size={notDrawer ? 30 : 40}
                    color='white'
                />}
                <AppText style={{ width: 180 }} numberOfLines={1} FONT_22 bold color={colors.WHITE} children={(rightIcon ? "    " : '') + title} />
            </View>
            {
                !rightIcon && <AnyIcon size={mvs(30)} disabled type={Icons.AntDesign} name='close' color={colors.WHITE} />
            }
        </TouchableOpacity>
    )
}

export default PrimaryHeader

const styles = StyleSheet.create({
    main: {
        ...COMMON_STYLES.rowDirection,
        padding: mvs(14),
        justifyContent: "space-between",
        alignItems: "center"
    }
})