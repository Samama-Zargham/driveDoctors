import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { colors } from "../../others/utils/colors";
import { mvs } from "../../others/utils/responsive";
import AppText from "../AppText";
import FastImage from "react-native-fast-image";
import { IMAGES } from "../../assets/images";
import { formatDate } from "../../others/utils/helpers";

interface Props {
    mode?: "date" | "time" | "datetime"; // Adjust modes as needed
    disabled?: boolean;
    date: any,
    setDate?: any
}

const AppDateTimePickerField = ({
    mode = "date",
    disabled = false,
    date,
    setDate
}: Props) => {

    const [open, setopen] = useState(false);
    const [DATE, setDATE] = useState(new Date())
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.9}
            onPress={() => setopen(!open)}
            style={styles.inputView} >
            <AppText FONT_18 children={date || 'Select Date'} />
            <DatePicker
                modal
                mode={mode}
                open={open}
                date={DATE}
                androidVariant="iosClone"
                is24hourSource="locale"
                locale={"en_GB"}
                onConfirm={(newDate) => {
                    setDATE(newDate)
                    setDate(formatDate(newDate.toString()))
                    setopen(false)
                }}
                onCancel={() => setopen(false)}
            />
            <FastImage source={IMAGES['date']}
                style={{
                    width: 30,
                    height: 30
                }}
            />
        </TouchableOpacity>
    );
};

export default React.memo(AppDateTimePickerField);

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: colors.WHITE,
        height: mvs(60),
        borderRadius: mvs(10),
        paddingLeft: 10,
        marginTop: mvs(18),
        borderWidth: 0.9,
        borderColor: colors.GRAY,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: mvs(20)
    }
});
