import React from 'react';

import { NavigationMenu } from '../matchScreen/navigation/NavigationMenu';
import { LoginContextProvider } from './LoginContext';
import reactotron from 'reactotron-react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { loginReducer } from './store/reducers/loginReducer';
import { goldReducer } from './store/reducers/goldReducer';
import { colorsReducer } from './store/reducers/colorsReducer'


if (__DEV__) {
  import("./ReactotronConfig")
}

const rootReducer = combineReducers({
  login: loginReducer,
  gold: goldReducer,
  color: colorsReducer
})

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginContextProvider>
          <NavigationMenu />
        </LoginContextProvider>
      </Provider>
    )
  }
}
