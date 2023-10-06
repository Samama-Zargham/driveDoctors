import { Animated, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppText from '../../../components/AppText'
import { mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import AnyIcon, { Icons } from '../../../components/reusables/AnyIcon'
import { SelectUnSelectItems } from '../../../others/utils/helpers'
import BaseModal from '../../../components/reusables/BaseModal'
import { fontFamily } from '../../../others/utils/fonts'

const ServiceModal = ({ setmodal, handleReset, modal, state, handleSumit, item }: any) => {
    const handleToggle = (val: any) => {
        if (val) {
            setmodal(false)
        } else handleReset()
    }
    const SubServiceModal = React.memo(() => {
        const [selectedServices, setselectedServices] = useState(state[modal] || [])
        const [data, setdata] = useState([
            {
                id: 1,
                name: 'Car Repair',
            },
            {
                id: 2,
                name: 'Car Oil Change',
            },
            {
                id: 3,
                name: 'Battery Replace',
            },
            {
                id: 4,
                name: 'AC Repair',
            },
            {
                id: 5,
                name: 'Try Change',
            },
            {
                id: 6,
                name: 'Car Diagnostics',
            },

        ])
        const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

        useEffect(() => {
            const animations = data.map((item, index) =>
                Animated.timing(animatedValues[index], {
                    toValue: 1, // Fade-in to full opacity
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // For performance, use native driver
                    delay: index * 200, // Delay each animation
                })
            );

            Animated.stagger(200, animations).start(); // Start animations in sequence with a stagger

        }, [animatedValues, data]);

        return (
            <BaseModal
                containerStyle={{ maxHeight: '85%', paddingBottom: 0 }}
                isBottomSheet
                modalvisible={true}
                toggleModal={() => handleToggle(selectedServices?.length)}>
                <AppText FONT_24 bold children={'Add Sub Services'} />
                <ScrollView
                    onStartShouldSetResponder={() => true}
                    style={styles.backWhite}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.booking}  >
                        <AnyIcon name='check' color='white' type={Icons.Entypo} disabled size={26} containerStyle={styles.tick} />
                        <AppText FONT_16 Medium children={'     ' + item?.name} />
                    </View>
                    <AppText FONT_18 Medium style={{ marginVertical: 10 }} children='People also add this service' />
                    {
                        data.map((item: any, idx: number) => {
                            const foundElement: any = selectedServices.find((i: any) => i.id == item.id);

                            return (
                                <TouchableOpacity
                                    key={idx}
                                    onPress={() => SelectUnSelectItems(item, selectedServices, setselectedServices)}
                                    activeOpacity={0.7}  >
                                    <Animated.View
                                        key={idx}
                                        style={[{ opacity: animatedValues[idx] }, styles.booking]}>
                                        <AnyIcon name='check'
                                            color='white'
                                            disabled
                                            type={Icons.Entypo}
                                            size={26}
                                            containerStyle={[styles.tick,
                                            { backgroundColor: foundElement?.id ? colors.green : colors.LIGHT_GRAY }]}
                                        />
                                        <AppText FONT_18 children={'     ' + item?.name} />
                                    </Animated.View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { marginBottom: 30 }]} >
                        <PrimaryButton onPress={handleReset} isBorder width={'47%'} title='Reset' />
                        <PrimaryButton
                            onPress={() => handleSumit(selectedServices)}
                            disabled={selectedServices?.length < 1}
                            width={'47%'}
                            title='Continue' />
                    </View>
                </ScrollView>
            </BaseModal>
        )
    })

    const InputModal = () => {
        const [txt, settxt] = useState(state[modal] || '')
        return (
            <BaseModal
                containerStyle={{ paddingBottom: mvs(5), width: '85%', overflow: "hidden" }}
                modalvisible={true}
                toggleModal={handleToggle}>

                <AppText FONT_18 style={{ marginBottom: mvs(10) }} semiBold children={modal} />
                <TextInput
                    style={styles.input}
                    multiline={true}
                    value={txt}
                    onChangeText={settxt}
                    placeholder={'Describe the issue you are facing...'}
                />
                <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                    <PrimaryButton onPress={handleToggle} isBorder width={'47%'} title='Cancel' />
                    <PrimaryButton
                        onPress={() => handleSumit(txt)}
                        disabled={!txt}
                        width={'47%'}
                        title='Submit' />
                </View>
            </BaseModal>
        )
    }



    if (item?.isSubService) {
        return <SubServiceModal />
    }
    else return <InputModal />
}

export default ServiceModal


const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: colors.WHITE,
        borderRadius: 6,
        height: mvs(120),
        textAlignVertical: "top",
        padding: 10,
        fontFamily: fontFamily[400],
        alignSelf: "center"
    },
    btn: {
        marginBottom: 50
    },
    tick: {
        backgroundColor: colors.green,
        borderRadius: 100,
        width: mvs(38),
        height: mvs(38),
        justifyContent: "center",
        alignItems: 'center'
    },
    booking: {
        backgroundColor: colors.WHITE,
        borderRadius: mvs(10),
        padding: mvs(10),
        marginVertical: mvs(5),
        ...COMMON_STYLES.rowDirection
    },
    backWhite: {
        marginTop: 10,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
    },
})
