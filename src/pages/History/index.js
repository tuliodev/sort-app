import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';

import {RectButton} from 'react-native-gesture-handler';

import HistoryAsyncStorage from '../../services/historyAsyncStorage';

const History = ({navigation}) => {
  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  async function handleClearData() {
    await HistoryAsyncStorage.store({});
    HistoryAsyncStorage.index().then(content => setData(content));
  }

  const [data, setData] = useState({
    numbers: [],
  });

  useEffect(() => {
    HistoryAsyncStorage.index().then(content => setData(content));
  }, []);

  const List = () => {
    if (data.numbers) {
      return data.numbers.map(numbers => {
        return (
          <View key={numbers.id} style={styles.historyData}>
            <Text style={styles.title}>{numbers.content}</Text>
          </View>
        );
      });
    }

    return (
      <View>
        <Text style={styles.title}> Não tem histórico </Text>
      </View>
    );
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/background.png')}>
        <View style={styles.main}>
          <Text style={styles.title}>
            {'\n'} Histórico {'\n'}
            {'\n'}
          </Text>

          <List />

          <RectButton
            title="History"
            onPress={handleNavigateToHome}
            style={styles.backButton}>
            <View>
              <Text>Voltar</Text>
            </View>
          </RectButton>

          <RectButton
            title="Clear"
            onPress={handleClearData}
            style={styles.backButton}>
            <View>
              <Text>Limpar</Text>
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
  historyData: {
    backgroundColor: 'white',
    width: '12%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default History;
