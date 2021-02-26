import React from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
import CodePush from 'react-native-code-push';
import Home from './src/screens/Home';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

function selectEnv(envs) {
  return envs[NativeModules.RNConfig.env] || envs.default;
}

const baseURL = selectEnv({
  dev: 'http://localhost:3000',
  development: 'http://localhost:3000',
  staging: 'http://staging.com/api',
  production: 'http://prod.com/api',
});

const env = NativeModules.RNConfig.env;

let App = () => {
  return <Home env={env} baseURL={baseURL} />;
};

App = env === 'dev' ? App : CodePush(codePushOptions)(App);

export default App;

const styles = StyleSheet.create({});
