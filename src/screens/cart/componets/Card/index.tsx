import React from 'react';
import {Text} from 'react-native';
import TrashIcon from '../../../../assets/trash.svg';
import {ProductsType} from '../../../../hooks/getProducts/types';

import {
  Container,
  Content,
  Descriptions,
  Title,
  ImageContent,
  Image,
  Price,
  ButtonContent,
  TrashContent,
  AmountContent,
  Less,
  Amount,
  More,
} from './styles';
import {valueToCurrency} from '../../../../utils/mask';

type CardProductType = {
  product: ProductsType;
  removerOfCard: any;
};

const Card: React.FC<CardProductType> = ({product, removerOfCard}) => {
  return (
    <Container>
      <ImageContent>
        <Image source={{uri: product?.image.url}} />
      </ImageContent>
      <Content>
        <Descriptions>
          <Title>{product?.name}</Title>

          {product?.price && <Price>{valueToCurrency(product?.price)}</Price>}
        </Descriptions>
        <ButtonContent>
          <AmountContent>
            <Less>
              <Text style={{fontSize: 25}}> - </Text>
            </Less>
            <Amount>1</Amount>
            <More>
              <Text style={{fontSize: 25}}> + </Text>
            </More>
          </AmountContent>
          <TrashContent onPress={() => removerOfCard(product.id)}>
            <TrashIcon width={20} height={20} fill="#eee" />
          </TrashContent>
        </ButtonContent>
      </Content>
    </Container>
  );
};

export default Card;
