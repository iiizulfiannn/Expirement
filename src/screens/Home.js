import React from 'react';
import {NativeModules, StyleSheet, Text, View} from 'react-native';

function selectEnv(envs) {
  return envs[NativeModules.RNConfig.env] || envs.default;
}

const baseURL = selectEnv({
  dev: 'http://localhost:3000',
  staging: 'http://staging.com/api',
  prod: 'http://prod.com/api',
});

const Home = () => {
  const env = NativeModules.RNConfig.env;

  return (
    <View>
      <Text>Home Screen</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>{env}</Text>
      <Text>URL {baseURL}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
