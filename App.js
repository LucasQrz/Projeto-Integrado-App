import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './Telas/TelaInicial';
import TelaLogin from  './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial></TelaInicial>
      {/* <TelaLogin></TelaLogin> */}
      {/* <TelaCadastro></TelaCadastro> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
