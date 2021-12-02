import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {RectButton} from 'react-native-gesture-handler';

import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  let text;
  let onChangeText;

  // const storeData = async value => {
  //   await AsyncStorage.setItem('@storage_Key', value);
  // };

  // const getData = async () => {
  //   const value = await AsyncStorage.getItem('@storage_Key');
  // };

  const UselessTextInput = () => {
    [text, onChangeText] = React.useState(null);

    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    );
  };

  function handleNavigateToMenu() {
    navigation.navigate('Menu', {name: text});
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/background.png')}>
        <View style={styles.main}>
          <Text style={styles.title}>
            {'\n'} Bem-vindo {'\n'}
            {'\n'}
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Qual seu nome?{'\n'}</Text>
          <UselessTextInput />
          <RectButton
            title="Confirm"
            onPress={handleNavigateToMenu}
            style={styles.button}>
            <View style={styles.buttonContent}>
              <Text>Continuar</Text>
            </View>
          </RectButton>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 200,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#34CB79',
    height: 40,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default Home;
