import React from 'react';
import Button from '../../../../components/Button';
import {valueToCurrency} from '../../../../utils/mask';
import {ProductsType} from '../../../../hooks/getProducts/types';
import {
  Container,
  Content,
  Descriptions,
  Title,
  ImageContent,
  Image,
  PriceContent,
  Price,
} from './styles';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

type CardProductType = {
  product: ProductsType;
  removeFromFavorites: any;
};

const Card: React.FC<CardProductType> = ({product, removeFromFavorites}) => {
  async function handleAddToCart() {
    const response = await AsyncStorage.getItem('@cart:product');
    const previusData = response ? JSON.parse(response) : [];
    const data = [...previusData, product];

    await AsyncStorage.setItem('@cart:product', JSON.stringify(data));
  }

  return (
    <Container>
      <ImageContent>
        <Image source={{uri: product?.image.url}} />
      </ImageContent>
      <Content>
        <Descriptions>
          <Title>{product?.name}</Title>
          <PriceContent>
            {product?.price && <Price>{valueToCurrency(product?.price)}</Price>}
          </PriceContent>
        </Descriptions>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '48%'}}>
            <Button color="buy" onPress={handleAddToCart}>
              Comprar
            </Button>
          </View>
          <View style={{width: '48%'}}>
            <Button
              color="favorite"
              onPress={() => removeFromFavorites(product.id)}>
              Remover
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Card;
