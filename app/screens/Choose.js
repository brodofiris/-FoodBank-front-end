import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import DefStyles from '../config/DefStyles';
import SvgChoose1 from '../components/svgs/Choose//SvgChoose1';
import SvgChoose2 from '../components/svgs/Choose/SvgChoose2';



export default function Choose() {
    const navigation = useNavigation();
    return (
        <View style={[DefStyles.backgroundBase, {flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',}]}>
            <View style={[styles.rectangle, {alignItems: 'flex-start',justifyContent: 'flex-start',}, DefStyles.shadow, DefStyles.centered]}>
                <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate("Donater")} style={[styles.button, DefStyles.shadow, DefStyles.centered]}>
                    <Text style={[styles.text, {textShadowColor: DefStyles.colors.mainYellow,}]}>Я благотворитель</Text>
                </TouchableOpacity>

                <View style={styles.imgs}>
                    <SvgChoose1/>
                </View>
            </View>

            <Text style={[DefStyles.centered, styles.centerText]}>Выберите</Text>

            <View style={[styles.rectangle, DefStyles.shadow, {alignItems: 'flex-end',justifyContent: 'flex-end', backgroundColor: DefStyles.colors.mainPink, borderRadius:50, borderBottomLeftRadius:0,
        borderBottomRightRadius:0, }, DefStyles.centered]}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>console.log('pressed')} style={[styles.button, DefStyles.shadow, {backgroundColor: DefStyles.colors.mainYellow}, DefStyles.centered]}>
                    <Text style={[styles.text, {color:'#454545'}]}>Я нуждающийся</Text>
                </TouchableOpacity>

                <View style={styles.imgs}>
                    <SvgChoose2/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   button: {
    width: 270,
    borderRadius: 25,
    height: 65,
    backgroundColor: DefStyles.colors.mainPink,
   },
    rectangle:{
        width: '100%',
        height: 366,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        backgroundColor: DefStyles.colors.mainYellow,
    },
    centerText: {
        color: '#404040',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign:'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: DefStyles.colors.white,
        textShadowColor: DefStyles.colors.mainPink,
        textShadowRadius: 1,
        textShadowOffset: {width: 1.5, height: -1}
    },

    imgs: {
        width:'100%',
        marginTop: 20,
    }
})
