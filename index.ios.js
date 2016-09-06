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

var Sound = require('react-native-sound');

class AwesomeProject extends Component {

  playSound(sound) {
    var s = new Sound('./sounds/' + sound, Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }

  render() {
   const TouchableElement = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
   return (
     <View style={styles.outer}>
       <View style={styles.container}>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "LEX+Chant.wav")}><Text>LEX</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "Squad+HiHat+3.wav")}><Text>HiHat3</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "Squad+HiHat+4.wav")}><Text>HiHat4</Text></TouchableElement>
       </View>
       <View style={styles.container}>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "WOO.wav")}><Text>WOO</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "Squad+Snare+5.wav")}><Text>Snare</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "Squad+Kick+3.wav")}><Text>Kick</Text></TouchableElement>
       </View>
       <View style={styles.container}>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "LEX+Chant.wav")}><Text>Beat</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "808_sub.mp3")}><Text>Sub</Text></TouchableElement>
         <TouchableElement style={styles.button} onPress={this.playSound.bind(this, "Squad+HiHat+3.wav")}><Text>Beat</Text></TouchableElement>
       </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
