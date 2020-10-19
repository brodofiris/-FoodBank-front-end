import React, {useState} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignFooter from '../components/SignFooter';


export default function RegisterScreen({navigation}) {
  const [state, setState] = useState({
    username: '',
    password: '',
    mobile:'',
  });


  function _onSignupPressed() {
    if (state.username&&state.password&&state.mobile) {
     // this.props.navigation.goBack();
     console.log(this.state.password);
    }
    else {
      Alert.alert(
  'Register Error',
  'The username or password or mobile fields are empty.',
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}
  }

    return (
      <View style={styles.container}>
      <View style={styles.loginForm}>
          <Input
            label='Username'
            placeholder='Enter your Username'
            secureTextEntry={false}
            maxLength={20}
            onChangeText={(username) => setState({ username }) }
          />
          <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry
            onChangeText={(password) => setState({ password }) }
          />
          <Input
            label='Mobile'
            keyboardType='phone-pad'
            maxLength={15}
            placeholder='Enter your Mobile number'
            onChangeText={(mobile) => setState({ mobile }) }
          />
          <Button onPress={_onSignupPressed()}>Sign Up</Button>
          
      </View>
            </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    },

    signup: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding:10
    // justifyContent: 'center',
  },
    loginForm: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
    // justifyContent: 'center',
  },
});