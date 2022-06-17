import React, {useCallback} from 'react';
import {useProducts} from '../../hooks/useProducts';
import {FlatList, Text} from 'react-native';

import {Container} from './styles';
import Card from './component/Card';
import {useFocusEffect} from '@react-navigation/native';

const Favorites = () => {
  const {fetchFavoritesProducts, dataFavorites, removeToFavoriteList, loading} =
    useProducts();

  useFocusEffect(
    useCallback(() => {
      fetchFavoritesProducts();
    }, [fetchFavoritesProducts]),
  );

  function removeFromFavorites(id: number) {
    removeToFavoriteList(id);
  }

  return (
    <Container>
      {loading ? (
        <Text style={{fontSize: 22, margin: 20}}>Carregando...</Text>
      ) : (
        <FlatList
          data={dataFavorites}
          renderItem={({item}) => (
            <Card
              product={item}
              removeFromFavorites={() => removeFromFavorites(item.id)}
            />
          )}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </Container>
  );
};

export default Favorites;
