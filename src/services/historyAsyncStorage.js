import AsyncStorage from '@react-native-async-storage/async-storage';

class HistoryAsyncStorage {
  async store(value) {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('history', jsonValue);
  }

  async index() {
    const jsonValue = await AsyncStorage.getItem('history');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
}

export default new HistoryAsyncStorage();
