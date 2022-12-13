import React, { useState} from 'react';
import { Button, TextInput } from 'react-native-paper'
import { Text, Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import {Ionicons  } from '@expo/vector-icons';


const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState('');
  const [ocultarSenha, setOcultarsenha] = useState(true);

return(
  <View style={styles.container}>
  <ImageBackground source={require('../Assets/fundoLogin.jpg')} 
    resizeMode="cover" style={styles.image}>
    
      <View style={{alignItems: 'center'}}>
        <Image source={require('../Assets/logo.png')} />
      </View>

      <View style={styles.back}>
      <TextInput
          backgroundColor="#000000"
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.email}
          textColor="#fff"
          label="Email"
        />
      <View style={styles.campoSenha}>
        <TextInput
          backgroundColor="#000000"
          secureTextEntry={ocultarSenha}
          value={inputs}
          onChangeText={ (texto) => setInputs(texto)}
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          textColor="#fff"
          style={styles.inputs}
          label="Senha"
        />
        <TouchableOpacity style={styles.icone} onPress={ () => setOcultarsenha(!ocultarSenha)}>
         {ocultarSenha ? 
          <Ionicons name="eye" size={25} color='gray'/>
          :
          <Ionicons name="eye-off" size={25} color='gray'/>
        }
        </TouchableOpacity>    
      </View>

        <View style={{alignSelf: 'flex-end', paddingRight: 10}}>
        <Text style={styles.texto}>Esqueceu a senha?</Text>
      </View>
    
    </View>

    <View style={{alignItems: 'center'}}> 
      <Button
        style={styles.botao}
        mode='contained'
        textColor='#000'
        buttonColor='#B6B6B6'
        onPress={() => navigation.navigate('SistemaNavigator')}>
        Acessar
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
  campoSenha:{
    flexDirection:"row",
    width: '100%',
    backgroundColor:'#000000',
    borderRadius: 5,
    height:70,
    alignItems: 'center',
  },
  inputs: {
    width: '85%',
    height:50,
  },
  icone:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back: {
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
    padding: 10,
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

export default Login;