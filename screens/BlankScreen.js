import _ from 'lodash';
import React, { Component } from 'react';
import { AsyncStorage, View, Dimensions, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';

import ANIMATION from '../assets/animations/caitlin-smile-1.gif';

const SCREEN_WIDTH = Dimensions.get('window').width;
class BlankScreen extends Component {
  state = { firstTime: 'yes' };
  async componentWillMount() {
    // eslint-disable-next-line
    let firstTime = await AsyncStorage.getItem('firstTime');
    // console.log(`Is this the first time? ${firstTime}`);
    if (_.isNull(firstTime)) {
      console.log('B:primeira vez: null');
      this.setState({ firstTime: 'yes' });
    } else if (firstTime === 'not') {
      console.log(
        `Não é primeira vez: AsyncStorage :${firstTime}: State :${this.state.firstTime}:`
      );
      this.props.navigation.navigate('dashboard');
      this.setState({ firstTime: 'not' });
    } else {
      console.log(`Primeira vez: AsyncStorage :${firstTime}: State :${this.state.firstTime}:`);
      this.props.navigation.navigate('intro');
      this.setState({ firstTime: 'yes' });
    }
  }
  render() {
    if (this.state.firstTime === 'not') {
      // TODO: inserir um banner tela cheia aqui
      return (
        <Container>
          <Content>
            <Image source={ANIMATION} style={{ maxWidth: SCREEN_WIDTH }} />
            <View style={{ padding: 10 }}>
              <Button
                full
                rounded
                primary
                onPress={() => this.props.navigation.navigate('dashboard')}
              >
                <Text>Continuar</Text>
              </Button>
            </View>
          </Content>
        </Container>
      );
    }

    // TODO: render a button after a while
    return <View />;
  }
}

export default BlankScreen;
