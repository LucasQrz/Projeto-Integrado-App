import React, { useContext } from "react";
import { Button, TextInput } from 'react-native-paper'
import { ImageBackground, Image, StyleSheet, View, Text } from "react-native";

const App = () => {
  return(
  <View style={styles.container}>
    <ImageBackground source={require('../Assets/fundoCadastro.jpg')} 
      resizeMode="cover" style={styles.image}>
      
        <View style={{alignItems: 'center'}}>
          <Image source={require('../Assets/logo.png')} />
        </View>

        <View style={styles.back}>
        <TextInput
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.inputs}
          label="Email"
        />
        <TextInput
          secureTextEntry
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.inputs}
          label="Senha"
          right={
            <TextInput.Icon
              icon="eye"
              size={25}
              iconColor='gray'
            />
          }
        />
        <TextInput
          secureTextEntry
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.inputs}
          label="Confirmar senha"
          right={
            <TextInput.Icon
              icon="eye"
              size={25}
              iconColor='gray'
          />
          }
        />

        <View style={{alignSelf: 'flex-end', paddingRight: 10}}>
          <Text style={styles.texto}>Já tem uma conta?</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}> 
        <Button
          style={styles.botao}
          mode='contained'
          textColor='#000'
          buttonColor='#B6B6B6'
          onPress={() => navigation.navigate('TelaSistema')}>
          Cadastrar
        </Button>
      </View>

    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  inputs: {
    borderWidth: 2,
    backgroundColor: '#000000',
    margin: 5,
    padding: 6
  },
  back: {
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 10,
    padding: 10
  },
  texto: {
    fontSize: 15,
    color: '#904B9C',
    fontSize: 18
  },
  botao: {
    marginTop: 50,
    width: 150,
  }
});

export default App;