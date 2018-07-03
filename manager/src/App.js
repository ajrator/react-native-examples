import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDu_ePKFO-aFyzpYBoGFL3mp4oJzkMBZxQ",
      authDomain: "manager-9d2c9.firebaseapp.com",
      databaseURL: "https://manager-9d2c9.firebaseio.com",
      projectId: "manager-9d2c9",
      storageBucket: "manager-9d2c9.appspot.com",
      messagingSenderId: "270865683024"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
