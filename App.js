import 'react-native-gesture-handler';
import React from 'react';
import {NativeModules, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CodePush from 'react-native-code-push';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import {CodePushProvider} from './src/context/CodePushContext';

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

const env = NativeModules.RNConfig.env;

const selectEnv = (envs) => envs[env] || envs.default;

const baseURL = selectEnv({
  dev: 'http://localhost:3000',
  staging: 'http://staging.com/api',
  prod: 'http://prod.com/api',
});

const Stack = createStackNavigator();

let App = () => {
  return (
    <CodePushProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <Home {...props} baseURL={baseURL} env={env} />}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {(props) => <Details {...props} env={env} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CodePushProvider>
  );
};

App = env === 'dev' ? App : CodePush(codePushOptions)(App);

export default App;

const styles = StyleSheet.create({});
