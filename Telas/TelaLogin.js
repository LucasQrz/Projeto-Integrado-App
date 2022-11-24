import React, { useState} from 'react';
import { Button } from 'react-native-paper'
import { TextInput, Text, Image, View, StyleSheet } from 'react-native';

const App = ({ navigation }) => {
  const login = useState ();
  const senha = useState ();

return(
    <View style={{flex: 1, backgroundColor: '#000000', width: 415}}>
      <View style={{flex: 5, justifyContent: 'flex-end'}}>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../Imagens/logoLogin.png')} />
        </View>

        <TextInput
          style={styles.inputs}
          placeholder="Email"
          defaultValue={login}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Senha"
          defaultValue={senha}
        />
      </View>

      <View style={{alignSelf: 'flex-end', marginRight: 10}}>
        <Text style={styles.texto}>Esqueceu a senha?</Text>
      </View>
        
      <View style={{flex: 5, justifyContent: 'space-between', alignItems: 'center'}}> 
        <Button
        style={styles.botao}
        mode='contained'
        textColor='#000'
        buttonColor='#B6B6B6'
        onPress={() => navigation.navigate('TelaSistema')}>
          Acessar
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#B6B6B6',
    margin: 5,
    padding: 8
  },

  texto: {
    fontSize: 15,
    color: '#AD0505'
  },

  botao: {
    marginTop: 50,
    width: 150
  }
});

export default App;