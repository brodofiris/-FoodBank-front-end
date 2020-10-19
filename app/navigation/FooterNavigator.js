import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';


import QrScanner from '../screens/QrScanner';
import Rating from '../screens/Rating';


const Stack = createStackNavigator()

const FooterNavigator = () => (
    <Stack.Navigator mode='modal' initialRouteName='QrScanner'>
        <Stack.Screen name="QrScanner" component={QrScanner} options={{headerShown:false}}/>
        <Stack.Screen name="Rating" component={Rating} options={{headerShown:false}}/>
        <Stack.Screen name="Map" component={Rating} options={{headerShown:false}}/>
        <Stack.Screen name="Transaction" component={Rating} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Rating} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default FooterNavigator;