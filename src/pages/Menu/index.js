import {StyleSheet, View, Text, Alert, ImageBackground} from 'react-native';
import React from 'react';

import {RectButton} from 'react-native-gesture-handler';

import HistoryAsyncStorage from '../../services/historyAsyncStorage';

const Menu = ({route, navigation}) => {
  const handleRandomNumberButton = async () => {
    // eslint-disable-next-line radix
    const number = parseInt(Math.random() * (100 - 0 + 1));
    Alert.alert(`O seu número e: ${number}, ele foi salvo no seu histórico`);

    const result = (await HistoryAsyncStorage.index()) || [];

    result.numbers = result.numbers || [];

    const lengthTotal = result.numbers.length;

    console.log(lengthTotal);

    result.numbers.push({
      // eslint-disable-next-line prettier/prettier
      ...(lengthTotal > 0 && {
        id: result.numbers[lengthTotal - 1].id + 1,
      }),
      ...(lengthTotal === 0 && {
        id: 1,
      }),
      content: number,
    });

    await HistoryAsyncStorage.store(result);
  };

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  function handleNavigateToHistory() {
    navigation.navigate('History');
  }

  return (
    <>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.container}>
        <View style={styles.centering}>
          <View style={styles.main}>
            <Text style={styles.title}>
              Olá {route.params.name || 'Nome Indefinido'}, porfavor selecione a
              opcao desejada: {'\n'}
            </Text>
          </View>
          <View style={styles.main}>
            <RectButton
              title="Sort"
              onPress={handleRandomNumberButton}
              style={styles.button}>
              <View>
                <Text>Sortear um número</Text>
              </View>
            </RectButton>

            <RectButton
              title="History"
              onPress={handleNavigateToHistory}
              style={styles.button}>
              <View>
                <Text>Historico</Text>
              </View>
            </RectButton>

            <RectButton
              title="History"
              onPress={handleNavigateToHome}
              style={styles.backButton}>
              <View>
                <Text>Voltar</Text>
              </View>
            </RectButton>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
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

  backButton: {
    backgroundColor: '#ff0048',
    height: 40,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  centering: {
    marginTop: '36%',
  },
});

export default Menu;
