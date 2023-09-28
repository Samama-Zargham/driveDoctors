import { StyleSheet, View } from 'react-native'
import React from 'react'
import BaseModal from './BaseModal';
import { mvs } from '../../others/utils/responsive';
import AppText from '../AppText';
import PrimaryButton from '../buttons/PrimaryButton';
import navServices from '../../others/utils/navServices';

interface Props {
    setmodalvisible: any;
    title?: string;
    description?: string;
}
const AlertModal: React.FC<Props> = React.memo(({
    setmodalvisible,
    title,
    description
}) => {
    const handleModal = () => {
        setmodalvisible(false)
    }

    return (
        <BaseModal
            containerStyle={{ padding: mvs(20) }}
            modalvisible={true}
            isBottomSheet={true}
            toggleModal={handleModal}>

            <View style={styles.row} >
                <AppText FONT_18 semiBold children={title} />
            </View>
            <AppText style={{ marginVertical: mvs(10) }} FONT_16 children={description} />

            <View style={styles.row} >
                <PrimaryButton onPress={handleModal} isBorder width={'47%'} title='No' />
                <PrimaryButton
                    onPress={() => {
                        handleModal()
                        navServices.navigate('Login')
                    }}
                    width={'47%'}
                    title='Yes' />
            </View>

        </BaseModal>
    )
})

export default AlertModal




const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
