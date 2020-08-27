import React from 'react';

import { NavigationMenu } from '../matchScreen/navigation/NavigationMenu';


if (__DEV__) {
  import("./ReactotronConfig")
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationMenu />
    )
  }
}
