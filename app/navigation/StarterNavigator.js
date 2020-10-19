import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Choose from '../screens/Choose';
import Registration from '../screens/Registration';
import Slider from '../screens/Slider/Slider';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator()

const StarterNavigator = () => (
    <Stack.Navigator mode='card'>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Slider" component={Slider} options={{headerShown:false}}/>
        <Stack.Screen name="Choose" component={Choose} options={{headerShown:false}}/>
        <Stack.Screen name="Donater" component={Registration} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default StarterNavigator;