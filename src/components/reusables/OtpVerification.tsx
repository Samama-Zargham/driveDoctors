import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { colors } from '../../others/utils/colors';
import { mvs } from '../../others/utils/responsive';
import AppText from '../AppText';


const CELL_COUNT = 4;

const OtpVerification = ({ value = null, onBlur, setValue, isPin }: any) => {
    const [enableMask, setEnableMask] = useState(isPin == true ? true : false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });


    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                onBlur={onBlur}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                    if (index == 0) isFocused = true
                    let text = null;

                    if (symbol) {
                        text = enableMask ? '•' : symbol;
                    } else if (isFocused) {
                        text = <Cursor />;
                    }

                    return (
                        <View key={index} style={styles.cell}>
                            <AppText FONT_26 children={text || (isFocused ? <Cursor /> : null)} onLayout={getCellOnLayoutHandler(index)} />
                        </View>

                    )
                }}
            />
        </SafeAreaView>
    );
};

export default OtpVerification;
const styles = StyleSheet.create({
    root: {
        // ...IOSAndroid.GeneralWidth,
        paddingHorizontal: 5,
        marginTop: 12
    },
    cell: {
        width: mvs(60),//55
        height: mvs(65),
        backgroundColor: colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 12,
        marginTop: mvs(5)
    }
});