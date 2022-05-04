import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border: 1px solid ${({theme}: any) => theme.COLOR.white};
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  background-color: ${({theme}: any) => theme.COLOR.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({theme}: any) => theme.COLOR.black_100};
  font-family: ${({theme}: any) => theme.FONTS.bold};
`;

export const ImageContent = styled.View`
  width: 160px;
  height: 160px;
`;

export const Image = styled.Image`
  flex: 1;
  margin: 10px 0;
`;

export const PriceContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${({theme}: any) => theme.COLOR.black_50};
  font-family: ${({theme}: any) => theme.FONTS.bold};
`;
