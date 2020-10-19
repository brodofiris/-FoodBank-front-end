import React from 'react'
import { View,  Text, StyleSheet, PixelRatio,  } from 'react-native'

import SvgComponent from '../../components/svgs/SvgFirst';
import DefStyles from '../../config/DefStyles';


export default function FirstSlide() {
    return (
      <View style={[DefStyles.backgroundBase, {overflow:"hidden"}]}>
        <View style={styles.rectangle}></View>
        <SvgComponent/>
        <View style={styles.wrapper}>
          <Text style={styles.header}>
            Современные люди настолько {"\n"}
            привыкли к избытку еды,{"\n"}
            что перестали ценить ее{"\n"}
          </Text>
        </View>
      </View>
      
    )
}

const styles = StyleSheet.create({
    imageStyle: {
      height: PixelRatio.getPixelSizeForLayoutSize(135),
      width: '100%',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    header: {
      fontSize: 20,
      textAlign:"center",
      fontWeight: 'bold',
      marginBottom: 20,
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


