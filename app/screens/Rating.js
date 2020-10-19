import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler'

import DefStyles from '../config/DefStyles'
import Footer from '../components/Footer'
import RatingOption from '../components/RatingOption'


export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {place: 28, rfp: 968, icons:13 };
    }

    render() {
        return (
            <SafeAreaView style={[DefStyles.backgroundBase, DefStyles.safeArea]}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />  
                <View style={[ DefStyles.regLog.wrap,{paddingHorizontal:40,paddingTop:20, height:5}]}>
                    <Text style={[DefStyles.text, {fontSize: 27, fontWeight: 'bold'}]}>Рейтинг</Text>
                    <TouchableOpacity onPress={()=>console.log('hello')} style={{width:145, height: 25}}>
                        <Text style={[DefStyles.text,{fontWeight: 'bold', fontSize: 15, color:'#A5A5A5'}]}>выбрать значки <Text style={{fontWeight:'bold', fontSize:20}}>&#8641;</Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={[DefStyles.line, {marginTop:50}]}/>

                <View style={{justifyContent:'space-around', flexDirection: "row", marginVertical: 25}}>
                    <Text style={[DefStyles.text, styles.bigText ]}>{this.state.place}{"\n"}<Text style={styles.subtext}>место</Text></Text>
                    <Text style={[DefStyles.text, styles.bigText]}>{this.state.rfp}{"\n"}<Text style={styles.subtext}>reFood points</Text></Text>
                    <Text style={[DefStyles.text, styles.bigText]}>{this.state.icons}{"\n"}<Text style={styles.subtext}>значки</Text></Text>
                </View>

                <View style={DefStyles.line}/>
                <View style={{height:380}}>
                    <View style={{justifyContent:'space-between', flex:1, marginVertical: 25}}>
                        <RatingOption place={1} rfp={1668} nickname='first nickname'/>
                        <RatingOption color='#99B190' place={2} rfp={1589} nickname='second nickname'/>
                        <RatingOption color='#A9B9A3' place={3} rfp={1453} nickname='third nickname'/>
                        <TouchableOpacity onPress={()=>console.log('hello')}>
                            <Text style={[DefStyles.text,{fontSize: 24, textAlign:'center'}]}>Показать больше <Text style={{fontWeight:'bold', fontSize:30}}>&#8643;</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={DefStyles.line}/>

                <View style={{marginVertical:25}}>
                    <RatingOption color='#C9C9C9' place={28} rfp={this.state.rfp} nickname='your nickname'/>
                </View>

               <View style={{flex: 1,justifyContent: 'flex-end',}}>
                    <Footer/>
                </View>
                

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    bigText:{
        fontSize: 48, 
        fontWeight: 'bold',
        textAlign:'center'
    }, 
    subtext:{
        fontSize:18,
        color:'#A5A5A5'
    },
})
