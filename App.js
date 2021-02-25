import React from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
import {API_URL_DEV, API_URL_STA, API_URL_PROD} from '@env';
import CodePush from 'react-native-code-push';
import Home from './src/screens/Home';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

function selectEnv(envs) {
  return envs[NativeModules.RNConfig.env] || envs.default;
}

const baseURL = selectEnv({
  dev: API_URL_DEV,
  staging: API_URL_STA,
  prod: API_URL_PROD,
});

let App = () => {
  const env = NativeModules.RNConfig.env;
  return <Home env={env} baseURL={baseURL} />;
};

App = CodePush(codePushOptions)(App);

export default App;

const styles = StyleSheet.create({});
