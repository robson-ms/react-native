import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 8px;
  margin: 10px 10px 5px;
  padding: 5px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Descriptions = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({theme}: any) => theme.COLOR.black_100};
  font-family: ${({theme}: any) => theme.FONTS.bold};
`;

export const ImageContent = styled.View`
  width: 140px;
  height: 140px;
  background-color: ${({theme}: any) => theme.COLOR.white};
  border-radius: 8px;
`;

export const Image = styled.Image`
  flex: 1;
  margin: 10px 0;
`;

export const Price = styled.Text`
  font-size: 18px;
  margin-top: 5px;
  color: ${({theme}: any) => theme.COLOR.gray};
  font-family: ${({theme}: any) => theme.FONTS.regular};
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TrashContent = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}: any) => theme.COLOR.gray};
`;

export const AmountContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Less = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
export const Amount = styled.Text`
  margin: 0 10px;
  font-size: 18px;
`;
export const More = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
