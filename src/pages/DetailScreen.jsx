import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login');
  };
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Button title="LogOut" onPress={Login} />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
