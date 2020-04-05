import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { Icon } from 'react-native-elements'
import Home from '../pages/Home'
import Promo from '../pages/Promo'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Account from '../pages/Account'

// const Tab = createBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()
export default (props) => {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "home"
                    }
                    else if (route.name === "Promo") {
                        iconName = "credit-card"
                    }
                    else if (route.name === "Contact") {
                        iconName = "message-square"
                    }
                    else if (route.name === "Cart") {
                        iconName = "shopping-cart"
                    }
                    else if (route.name === "Account") {
                        iconName = "user"
                    }
                    return <Icon type="feather" name={iconName} size={22} color={color} />;
                },
            })}

            tabBarPosition="bottom"
            tabBarOptions={{
                activeTintColor: '#075080',
                inactiveTintColor: 'gray',
                showLabel: false,
                showIcon:true,
                indicatorStyle:{
                    height:0
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Promo" component={Promo} />
            {/* <Tab.Screen name="Contact" component={Contact} /> */}
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}