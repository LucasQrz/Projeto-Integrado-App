import React, { useState} from 'react';
import { Button, TextInput } from 'react-native-paper'
import { Text, Image, View, StyleSheet } from 'react-native';

const App = ({ navigation }) => {
  const login = useState ();
  const senha = useState ();

return(
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flex: 5, justifyContent: 'flex-end'}}>

        <View style={{alignItems: 'center', }}>
          <Image source={require('../Imagens/logoLogin.png')} />
        </View>
      </View>
      
        <TextInput
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.inputs}
          label="Email"
          defaultValue={login}
        />
        <TextInput
          secureTextEntry
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.inputs}
          label="Senha"
          defaultValue={senha}
          right={
            <TextInput.Icon
              icon="eye"
              size={25}
              color="blue"
            />
          }
        />
      
      <View style={{alignSelf: 'flex-end', paddingRight: 10}}>
        <Text style={styles.texto}>Esqueceu a senha?</Text>
      </View>
        
      <View style={{flex: 5, alignItems: 'center'}}> 
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
    backgroundColor: '#000000',
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