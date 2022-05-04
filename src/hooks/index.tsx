import React from 'react';
import {ProductsProvider} from './getProducts';

const AppProvider: React.FC = ({children}) => (
  <ProductsProvider>{children}</ProductsProvider>
);
export default AppProvider;
