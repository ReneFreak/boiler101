import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { AppTabNavigator } from './components/Router';

export default class App extends Component {
  //checking state for if font is loaded or not.
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      /* eslint-disable */
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_black: require('./assets/fonts/Roboto-Black.ttf'),
      Lato_light: require('./assets/fonts/Lato-Light.ttf'),
      MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf')
      /* eslint-enable */
    });

    //Setting the state to true when font is loaded.
    this.setState({ fontLoaded: true });
  }

  // mostra o componente AppLoading enquanto carrega as fontes
  // então mostra o navegador do app
  render() {
    if (!this.state.fontLoaded) {
      console.log('loading');
      return <AppLoading />;
    }
    console.log('running');
    return <AppTabNavigator />;
  }
}
