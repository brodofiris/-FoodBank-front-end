import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBarHeight } from '../config/Functions'
function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }
export default{
    shadow: elevationShadowStyle(10),
    colors:{
        back: '#F6F5F0',
        mainPink:'#FF6D76',
        mainYellow: '#F6DA73',
        mainGreen: "#89A97D",
        darkGreen: '#3E5336',
        text: '#5C5C5C',
        textSec: '#464646',
        white: '#fff',
        black: '#000',
    },

    regLog: {
        rectangle: {
        width: 190,
        height: 465,
        backgroundColor: '#F6F5F0',
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
        },
        rectangleActive: {
            width: 190,
            height: 510,
            backgroundColor: '#F6DA73',
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
            backgroundColor: '#FF6D76',
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
        
    },
    safeArea:{
        paddingTop: StatusBarHeight ,
    },
    line: {
        justifyContent:'center',
        borderBottomColor: '#C2C2C2',
        borderBottomWidth: 2,
        width: '84%',
        marginHorizontal:'8%',
    },
    verticalLine: {
        borderRightWidth: 2,
        borderRightColor: 'white',
        height: '70%',
        marginVertical: '15%'
    },
    backgroundBase: {
        backgroundColor: '#F6F5F0',
        flex: 1,
        height:'100%',
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontFamily:'sans-serif',
        color: '#464646',
    },


};