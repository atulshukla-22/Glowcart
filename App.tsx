import React from 'react';
import { ProductProvider } from './src/context/ProductContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ProductProvider>
      <AppNavigator />
    </ProductProvider>
  );
};

export default App;


