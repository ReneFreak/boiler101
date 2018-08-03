import React, { Component } from 'react';
import Slides from '../components/Slides';

// Importa referencia para imagens dos slides
import ESTRELA_AZUL from '../assets/images/blueStar.png';
import HEXAGONO_RED from '../assets/images/redHexagon.png';
import TRIANGULO_AMARELO from '../assets/images/yellowTriangle.png';

// Dados que são passados para componente que mostra slider
// texto, cor e imagem
const SLIDE_DATA = [
  {
    title: 'Introdução',
    text: 'Um slider com algumas telas que mostram como funciona o app é um padrão popular!',
    color: '#03A9F4',
    image: HEXAGONO_RED,
  },
  {
    title: 'Engajamento',
    text: 'Use estas telas para engajar o usuário e tornar o app inesquecível',
    color: '#8093f1',
    image: TRIANGULO_AMARELO,
  },
  {
    title: 'Ao trabalho!',
    text:
      'A introdução só aparece na primeira vez que o app é aberto. Ao clicar no botão, não verá mais esta sequencia.',
    color: '#ee8434',
    image: ESTRELA_AZUL,
  },
];

class IntroScreen extends Component {
  // executado quando o slider é completado
  onSlidesComplete = () => {
    this.props.navigation.navigate('dashboard');
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default IntroScreen;
