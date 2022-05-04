import styled, {css} from 'styled-components/native';

type ColorType = {
  color: string;
};

export const Container = styled.TouchableOpacity<ColorType>`
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  ${({color}: any) =>
    color === 'buy' &&
    css`
      background: #00a420;
      color: #fff;
    `}

  ${({color}: any) =>
    color === 'favorite' &&
    css`
      background: #f66b0e;
      color: #fff;
    `}
`;

export const Text = styled.Text`
  color: ${({theme}: any) => theme.COLOR.white};
  font-family: ${({theme}: any) => theme.FONTS.bold};
  font-size: 18px;
`;
