/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Main extends Component {
  onSearch = () => ('');

  onMore = () => ('');

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Jobs.ge"
          />
          <Appbar.Action icon="search" onPress={this.onSearch} />
          <Appbar.Action icon="more-vert" onPress={this.onMore} />
        </Appbar.Header>
        <Text>Content here</Text>
      </View>
    );
  }
}
