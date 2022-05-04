import React from 'react';
import AppProvider from './hooks';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/ligth';
import MainStack from './routes/MainStacks';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <MainStack />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
