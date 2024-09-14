import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar dados no AsyncStorage
const setDataInAsyncStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Erro ao salvar no AsyncStorage:', e);
  }
};

// Função para obter dados do AsyncStorage
const getDataFromAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Erro ao obter do AsyncStorage:', e);
  }
};
