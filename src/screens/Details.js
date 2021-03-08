import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/core';
import {Button, StyleSheet, Text, View} from 'react-native';
import CodePush from 'react-native-code-push';

const Details = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      CodePush.sync({
        installMode: CodePush.InstallMode.IMMEDIATE,
      });
    }, []),
  );

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
