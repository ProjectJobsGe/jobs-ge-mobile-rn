import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './components/main';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0084af',
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <Main />
  </PaperProvider>
);

export default App;
