import React from 'react';
import Cart from '../assets/cart.svg';
import Logo from '../assets/logo.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../routes/MainTab';
import Detail from '../screens/detail';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name=" "
        component={MainTab}
        options={{
          headerStyle: {
            backgroundColor: '#00aec2',
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Logo width={30} height={30} fill="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Cart width={30} height={30} fill="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: 'Detalhes',
          headerStyle: {
            backgroundColor: '#00aec2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerRight: () => (
            <TouchableOpacity>
              <Cart width={30} height={30} fill="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
