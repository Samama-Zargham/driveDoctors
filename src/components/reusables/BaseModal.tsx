import React, { } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { mvs } from '../../others/utils/responsive';
import { colors } from '../../others/utils/colors';
import { COMMON_STYLES } from '../../others/utils/commonStyles';

interface Props {
    width?: any,
    height?: any,
    toggleModal: () => void,
    modalvisible?: boolean,
    children?: any,
    backgroundColor?: string;
    onBottom?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    isBottomSheet?: boolean;
    colorPalette?: boolean
}

const BaseModal = React.memo(({
    width,
    height = 100,
    toggleModal,
    modalvisible,
    children,
    backgroundColor,
    onBottom = false,
    isBottomSheet,
    containerStyle,
    colorPalette = false
}: Props) => {

    let wdth = width ? typeof (width) == 'string' ? width : mvs(width) : null
    let hgth = height ? typeof (height) == 'string' ? height : mvs(height) : null

    let extraProps = (!colorPalette && isBottomSheet) ? {
        swipeDirection: 'down',
        swipeThreshold: 0.1,
        onSwipeComplete: toggleModal
    } : {}
    return (
        <Modal
            avoidKeyboard
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.2}
            propagateSwipe={true}
            backdropColor="black"
            onBackdropPress={toggleModal}
            {...extraProps}
            style={{ padding: 0, margin: 0 }}
            isVisible={modalvisible}>
            <View style={[
                {
                    backgroundColor: backgroundColor || colors.parrot2,
                    alignSelf: "center",
                    borderRadius: mvs(10),
                    padding: mvs(20),
                },
                isBottomSheet ? { ...COMMON_STYLES.bottomSheet } :
                    onBottom ? { bottom: mvs(20), margin: mvs(20), position: "absolute" } :
                        {
                            margin: mvs(20),
                        },
                containerStyle
            ]}>
                {isBottomSheet && <View style={[{
                    borderRadius: 20,
                    backgroundColor: colors.darkGreen,
                    width: 100,
                    height: mvs(5),
                    alignSelf: "center",
                    marginBottom: mvs(16)
                }]} />}
                {children}
            </View>
        </Modal>
    )
})

export default BaseModal
