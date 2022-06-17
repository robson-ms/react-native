import React from 'react';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Favorites from '../screens/favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarBottom from '../components/TabBarBottom';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => {
      return <TabBarBottom {...props} />
    }}
    screenOptions={{
      headerShown: false,   
      tabBarInactiveTintColor: 'red',
      headerPressColor: 'red'
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
        tabBarLabel: "Home",
        tabBarAccessibilityLabel: "home"
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        title: "Cart",
        tabBarLabel: "Carinho",
        tabBarAccessibilityLabel: "cart"
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        title: "Favorites",
        tabBarLabel: "Favoritos",
        tabBarAccessibilityLabel: "heart"
      }}
    />
  </Tab.Navigator>
);
