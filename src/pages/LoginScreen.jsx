import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
