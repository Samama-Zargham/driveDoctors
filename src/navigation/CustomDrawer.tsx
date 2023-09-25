import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../components/AppText'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { colors } from '../others/utils/colors'
import { mvs } from '../others/utils/responsive'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../assets/images'
import { COMMON_STYLES } from '../others/utils/commonStyles'
import navServices from '../others/utils/navServices'
import PrimaryHeader from '../components/reusables/PrimaryHeader'
import { ShowAlert } from '../others/utils/helpers'
import AnyIcon, { Icons } from '../components/reusables/AnyIcon'
import AlertModal from '../components/reusables/AlertModal'


const CustomDrawer = (props: any) => {
    const [routeName, setrouteName] = useState('Home')
    const [modal, setmodal] = useState('')

    return (
        <View style={styles.backDark} >
            {/* header */}
            <PrimaryHeader rightIcon={false} containerStyle={{ marginTop: mvs(10) }} title='Menu' />
            <View style={styles.backWhite} >

                {/* Drawer List Item */}
                <DrawerContentScrollView
                    {...props}
                    showsVerticalScrollIndicator={false}
                    bounces={false}>
                    {
                        props.data.map((item: any, index: number) => {
                            let isFocus = routeName == item.label
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setrouteName(item?.label)
                                        navServices.navigate(item.route)
                                    }}
                                    style={[styles.items, { backgroundColor: isFocus ? colors.darkGreen1 : 'transparent' }]} key={index}>
                                    <FastImage
                                        source={IMAGES[item.icon]}
                                        style={{
                                            width: mvs(25),
                                            height: mvs(25)
                                        }}
                                        tintColor={isFocus ? colors.WHITE : colors.BLACK}
                                        resizeMode='contain'
                                    />
                                    <AppText color={isFocus ? colors.WHITE : colors.BLACK} FONT_18 Medium children={'     ' + item.label} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </DrawerContentScrollView>
                {/* footer */}
                <TouchableOpacity style={styles.items2} onPress={() => {
                    setrouteName('')
                    setmodal('delete')
                }}>
                    <AnyIcon name='deleteuser' type={Icons.AntDesign} size={27} disabled />
                    <AppText FONT_18 Medium children={'   Delete Account'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items1} onPress={() => {
                    setrouteName('')
                    setmodal('signout')
                }}>
                    <FastImage
                        source={IMAGES['logoutIcon']}
                        style={{
                            width: mvs(25),
                            height: mvs(25)
                        }}
                        resizeMode='contain'
                    />
                    <AppText FONT_18 Medium children={'     Sign Out'} />
                </TouchableOpacity>

            </View>
            {
                modal == 'delete' &&
                <AlertModal
                    setmodalvisible={setmodal}
                    title='Delete Account'
                    description='Are you sure you want to delete account?'
                />
            }
            {
                modal == 'signout' &&
                <AlertModal
                    setmodalvisible={setmodal}
                    title='Sign Out'
                    description='Are you sure you want to Sign Out?'
                />
            }
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    backDark: {
        flex: 1,
        backgroundColor: colors.darkGreen1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    backWhite: {
        marginTop: 20,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
        borderBottomRightRadius: 20
    },
    items: {
        ...COMMON_STYLES.rowDirection,
        marginVertical: 7,
        width: '70%',
        padding: 10,
        borderRadius: mvs(20)
    },
    items1: {
        ...COMMON_STYLES.rowDirection,
        marginVertical: 20
    },
    items2: {
        ...COMMON_STYLES.rowDirection,
    }

})