import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text} from 'react-native';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, ButtonIcon} from './styles';


const TabBarBottom = ({state, descriptors}: any) => {
  const navigation = useNavigation()

  return (
    <Container>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel !== undefined 
          ? options.tabBarLabel 
          : options.title !== undefined
          ? options.title
          : route.name;
        const icon = options.tabBarAccessibilityLabel 
        const isFocused = state.index === index
        const onPress = () =>  {
          navigation.navigate(options.title)
        } 
      
        return (
          <ButtonIcon onPress={onPress} >
            <IconComponent name={icon} size={25} color={ isFocused ? '#fff' : 'rgba(255,255,255,0.5)' }/>
            <Text style={{color: isFocused ? '#fff' : 'rgba(255,255,255,0.5)', fontSize: 12}} >{label}</Text>
          </ButtonIcon>
        )
        })}
    </Container>
  );
};

export default TabBarBottom;
