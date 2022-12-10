import React, { useState } from "react";
import { Button, TextInput } from 'react-native-paper'
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';


const App = ({ navigation }) => {
  const [input, setInput ] = useState('');
  const [hidePass, setHidepass] = useState(true);
  const [input2, setInput2 ] = useState('');
  const [hidePass2, setHidepass2] = useState(true);

  return(
  <View style={styles.container}>
    <ImageBackground source={require('../Assets/fundoCadastro.jpg')} 
      resizeMode="cover" style={styles.image}>
      
        <View style={{alignItems: 'center'}}>
          <Image source={require('../Assets/logo.png')} />
        </View>

        <View style={styles.back}>
        <TextInput
          style={styles.email}
          backgroundColor="#000000"
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          label="Email"
        />

        <View style={styles.senha}>
        <TextInput 
          backgroundColor="#000000"
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          secureTextEntry={hidePass}
          style={styles.input}
          value={input}
          onChangeText={ (texto) => setInput(texto)}
          label="Senha" 
        />
        <TouchableOpacity style={styles.icon} onPress={ () => setHidepass(!hidePass)}>
         {hidePass ? 
          <Ionicons name="eye" size={25} color='gray'/>
          :
          <Ionicons name="eye-off" size={25} color='gray'/>

          }
        </TouchableOpacity>
        </View>

        <View style={styles.repeteSenha}>
        <TextInput
          secureTextEntry={hidePass2}
          value={input2}
          onChangeText={ (texto) => setInput2(texto)}
          backgroundColor="#000000"
          underlineColor="#B6B6B6"
          activeUnderlineColor="#B6B6B6"
          style={styles.input2}
          label="Confirmar senha"
        />
        <TouchableOpacity style={styles.icon2} onPress={ () => setHidepass2(!hidePass2)}>
          {hidePass2 ? 
          <Ionicons name="eye" size={25} color='gray'/>
          :
          <Ionicons name="eye-off" size={25} color='gray'/>
          }   
        </TouchableOpacity>
        </View>

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
          onPress={() => navigation.navigate('TelaLogin')}>
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
  senha: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 5,
    height:70,
    alignItems:'center',

  },
  input:{
    width: '85%',
    height: 50,
    pedding: 8
  },
  icon:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems:'center'
  },
  repeteSenha:{
    flexDirection: "row",
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 5,
    height:70,
    alignItems:'center'
  },
  input2: {
    width: '85%',
    height: 50,
    pedding: 8
  },
  icon2: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back: {
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
    padding: 10
  },
  texto: {
    fontSize: 15,
    color: '#904B9C',
    fontSize: 18
  }

  
});

export default App;