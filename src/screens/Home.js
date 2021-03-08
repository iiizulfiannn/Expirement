import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({env, baseURL}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>{env}</Text>
      <Text>URL {baseURL}</Text>
      {/* <Text>Update Home</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
