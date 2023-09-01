import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logotipo animado */}
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../Assets/promonet-logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      {/* Formulário animado */}
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        {/* Botão "Login" */}
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('TelaLogin')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Botão "Cadastrar" */}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('TelaCadastro')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

// Define os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#903848',
  },
  containerLogo: {
    flex: 3,
    backgroundColor: '#903848',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  buttonLogin: {
    position: 'absolute',
    backgroundColor: '#903848',
    borderRadius: 4,
    paddingVertical: 12,
    marginBottom: 12,
    width: '70%',
    alignSelf: 'center',
    bottom: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRegister: {
    position: 'absolute',
    backgroundColor: '#903848',
    borderRadius: 4,
    paddingVertical: 12,
    width: '70%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
