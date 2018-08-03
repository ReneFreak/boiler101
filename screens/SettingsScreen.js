import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Left,
  Button,
  Icon,
  Right,
  Body,
} from 'native-base';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Ajustes</Title>
        </Body>
        <Right />
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content padder>
          <View>
            <Text>Ajustes!</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
