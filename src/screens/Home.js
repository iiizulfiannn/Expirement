import React, {useCallback, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import CodePush from 'react-native-code-push';
import {actionCodePush, useCodePushContext} from '../context/CodePushContext';

const Home = ({navigation, env, baseURL}) => {
  const {setCodePushState} = useCodePushContext();

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
                status: 'Updating ...',
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
      <Text>heei</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
