import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import Card from './componets/Card';
import {useProducts} from '../../hooks/getProducts';
import {Container} from './styles';
import {FlatList, Text} from 'react-native';

const Home: React.FC = () => {
  const {fetchDataCart, dataCart, loading, removeDataCart} = useProducts();

  useFocusEffect(
    useCallback(() => {
      fetchDataCart();
    }, [fetchDataCart]),
  );

  function removerOfCard(id: number) {
    removeDataCart(id);
  }

  return (
    <Container>
      {loading ? (
        <Text style={{fontSize: 22, margin: 20}}>Carregando...</Text>
      ) : (
        <FlatList
          data={dataCart}
          renderItem={({item}) => (
            <Card product={item} removerOfCard={removerOfCard} />
          )}
          keyExtractor={(item: any) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
