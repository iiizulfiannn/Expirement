import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Details = ({navigation, env}) => {
  return (
    <View>
      <Button title="kembali" onPress={() => navigation.goBack()} />
      <Text>DetailsScreen</Text>
      <Text>{env} Update Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
