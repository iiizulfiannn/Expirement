import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import CodePush from 'react-native-code-push';
import {actionCodePush, useCodePushContext} from '../context/CodePushContext';

const Home = ({navigation, env, baseURL}) => {
  const {codePushState, setCodePushState} = useCodePushContext();

  useFocusEffect(
    useCallback(() => {
      if (env !== 'dev') {
        CodePush.sync(
          {
            installMode: CodePush.InstallMode.IMMEDIATE,
          },
          (status) =>
            setCodePushState({
              action: actionCodePush.SET_DATA,
              param: {
                status,
              },
            }),
          (progress) =>
            setCodePushState({
              action: actionCodePush.SET_DATA,
              param: {
                progress,
              },
            }),
        );
      }
    }, []),
  );

  return (
    <View>
      <Text>Home Screen</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>{env}</Text>
      <Text>URL {baseURL}</Text>
      <View
        style={{
          marginVertical: 50,
        }}>
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
      <Text>Update Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
