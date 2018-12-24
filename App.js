import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./components/main"
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0084af',
  }
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
    );
  }
}
