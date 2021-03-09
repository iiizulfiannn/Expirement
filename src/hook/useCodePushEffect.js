import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/core';
import CodePush from 'react-native-code-push';
import {actionCodePush, useCodePushContext} from '../context/CodePushContext';

const useCodePushEffect = (env) => {
  const {setCodePushState} = useCodePushContext();

  useFocusEffect(
    useCallback(() => {
      if (env !== 'dev') {
        CodePush.sync(
          {
            installMode: CodePush.InstallMode.IMMEDIATE,
          },
          (_) =>
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
};

export default useCodePushEffect;
