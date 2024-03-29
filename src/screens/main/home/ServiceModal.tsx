import { Animated, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppText from '../../../components/AppText'
import { height, mvs } from '../../../others/utils/responsive'
import { colors } from '../../../others/utils/colors'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { COMMON_STYLES } from '../../../others/utils/commonStyles'
import AnyIcon, { Icons } from '../../../components/reusables/AnyIcon'
import { SelectUnSelectItems, isArabic } from '../../../others/utils/helpers'
import BaseModal from '../../../components/reusables/BaseModal'
import { fontFamily } from '../../../others/utils/fonts'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import i18n from '../../../others/utils/i18n'

const ServiceModal = ({ setmodal, handleReset, modal, state, handleSumit, item }: any) => {
    const servicesData = useSelector((state: any) => state.user.services.filter(e => e.category === 'other'));
    const handleToggle = (val: any) => {
        if (val) {
            setmodal(false)
        } else handleReset()
    }
    const { t } = useTranslation()
    const SubServiceModal = () => {
        const [selectedServices, setselectedServices] = useState(state[modal] || [])
        const [data, setdata] = useState(servicesData)
        const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

        useEffect(() => {
            const animations = data.map((item: any, index: any) =>
                Animated.timing(animatedValues[index], {
                    toValue: 1, // Fade-in to full opacity
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // For performance, use native driver
                    delay: index * 200, // Delay each animation
                })
            );

            Animated.stagger(200, animations).start(); // Start animations in sequence with a stagger

        }, [animatedValues, data]);
        const { user } = useSelector((state: any) => state.user)

        return (
            <BaseModal
                containerStyle={{ maxHeight: height - 200, paddingBottom: 0 }}
                isBottomSheet
                modalvisible={true}
                toggleModal={() => {
                    if (selectedServices?.length) {
                        handleSumit(selectedServices)
                    }
                    handleToggle(selectedServices?.length)
                }}>
                <AppText FONT_24 bold children={t('Add Sub Services')} />
                <ScrollView
                    onStartShouldSetResponder={() => true}
                    style={styles.backWhite}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.booking}  >
                        <AnyIcon name='check' color='white' type={Icons.Entypo} disabled size={26} containerStyle={styles.tick} />
                        <AppText FONT_16 Medium children={'  ' + (isArabic() ? item?.name_ar : item?.name)} />
                    </View>
                    {/* <AppText FONT_18 Medium style={{ marginVertical: 10 }} children={t('People also add this service')} /> */}
                    {
                        data.map((item: any, idx: number) => {
                            const foundElement: any = selectedServices.find((i: any) => i.id == item.id);
                            console.log({ item: isArabic() ? item?.name_ar : item?.name })
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
                                        <AppText FONT_18 >{isArabic() ? item?.name_ar : item?.name}</AppText>
                                    </Animated.View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { marginBottom: 5 }]} >
                    <PrimaryButton onPress={handleReset} isBorder width={'47%'} title={t('Reset')} />
                    <PrimaryButton
                        onPress={() => handleSumit(selectedServices)}
                        // disabled={selectedServices?.length < 1}
                        width={'47%'}
                        title={t('Continue')} />
                </View>
            </BaseModal>
        )
    }
    const InputModal = () => {
        const [txt, settxt] = useState(state[modal] || '')
        return (
            <BaseModal
                containerStyle={{ paddingBottom: mvs(5), width: '85%', overflow: "hidden" }}
                modalvisible={true}
                toggleModal={handleToggle}>

                <AppText FONT_18 style={{ marginBottom: mvs(10) }} semiBold children={isArabic() ? item?.name_ar : item?.name} />
                <TextInput
                    style={styles.input}
                    multiline={true}
                    value={txt}
                    onChangeText={settxt}
                    textAlign={i18next.language == 'ar' ? "right" : "left"}
                    placeholder={t('Describe the issue you are facing...')}
                />
                <View style={COMMON_STYLES.rowDirectionWithSpaceBTW} >
                    <PrimaryButton onPress={handleToggle} isBorder width={'47%'} title={t('Cancel')} />
                    <PrimaryButton
                        onPress={() => handleSumit(txt)}
                        // disabled={!txt}
                        width={'47%'}
                        title={t('Submit')} />
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
        alignItems: 'center',
        marginRight: 20
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
