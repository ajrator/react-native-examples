import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
          firebase.initializeApp({
            apiKey: 'AIzaSyC9CBbQYO0pFGRwVN0ImgB0RzsK5oULU2U',
            authDomain: 'authentication-110b5.firebaseapp.com',
            databaseURL: 'https://authentication-110b5.firebaseio.com',
            projectId: 'authentication-110b5',
            storageBucket: 'authentication-110b5.appspot.com',
            messagingSenderId: '217757581809'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />
      }
    }

    render() {
        return (
          <View>
            <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;
