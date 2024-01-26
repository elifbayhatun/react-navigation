import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToDetailPage = () => {
    navigation.navigate('Detail'), {title: 'React Native', name: 'Elif'};
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Go To Detail" onPress={goToDetailPage} />
    </SafeAreaView>
  );
};

export default HomeScreen;
