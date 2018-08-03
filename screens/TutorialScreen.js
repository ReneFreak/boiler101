import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

class TutorialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab Tutorial!</Text>
      </View>
    );
  }
}

export default TutorialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
