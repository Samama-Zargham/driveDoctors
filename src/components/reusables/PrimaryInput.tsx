import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../AppText'
import { colors } from '../../others/utils/colors'
import { mvs } from '../../others/utils/responsive'
import { COMMON_STYLES } from '../../others/utils/commonStyles'
import AnyIcon, { Icons } from './AnyIcon'
interface Props extends TextInputProps {
    header?: string,
    multiLine?: boolean
    location?: boolean
    placeholder: string,
    top?: number,
    isEye?: boolean;
}
const PrimaryInput: React.FC<Props> = ({
    header,
    multiLine,
    top = 20,
    location = false,
    placeholder,
    isEye = false,
    ...props
}) => {
    const [eye, seteye] = useState(true)
    const multiinput = {
        maxHeight: mvs(150),
        minHeight: mvs(130),
        padding: mvs(10),
        flex: 1,
        textAlignVertical: "top"
    };
    return (
        <View style={{ marginTop: mvs(top), width: "100%" }}>
            {header && <AppText FONT_18 semiBold children={header} />}
            <View style={[styles.input, { ...(multiLine && multiinput) }]}>
                {location && <AnyIcon type={Icons.Ionicons} name='location-sharp' size={30} />}
                <TextInput
                    style={{
                        flex: 1,
                        height: mvs(multiLine ? 150 : 60),
                    }}
                    secureTextEntry={eye && isEye}
                    multiline={multiLine}
                    placeholder={placeholder}
                    {...props}
                />
                {isEye && <AnyIcon onPress={() => seteye(!eye)} containerStyle={{ padding: 2, paddingRight: mvs(10) }} size={30} color={colors.BLACK} type={Icons.Ionicons} name={!eye ? 'eye' : 'eye-off'} />}
            </View>
        </View>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.WHITE,
        height: mvs(60),
        borderRadius: mvs(10),
        marginTop: 5,
        paddingLeft: 10,
        width: "100%",
        ...COMMON_STYLES.elevation1,
        flexDirection: "row",
        alignItems: "center",
    }
})