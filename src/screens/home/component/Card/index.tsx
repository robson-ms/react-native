import React from 'react';
import Button from '../../../../components/Button';
import {useNavigation} from '@react-navigation/core';
import {valueToCurrency} from '../../../../utils/mask';
import {ProductsType} from '../../../../hooks/getProducts/types';
import {
  Container,
  Title,
  ImageContent,
  Image,
  PriceContent,
  Price,
} from './styles';

type CardProductType = {
  product: ProductsType;
};

const Card: React.FC<CardProductType> = ({product}) => {
  const navigation = useNavigation();
  function handleOpenDetail() {
    navigation.navigate('Detail', {product: product});
  }
  return (
    <Container>
      <Title>{product?.name}</Title>
      <ImageContent>
        <Image source={{uri: product?.image.url}} />
      </ImageContent>
      <PriceContent>
        {product?.price && <Price>{valueToCurrency(product?.price)}</Price>}
      </PriceContent>
      <Button color="buy" onPress={handleOpenDetail}>
        Ver mais
      </Button>
    </Container>
  );
};

export default Card;
