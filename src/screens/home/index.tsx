import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import Card from './component/Card';
import {useProducts} from '../../hooks/getProducts';
import {Container} from './styles';

const Home = () => {
  const {fetchProducts, products} = useProducts();

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [fetchProducts]),
  );

  return (
    <Container>
      <FlatList
        data={products}
        renderItem={({item}) => <Card product={item} />}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
