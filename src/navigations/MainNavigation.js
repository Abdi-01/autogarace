import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/LoginForm'
import TabNav from './TabNavigation'
const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="TabNav" component={TabNav}></Stack.Screen>
        </Stack.Navigator>
    )
}