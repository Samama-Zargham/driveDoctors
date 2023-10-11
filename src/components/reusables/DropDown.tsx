import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from '../../others/utils/colors';
import { mvs } from '../../others/utils/responsive';
import AppText from '../AppText';

type Props = {
    header: string
    value: string
    setValue: any
    itemsArray?: any
    zIndex?: number,
    schema?:any
}
export default function DropDown({
    header,
    value,
    setValue,
    itemsArray,
    zIndex = 1,
    schema
}: Props) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(itemsArray || [
        { label: 'Audi', value: 'Audi' },
        { label: 'Kia', value: 'Kia' },
        { label: 'Hyundai', value: 'Hyundai' },
    ]);

    return (
        <View style={{ flex: 1, zIndex, marginTop: mvs(20) }}>
            {header && <AppText FONT_18 semiBold children={header} />}
            <View style={{
                flex: 1,
                marginTop: 7,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 0,
                backgroundColor: colors.WHITE,
                height: mvs(60),
                borderRadius: mvs(10),
            }}>
                <DropDownPicker
                    style={{ borderWidth: 0 }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    listMode="MODAL"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    schema={schema}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Select an Item'}
                    dropDownContainerStyle={{
                        maxHeight: mvs(400),
                        borderWidth: 0
                    }}
                />
            </View>

        </View >
    );
}