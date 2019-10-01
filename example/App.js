/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {SignInWithAppleButton} from 'react-native-apple-authentication';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {SignInWithAppleButton(styles.appleBtn, this.appleSignIn)}
      </View>
    );
  }

  appleSignIn = result => {
    console.log('Resssult', result);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleBtn: {height: 44, width: 200},
});
