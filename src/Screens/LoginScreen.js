import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import DefaultButton from '../DefaultButton/DefaultButton';

export default function LoginScreen() {
  const navigation = useNavigation();
  const NavigationLogin = () => {
    navigation.navigate('SistemaNavigator');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho animado */}
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Fazer login</Text>
      </Animatable.View>

      {/* Formulário animado */}
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* Título "Email" */}
        <Text style={styles.title}>Email</Text>

        {/* Campo de entrada de texto para o email */}
        <TextInput placeholder="Digite seu email" style={styles.input} />

        {/* Título "Senha" */}
        <Text style={styles.title}>Senha</Text>

        {/* Campo de entrada de texto para a senha */}
        <TextInput placeholder="Digite sua Senha" style={styles.input} secureTextEntry={true} />

        {/* Botão "Entrar" */}
        <View style={{ alignItems: 'center' }}>
          <DefaultButton
            buttonText={'Login'}
            backgroundColor={'#903848'}
            marginTop={14}
            click={NavigationLogin}
            width={'100%'}
            height={50}
          />
        </View>

        {/* Botão "Cadastre-se" */}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
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
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#903848',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
});
