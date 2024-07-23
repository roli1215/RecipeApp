import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { Recipe } from "../screens/recipes";
import Icon from "react-native-vector-icons/FontAwesome";


const Bottom = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Bottom.Navigator
            screenOptions={
                {
                    
                    headerShown: false,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: 'black',
                        width:'75%',
                        bottom:'1%',
                        alignSelf:'center',
                        borderRadius: 10,
                    }
                }
            }>
            <Bottom.Screen name="Recipe" component={Recipe} 
                options={{
                    tabBarIcon: ({color, focused}) => 
                    <Icon name="home" size={focused ? 30 : 20} color={color} />
                }}
            />
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Settings" component={Settings} />
        </Bottom.Navigator>
    )
}