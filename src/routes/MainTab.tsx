import React from 'react';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Favorites from '../screens/favorite';
import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/gear.svg';
import CartIcon from '../assets/cart.svg';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#ececec80',
      tabBarStyle: {
        height: 70,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#00aec2',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({size, color}) => (
          <HomeIcon fontSize={size} fill={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({size, color}) => (
          <CartIcon fontSize={size} fill={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({size, color}) => (
          <ProfileIcon fontSize={size} fill={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
