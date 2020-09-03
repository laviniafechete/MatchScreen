import React from 'react';

import { NavigationMenu } from '../matchScreen/navigation/NavigationMenu';
import { LoginContextProvider } from './LoginContext'
import reactotron from 'reactotron-react-native';


if (__DEV__) {
  import("./ReactotronConfig")
}

// reactotron

export default class App extends React.Component {
  render() {
    return (
      <LoginContextProvider>
        <NavigationMenu />
      </LoginContextProvider>
    )
  }
}
