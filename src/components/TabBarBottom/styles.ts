import styled, {css} from 'styled-components/native';


export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  background-color: #00aec2;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
font-size: 12px;
`;
