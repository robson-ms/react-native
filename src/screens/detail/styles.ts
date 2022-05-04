import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({theme}: any) => theme.COLOR.black_50};
  font-family: ${({theme}: any) => theme.FONTS.bold};
`;

export const ImageContent = styled.View`
  background-color: ${({theme}: any) => theme.COLOR.white};
  height: 300px;
  padding: 10px;
`;
export const Image = styled.Image`
  height: 280px;
`;

export const ContentDescriptions = styled.View`
  flex: 1;
  padding: 10px 20px 30px;
  justify-content: space-between;
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Price = styled.Text`
  color: ${({theme}: any) => theme.COLOR.black_50};
  font-family: ${({theme}: any) => theme.FONTS.bold};
  font-size: 22px;
`;
