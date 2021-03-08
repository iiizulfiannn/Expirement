import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation, env, baseURL}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>{env}</Text>
      <Text>URL {baseURL}</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
      {/* <Text>Update Home</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
