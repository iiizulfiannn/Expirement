import React, {createContext, useReducer} from 'react';
import {useContext} from 'react';
import {ActivityIndicator, Dimensions, Text, View, Modal} from 'react-native';

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

  const {receivedBytes, totalBytes} = codePushState.progress;

  const totalPercent = Math.ceil(receivedBytes / totalBytes) * 100;
  const {height, width} = Dimensions.get('window');

  return (
    <CodePushContext.Provider value={{codePushState, setCodePushState}}>
      {totalBytes > 0 && (
        <Modal visible={totalBytes > 0} transparent animationType="slide">
          <View
            style={{
              backgroundColor: 'rgba(52,52,52,.8)',
              justifyContent: 'center',
              alignItems: 'center',
              height: height,
              width: width,
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
            <ActivityIndicator
              size="large"
              color="white"
              style={{marginVertical: 16}}
            />
            <Text style={{color: 'white', fontSize: 22}}>{totalPercent}%</Text>
          </View>
        </Modal>
      )}
      {children}
    </CodePushContext.Provider>
  );
};

const useCodePushContext = () => useContext(CodePushContext);

export {useCodePushContext, CodePushContext, CodePushProvider};
