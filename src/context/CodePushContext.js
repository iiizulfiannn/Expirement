import React, {createContext, useReducer} from 'react';
import {useContext} from 'react';
import {Dimensions, Text, View} from 'react-native';

export const actionCodePush = {
  SET_DATA: 'SET_DATA',
  CLEAR_DATA: 'CLEAR_DATA',
  DEFAULT: 'DEFAULT',
};

const CodePushContext = createContext();

const contextReducers = (state, {type, param}) => {
  const {SET_DATA, CLEAR_DATA} = actionCodePush;
  switch (type) {
    case SET_DATA:
      return {...state, ...param};
    case CLEAR_DATA:
      return {...initState};
    default:
      return {...state};
  }
};

const initState = {
  status: '',
  progress: {},
};

const CodePushProvider = ({children}) => {
  const [codePushState, dispatch] = useReducer(contextReducers, initState);

  const setCodePushState = ({action, param}) => {
    const {SET_DATA, CLEAR_DATA, DEFAULT} = actionCodePush;
    switch (action) {
      case SET_DATA:
        dispatch({type: SET_DATA, param});
        break;
      case CLEAR_DATA:
        dispatch({type: CLEAR_DATA});
        break;
      default:
        dispatch({type: DEFAULT});
        break;
    }
  };

  const totalPercent =
    Math.ceil(
      codePushState.progress.receivedBytes / codePushState.progress.totalBytes,
    ) || 0;
  const {height, width} = Dimensions.get('window');

  return (
    <CodePushContext.Provider value={{codePushState, setCodePushState}}>
      {Object.keys(progress).length > 0 && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(52,52,52,.5)',
            justifyContent: 'center',
            alignItems: 'center',
            height,
            width,
          }}>
          <Text
            style={{
              marginBottom: 32,
              fontWeight: 'bold',
              color: 'white',
              fontSize: 22,
            }}>
            {codePushState.status}
          </Text>
          <Text style={{color: 'white', fontSize: 22}}>{totalPercent}%</Text>
        </View>
      )}
      {children}
    </CodePushContext.Provider>
  );
};

const useCodePushContext = () => useContext(CodePushContext);

export {useCodePushContext, CodePushContext, CodePushProvider};
