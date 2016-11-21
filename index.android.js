import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class DeDengi extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('DeDengi', () => DeDengi);