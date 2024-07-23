import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { Recipe } from "../screens/recipes";
import Icon from "react-native-vector-icons/FontAwesome";
import { Login } from "../screens/login";
import { Register } from "../screens/register";


const Bottom = createBottomTabNavigator();

export const BottomTab = () => {
    return (
       
        <Bottom.Navigator
        initialRouteName="Login"
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
            <Bottom.Screen name="Login" component={Login} />
            <Bottom.Screen name="Register" component={Register} />
            <Bottom.Screen name="Recipe" component={Recipe}/>
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Settings" component={Settings} />
        </Bottom.Navigator>
        
            
        
    )
}