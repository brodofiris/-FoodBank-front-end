import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { } from 'react-native-gesture-handler';

import DefStyles from '../config/DefStyles';
import Footer from '../components/Footer'


export default function QrScanner() { 
 
  const [hasPermission, setHasPermission] = useState(true);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    let isMounted = true; 
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();null
      if (isMounted) setHasPermission(status === 'granted');
    })
    return () => { isMounted = false };
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{flex:1, backgroundColor: DefStyles.colors.mainGreen}}>
   
      <View style={styles.rectanglePink}/>
      <View style={styles.rectangleYellow}/>     
      <View style={[styles.rectanglePink, {bottom: -80, top: undefined,}]}/>
      <View style={[styles.rectangleYellow, {bottom: -120, top: undefined,}]}/>        

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal:15,
          width: 370,
          height: 580,

        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangleYellow: {
    position: "absolute",
    width: 180,
    height: 250,
    left: 80,
    top: 30,
    borderWidth: 18,
    borderStyle: 'solid',
    borderColor: DefStyles.colors.mainYellow,
    transform: [{rotate: '-102deg'}],
  },
  rectanglePink: {
    borderColor:DefStyles.colors.mainPink,
    left: 200, 
    top: -10,  
    transform: [{rotate: '130deg'}], 
    width:270, 
    height: 270, 
    borderWidth: 25, 
    position:'absolute',
  },


})
