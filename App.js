import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeModules, StyleSheet} from 'react-native';
import CodePush from 'react-native-code-push';

import Details from './src/screens/Details';
import Home from './src/screens/Home';

const env = NativeModules.RNConfig.env;

const selectEnv = (envs) => envs[env] || envs.default;

const baseURL = selectEnv({
  dev: 'http://localhost:3000',
  staging: 'http://staging.com/api',
  prod: 'http://prod.com/api',
});

const Stack = createStackNavigator();

let App = () => {
  useEffect(() => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} baseURL={baseURL} env={env} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

App = env === 'dev' ? App : CodePush(codePushOptions)(App);

export default App;

const styles = StyleSheet.create({});
