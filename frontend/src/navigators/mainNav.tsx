import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Settings } from '../screens/settings';
import { Recipe } from '../screens/recipes';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
          width: '75%',
          bottom: '1%',
          alignSelf: 'center',
          borderRadius: 10,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" size={focused ? 30 : 15} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="newspaper" size={focused ? 30 : 15} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name="settings" size={focused ? 30 : 15} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
