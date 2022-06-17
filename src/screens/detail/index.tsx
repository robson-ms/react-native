import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import {ProductsType} from '../../hooks/useProducts/types';
import {useProducts} from '../../hooks/useProducts';
import AsyncStorage from '@react-native-community/async-storage';
import {valueToCurrency} from '../../utils/mask';
import {
  Container,
  ContentDescriptions,
  ImageContent,
  Image,
  Title,
  HeaderDetail,
  Price,
} from './styles';
import Divider from '../../components/Divider';

type IProduct = {
  product: ProductsType;
};

const Detail = ({route}: any) => {
  const {addToFavoriteList} = useProducts();
  const {product}: IProduct = route.params;

  async function handleAddToCart() {
    const response = await AsyncStorage.getItem('@cart:product');
    const previusData = response ? JSON.parse(response) : [];
    const data = [...previusData, product];

    await AsyncStorage.setItem('@cart:product', JSON.stringify(data));
  }

  function handleAddToFavorites() {
    addToFavoriteList(product.id);
  }

  return (
    <Container>
      <ImageContent>
        <Image source={{uri: product.image.url}} />
      </ImageContent>
      <ContentDescriptions>
        <HeaderDetail>
          <Title>{product.name}</Title>
          <Price>{valueToCurrency(product.price)}</Price>
        </HeaderDetail>
        <View>
          <Button color="buy" onPress={handleAddToCart}>
            Comprar
          </Button>
          <Divider />
          <Button color="favorite" onPress={handleAddToFavorites}>
            Adicionar aos favoritos
          </Button>
        </View>
      </ContentDescriptions>
    </Container>
  );
};

export default Detail;
