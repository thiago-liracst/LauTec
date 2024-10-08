import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <View style={container.header}>
        <Text style={container.headerText}>Paróquia Sagrada Família</Text>
        <Image style={container.logo} source={require('./src/assets/SagradaFamilia.png')} />
      </View>

      <View style={container.body}> 
        <Routes />
      </View>
    </>
  );
}

const container = StyleSheet.create({
  header:{
    backgroundColor: '#9c0000',
    width: '100%',
    height: 184,
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },

  body: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
});
