import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DefStyles from '../config/DefStyles'
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


export default Welcome =({navigation}) =>{

  let [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
        return (
            <SafeAreaProvider style={DefStyles.backgroundBase}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.circleTopRight}></View>
                <View style={styles.outline}></View>
                <View style={styles.circleCenterLeft}></View>
                <View style={styles.circleBottom}></View>
                <View style={styles.circleButton}>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Slider")}}>
                        <Text style={styles.buttonText}>Начать</Text>
                    </TouchableOpacity>
                </View>

                <View style={[DefStyles.centered, {height:'100%', width:'100%'}]}>
                    <Text style={styles.text}>Сохрани еду.{"\n"}Помоги тысячам.</Text>
                </View> 

            </SafeAreaProvider>
        
        );
  };
};


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        width: 300,
        height: 100,
        borderRadius: 150,
 
    },
    text: {
        textAlign: "left",
        color: DefStyles.colors.textSec,
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: DefStyles.text.fontFamily,
    },
    buttonText: {
        color:DefStyles.colors.white,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '600',
        fontSize: 33,
        paddingTop: 35,
        fontFamily: DefStyles.text.fontFamily,
    },
    circleTopRight: {
        position: 'absolute',
        width: 250,
        height: 250,
        left: 211,
        top: -4,
        borderRadius: 250/2,
        backgroundColor: DefStyles.colors.mainYellow,
    },

    outline: {
        position: 'absolute',
        width: 282,
        height: 282,
        left: 193,
        top: -18,
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 282/2,
        borderColor: '#9C9C9C'
    },

    circleCenterLeft: {
        position: 'absolute',
        width: 158,
        height: 158,
        left: -63,
        top: 186,
        borderRadius: 158/2,

        backgroundColor: DefStyles.colors.mainGreen,
    },
    circleBottom: {
        position: 'absolute',
        width: 520,
        height: 520,
        left: -153,
        top: 517,
        borderRadius: 520/2,
        backgroundColor: DefStyles.colors.mainPink,
     
    },
    circleButton: {
        position: 'absolute',
        width: 344,
        height: 344,
        left: 143,
        borderRadius: 344/2,
        top: 704,
        backgroundColor: DefStyles.colors.mainYellow,
    }
})

