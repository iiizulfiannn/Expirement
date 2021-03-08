import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Details = ({navigation}) => {
  return (
    <View>
      <Button title="kembali" onPress={() => navigation.goBack()} />
      <Text>DetailsScreen</Text>
      {/* <Text>Update Details</Text> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
