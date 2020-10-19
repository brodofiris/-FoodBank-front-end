import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import DefStyles from '../config/DefStyles'


export default class RatingOption extends Component {
    constructor(props) {
        super(props);
        this.state = {place: 1, nickname:'', rfp:'', achievments:''};
    }
    
    render() {
        return (
            <View>
                <View style={[styles.rectOpt, {backgroundColor:this.props.color || DefStyles.colors.mainGreen}]}>
                    <View style={{width:80, height: 80, flexDirection:'row'}}>
                        <Text style={[styles.text, {fontSize: this.props.place<9?40:25, padding:15, paddingTop:this.props.place<9?15:25 }]}>{this.props.place}</Text>
                        <View style={DefStyles.verticalLine}/>
                    </View>
                    <View style={{flexDirection:'column', flex:1, padding: 10}}>
                        <View>
                            <Text style={{fontSize:18, color:'white'}}>{this.props.nickname}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={styles.rectIcon}><Text style={[styles.text,{fontSize:18}]}>Icons</Text></View>
                            <View><Text style={[styles.text,{fontSize:24}]}>{this.props.rfp}rfp</Text></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rectOpt: {
        width:'92%',
        height: 85,
        marginHorizontal:'4%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#A8A8A8',
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    text:{
        color: DefStyles.colors.white,
        fontWeight:'bold',
    },
    rectIcon: {
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        borderRadius: 10,
        width: '45%',
        height: 35,
    }
})
