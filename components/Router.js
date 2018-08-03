import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BlankScreen from '../screens/BlankScreen';

// pilha de navegação
export const DashboardStackNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },

    profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Perfil',
      }),
    },

    settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Ajustes',
      }),
    },
  },
  {
    initialRouteName: 'home',
    activeTintColor: 'midnightblue',
    inactiveTintColor: 'blue',
  }
);

export const DashboardTabNavigator = createMaterialBottomTabNavigator({
  profile2: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Perfil 2',
    }),
  },
  dash: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Dash',
    }),
  },
  stack: DashboardStackNavigator,
});
// navegador raiz: intro e painel principal
export const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    intro: {
      screen: IntroScreen,
      navigationOptions: {
        tabBarLabel: 'Intro',
      },
    },
    dashboard: {
      screen: DashboardStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Painel',
      },
    },
    blank: { screen: BlankScreen },
  },

  {
    initialRouteName: 'blank',
    activeTintColor: 'midnightblue',
    inactiveTintColor: 'grey',
    barStyle: {
      height: 0,
    },
  }
);
