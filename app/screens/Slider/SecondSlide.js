import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

import SvgSecond from '../../components/svgs/SvgSecond';
import DefStyles from '../../config/DefStyles';


export default function SecondSlide() {
    return (
      <View style={[DefStyles.backgroundBase, {overflow:"hidden", paddingTop:75}]}>
        <SvgSecond/>
        <View style={styles.wrapper}>
          <Text style={styles.header}>
            Тысячи людей не имеют средств{"\n"}
            на питание, а количество фабрик{"\n"}
            увеличивается с каждым годом{"\n"}
          </Text>
        </View>
      </View>
      
    )
}


const styles = StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    header: {
      fontSize: 20,
      textAlign:"center",
      fontWeight: 'bold',
      paddingTop: 90,
      fontFamily: DefStyles.text.fontFamily,
    },
    rectangle: {
      marginTop: 50 ,
      left: -50,
      position: "absolute",
      width: 800,
      height: 350,
      transform: [{ rotate: '-6.4deg' }],
      backgroundColor: '#FCFCFC',
    }
  });


