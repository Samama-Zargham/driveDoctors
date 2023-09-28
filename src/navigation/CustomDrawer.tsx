import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../components/AppText'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { colors } from '../others/utils/colors'
import { mvs, width } from '../others/utils/responsive'
import FastImage from 'react-native-fast-image'
import { IMAGES } from '../assets/images'
import { COMMON_STYLES } from '../others/utils/commonStyles'
import navServices from '../others/utils/navServices'
import PrimaryHeader from '../components/reusables/PrimaryHeader'
import AlertModal from '../components/reusables/AlertModal'
import DeviceInfo from 'react-native-device-info';
import ToggleSwitch from 'toggle-switch-react-native'
import { fontFamily } from '../others/utils/fonts'


const CustomDrawer = (props: any) => {
    const [routeName, setrouteName] = useState('Hometab')
    const [modal, setmodal] = useState('')
    const isTablet = DeviceInfo.isTablet();
    const [toggle, settoggle] = useState(false)

    return (
        <View style={styles.backDark} >
            {/* header */}
            <PrimaryHeader rightIcon={false} containerStyle={{ marginTop: mvs(10) }} title='Menu' />
            <View style={styles.backWhite} >

                {/* Drawer List Item */}
                <DrawerContentScrollView
                    {...props}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ position: 'absolute', top: 0, left: 0, right: 0, }}
                    bounces={false}>
                    {/* <DrawerItemList {...props} /> */}
                    {props.data?.map((item, index) => {
                        let isFocus = routeName == item.label

                        return (<DrawerItem
                            style={[{
                                backgroundColor: isFocus ?
                                    colors.darkGreen1 : 'transparent',
                                width: isTablet ? width * 0.4 : width * 0.5
                            }]}
                            key={index}
                            onPress={() => {
                                if (item.route == 'Hometab') {
                                    navServices.navigate('BottomTab', { screen: 'Home' });
                                }
                                else {
                                    navServices.navigate(item.route)
                                }
                                setrouteName(item?.label)

                            }}
                            labelStyle={{
                                height: mvs(48),
                                paddingVertical: 0,
                                marginVertical: 0,
                            }}
                            label={({ focused, color }) => (<AppText bold color={isFocus ? colors.WHITE : colors.BLACK} children={item?.label} />)}
                            icon={({ focused, color, size }) => (
                                <FastImage
                                    source={IMAGES[item?.icon]}
                                    style={{
                                        width: mvs(18),
                                        height: mvs(18)
                                    }}
                                    resizeMode='contain'
                                    tintColor={isFocus ? colors.WHITE : colors.BLACK}
                                />
                            )} />)
                    })}
                    <DrawerItem
                        labelStyle={{
                            height: mvs(48),
                            paddingVertical: 0,
                            marginVertical: 0,
                        }}
                        activeTintColor='red'
                        onPress={() => settoggle(!toggle)}
                        label={({ focused, color }) => (
                            <View style={[COMMON_STYLES.rowDirectionWithSpaceBTW, { width: width - 115 }]}>
                                <AppText FONT_16 bold color={colors.darkGreen} children={"Language"} />
                                <ToggleSwitch
                                    isOn={toggle}
                                    onColor={'#4bb04f'}
                                    offColor={colors.darkGreen}
                                    label={toggle ? 'AR' : 'EN'}
                                    labelStyle={{ color: "black", fontFamily: fontFamily[600] }}
                                    size="small"
                                    onToggle={settoggle}
                                />
                            </View>
                        )}
                        icon={({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES['Layer23']}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                resizeMode='contain'
                            />
                        )} />
                    <DrawerItem
                        labelStyle={{
                            height: mvs(48),
                            paddingVertical: 0,
                            marginVertical: 0,
                        }}
                        onPress={() => setmodal('signout')}
                        label={({ focused, color }) => (<AppText FONT_16 bold color={colors.darkGreen} children={"Logout"} />)}
                        icon={({ focused, color, size }) => (
                            <FastImage
                                source={IMAGES['logoutIcon']}
                                style={{
                                    width: mvs(20),
                                    height: mvs(20)
                                }}
                                resizeMode='contain'
                            />
                        )} />

                </DrawerContentScrollView>
                {/* footer */}
                <View >
                    <AppText color={colors.GRAY} center children={'Developed by Selida Interactive'} />
                    <AppText color={colors.GRAY} style={{ marginBottom: 10 }} center children={'Version 1.0.0'} />
                </View>
            </View>

            {
                modal == 'signout' &&
                <AlertModal
                    setmodalvisible={() => { setmodal('') }}
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
        backgroundColor: colors.darkGreen,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 20
    },
    backWhite: {
        // marginTop: 20,
        backgroundColor: colors.parrot1,
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingTop: mvs(20),
        paddingHorizontal: mvs(14),
        flex: 1,
        // borderBottomRightRadius: 20
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