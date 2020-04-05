import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigations/MainNavigation'

class App extends React.Component {
  state = {}
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;