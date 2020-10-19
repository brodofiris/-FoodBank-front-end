import React from 'react'
import { View,  Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import DefStyles from '../../config/DefStyles';
import pic from '../../../assets/images/ThirdSlide.png'


export default function ThirdSlide() {
  const navigation = useNavigation(); 
    return (
      <View style={[DefStyles.backgroundBase, {overflow:"hidden", paddingTop:75}]}>
        <Image source={pic} />
        <View style={styles.wrapper}>
          <Text style={styles.header}>
            Помогай людям и природе.{"\n"}
            Делай  наш мир лучше :){"\n"}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Choose")}}>
          <Text style={{textAlign:'center', fontSize: 20, color: DefStyles.colors.mainPink}}>Далее &#62;</Text>
        </TouchableOpacity>
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
      marginTop: -150,
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


