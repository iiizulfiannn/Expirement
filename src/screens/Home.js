import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useCodePushEffect from '../hook/useCodePushEffect';

const Home = ({navigation, env, baseURL}) => {
  useCodePushEffect(env);

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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
