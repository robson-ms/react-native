import React from 'react';
import {Container, Text} from './styles';

export interface ButtonProps {
  children: any;
  onPress: any;
  color: 'buy' | 'favorite';
}

const Buttom = ({children, onPress, color}: ButtonProps) => {
  return (
    <Container onPress={onPress} color={color}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Buttom;
