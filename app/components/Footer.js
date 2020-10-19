import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight} from 'react-native'

import DefStyles from '../config/DefStyles';
import MapIcon from '../components/svgs/Icon-svgs/SvgMap'
import ScanIcon from '../components/svgs/Icon-svgs/SvgScan'
import RatingIcon from '../components/svgs/Icon-svgs/SvgRating'
import ProfileIcon from '../components/svgs/Icon-svgs/SvgProfile'
import TransactionIcon from '../components/svgs/Icon-svgs/SvgTransaction'
import { useNavigation } from '@react-navigation/native';


export default Footer => {
    const navigation = useNavigation();
        return (
            <View style={styles.footer}>
                <TouchableHighlight style={styles.icon} onPress={()=>{navigation.replace('Rating')}} underlayColor="#B2B2B2">
                <RatingIcon/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.icon} onPress={()=>{navigation.replace('Map')}} underlayColor="#B2B2B2">
                <MapIcon/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.icon} onPress={()=>{navigation.replace('QrScanner')}} underlayColor="#B2B2B2">
                <ScanIcon/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.icon} onPress={()=>{console.log('Transaction')}} underlayColor="#B2B2B2">
                <TransactionIcon/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.icon} onPress={()=>{console.log('Profile')}} underlayColor="#B2B2B2">
                <ProfileIcon/>
                </TouchableHighlight>
            </View>
        )
    
}

const styles = StyleSheet.create({
    footer: {
        height: 80,
        width: '100%',
        backgroundColor:'#EAEAEA',
        flexDirection: 'row',
        justifyContent:'space-around',
        
      },
      icon: {
        height: 80,
        width: '20%',
        paddingVertical: 20,
      },
})
