/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

class AwesomeProject extends Component {
  _onPressButton(){
    console.log("beat");
  }

  render() {
   const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
   return (
     <View style={styles.container}>
       <TouchableElement style={styles.button} onPress={this._onPressButton}><Text>1</Text></TouchableElement>
       <TouchableElement style={styles.button} onPress={this._onPressButton}><Text>Beat</Text></TouchableElement>
       <TouchableElement style={styles.button} onPress={this._onPressButton}><Text>Beat</Text></TouchableElement>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderRadius: 2,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
