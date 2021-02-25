import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CodePush from 'react-native-code-push';
import Home from './src/screens/Home';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

let App = () => <Home />;

App = CodePush(codePushOptions)(App);

export default App;

const styles = StyleSheet.create({});
