import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useCallback, useState, useContext} from 'react';

import api from '../../services/api';
import {ProductsType} from './types';

export interface ProductsContextData {
  products: ProductsType[];
  loading: boolean;
  dataCart: any[];
  dataFavorites: any[];
  fetchProducts(): Promise<void>;
  fetchDataCart(): Promise<void>;
  fetchFavoritesProducts(): Promise<void>;
  addToFavoriteList(id: number): Promise<void>;
  removeToFavoriteList(id: number): Promise<void>;
  removeDataCart(id: number): Promise<void>;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

const ProductsProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<ProductsType[]>(
    [] as ProductsType[],
  );
  const [dataCart, setDataCart] = useState([]);
  const [dataFavorites, setDataFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFavoritesProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/products?isFavorite_like=true');
      setDataFavorites(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToFavoriteList = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const response = await api.patch(`/products/${id}`, {
        isFavorite: true,
      });
      setDataFavorites(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeToFavoriteList = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await api.patch(`/products/${id}`, {
        isFavorite: false,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      fetchFavoritesProducts();
    }
  }, []); //eslint-disable-line 

  const fetchDataCart = useCallback(async () => {
    setLoading(true);
    const response = await AsyncStorage.getItem('@cart:product');
    const previusData = response ? JSON.parse(response) : [];
    setDataCart(previusData);
    setLoading(false);
  }, []);

  const removeDataCart = useCallback(async (id: number) => {
    setLoading(true);
    const response = await AsyncStorage.getItem('@cart:product');
    const previusData = response ? JSON.parse(response) : [];
    const data = previusData.filter((item: ProductsType) => item.id !== id);
    await AsyncStorage.setItem('@cart:product', JSON.stringify(data));
    setDataCart(data);
    setLoading(false);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        dataFavorites,
        dataCart,
        loading,
        fetchProducts,
        fetchDataCart,
        fetchFavoritesProducts,
        addToFavoriteList,
        removeToFavoriteList,
        removeDataCart,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): ProductsContextData {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(' useProducts must be used within an ProductsProvider ');
  }
  return context;
}
export {ProductsProvider, useProducts};
