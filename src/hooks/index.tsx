import React from 'react';
import {ProductsProvider} from './useProducts';

const AppProvider: React.FC = ({children}) => (
  <ProductsProvider>{children}</ProductsProvider>
);
export default AppProvider;
