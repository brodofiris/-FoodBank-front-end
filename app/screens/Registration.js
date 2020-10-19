import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableHighlight} from 'react-native'
import {  } from 'react-native-gesture-handler'
import DefStyles from '../config/DefStyles'




export default class Registration extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.outline}/>
                <View style={[styles.outline, {left: 155, top: -130}]}/>
                
            
                <View style={[styles.wrap,{height: 5, paddingTop: 150}]}>
                        <Text style={[{paddingLeft: 25}, styles.text]}>Регистрация</Text>
                        <Text style={[{paddingTop: 40, paddingRight: 15}, styles.text]}>Авторизация</Text>
                </View>

                <View style={[styles.wrap, {paddingBottom:300}]}>
                    
                    <TouchableHighlight onPress={()=>console.log('clicked')} underlayColor="white">
                        <View style={[styles.rectangleActive,  DefStyles.shadow,]}/>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>console.log('clicked')} underlayColor="white">
                        <View style={[styles.rectangle,  DefStyles.shadow, ]}/>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.filledCircle}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
   
    rectangle: {
        width: 190,
        height: 465,
        backgroundColor: DefStyles.colors.back,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
    },
    rectangleActive: {
        width: 190,
        height: 510,
        backgroundColor: DefStyles.colors.mainYellow,
        borderBottomRightRadius: 35,
        borderTopRightRadius: 35,
        marginRight: 25,
    },
    outline: {
        position: "absolute",
        left: 206,
        top: -115,
        width: 250,
        height: 250,
        borderRadius: 250/2,
        borderColor: 'rgba(62, 83, 54, 0.5)',
        borderWidth: 2,
        borderStyle: 'solid',
    },
    filledCircle: {
        position:'absolute',
        backgroundColor: DefStyles.colors.mainPink,
        borderRadius: 180,
        width: 300,
        height: 300,
        transform: [{ scaleX: 1.5 }],
        left: -140,
        top: 730,
    },
    wrap: {
        flexWrap: "wrap",
        alignContent: 'space-between',
        justifyContent: 'center',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
     }
})
