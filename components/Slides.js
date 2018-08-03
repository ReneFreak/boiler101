import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions, View, Image } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {
  // mostra apenas no ultimo slide. Neste caso, botão.
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button style={{ margin: 10 }} full rounded primary onPress={this.props.onComplete}>
          <Text>Vamos começar...</Text>
        </Button>
      );
    }
  }

  // mapeia props passados e retorna uma view completa e formatada
  renderSlides() {
    return this.props.data.map((slide, index) => (
      <Container
        key={slide.title}
        style={[styles.containerStyle, { backgroundColor: slide.color }]}
      >
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <View style={styles.slideStyle}>
            <Image style={styles.imageStyle} source={slide.image} />

            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
              <Text style={styles.titleStyle}>{slide.title}</Text>
              <Text style={styles.textStyle}>{slide.text}</Text>
            </View>

            {this.renderLastSlide(index)}
          </View>
        </Content>
      </Container>
    ));
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },

  slideStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleStyle: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Roboto_black',
  },

  textStyle: {
    color: 'white',
    marginBottom: 12,
    fontFamily: 'Lato_light',
    fontSize: 22,
    textAlign: 'center',
  },

  imageStyle: {
    maxWidth: SCREEN_WIDTH,
    maxHeight: SCREEN_HEIGHT,
    resizeMode: 'cover',
  },
});
