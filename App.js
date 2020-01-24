import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Reset from './components/Reset';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: Home,
    Reset: Reset,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#19AC52',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <RootContainer />
  )
}
