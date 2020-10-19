import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react';

import QrScanner from '../screens/QrScanner';
import Rating from '../screens/Rating';
import MapIcon from '../components/svgs/Icon-svgs/SvgMap'
import ScanIcon from '../components/svgs/Icon-svgs/SvgScan'
import RatingIcon from '../components/svgs/Icon-svgs/SvgRating'
import ProfileIcon from '../components/svgs/Icon-svgs/SvgProfile'
import TransactionIcon from '../components/svgs/Icon-svgs/SvgTransaction'


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        initialRouteName='QrScanner'
        backBehavior='none'
        showLabel = {false}
    >
        <Tab.Screen 
        name='QrScanner'
        component={QrScanner}
        options={{
            tabBarIcon: ()=><ScanIcon/>
        }}/>
        <Tab.Screen 
        name='Rating'
        component={Rating} 
        options={{
            tabBarIcon: ()=><RatingIcon/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;