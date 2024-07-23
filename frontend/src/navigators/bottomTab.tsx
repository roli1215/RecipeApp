import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";


const Bottom = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Settings" component={Settings} />
        </Bottom.Navigator>
    )
}