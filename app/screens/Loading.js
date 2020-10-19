import React from 'react';
import { View, StyleSheet, Text} from "react-native";
import DefStyles from '../config/DefStyles';


function Loading(){
    return(
        <View style={styles.backgroundView}>
            <Text style={styles.logo}><Text style={{color: DefStyles.colors.text}}>Re</Text>Food</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: DefStyles.colors.back,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        color: DefStyles.colors.mainGreen,
        fontWeight: 'bold',
        fontSize: 48,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2
    }
})


export default Loading;