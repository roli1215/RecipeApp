import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { Recipe } from "../screens/recipes";


const Bottom = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name="Recipe" component={Recipe} />
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Settings" component={Settings} />
        </Bottom.Navigator>
    )
}