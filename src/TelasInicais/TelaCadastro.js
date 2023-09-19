import React, { useState } from "react";
import config from "../config/config.json";
import { TextInput } from 'react-native-paper';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../DefaultButton/DefaultButton";

export default function Cadastro() {
  const navigation = useNavigation();
  const [input, setInput] = useState(null); //aqui fica o valor que o setInput e o nome que e input então fica assim 'input = setInput'
  const [hidePass, setHidepass] = useState(true);
  const [input2, setInput2] = useState(null);//aqui fica o valor que o setInput2 e o nome que e input2 então fica assim 'input2 = setInput2'
  const [hidePass2, setHidepass2] = useState(true);

  const NavigationSistema = () => {
    navigation.navigate("TelaLogin");
  };
  //Envia os dados do formulario para o banco 
  async function registerUser() {
    let reqs = await fetch(config.urlRootNode + 'create', {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailUser: input,
        senhaUser: input2
      })

    })
  }

  return (
    // Esse view vai ser a logo
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../Assets/fundoCadastro.jpg')}
        resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../Assets/logo.png')} />
        </View>

        {/* Esse view e a barra do email */}
        <View style={styles.container}>
          <TextInput
            backgroundColor="#000000"
            underlineColor="#B6B6B6"
            activeUnderlineColor="#B6B6B6"
            onChangeText={(texto) => setInput(texto)}
            Value={input}
            textColor="#fff"
            label="Email"
          />
          {/* Esse view e a barra da senha */}
          <View style={styles.senha}>
            <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              secureTextEntry={hidePass}
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput2(texto)}
              label="Senha"
            />
            {/* Aqui e o botão que chama a função para mudar o valor do olho e esconder o texto   */}
            <TouchableOpacity style={styles.icon} onPress={() => setHidepass(!hidePass)}>
              {hidePass ?
                <Ionicons name="eye" size={25} color='gray' />
                :
                <Ionicons name="eye-off" size={25} color='gray' />
              }
            </TouchableOpacity>
          </View>
          {/* Esse view e a barra da CORFIRMAR SENHA */}
          <View style={styles.senha}>
            {/* Aqui vou ter que trabalhar para comparar com a senha se não estiver igual a senha nao vai poder ir. */}
            <TextInput
              secureTextEntry={hidePass2}
              value={input2}
              onChangeText={(texto) => setInput2(texto)}
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              style={styles.input}
              label="Confirmar senha"
            />
            {/* Aqui e o botão que chama a função para mudar o valor do olho e esconder o texto */}
            <TouchableOpacity style={styles.icon} onPress={() => setHidepass2(!hidePass2)}>
              {hidePass2 ?
                <Ionicons name="eye" size={25} color='gray' />
                :
                <Ionicons name="eye-off" size={25} color='gray' />
              }
            </TouchableOpacity>
          </View>
          {/* vai ficar o nome "Já tem uma conta?" */}
          <View style={{ alignSelf: 'flex-end', paddingRight: 10 }}>
            <Text style={styles.texto}>Já tem uma conta?</Text>
          </View>
        </View>
        {/* Aqui e o botão cadastrar */}
        {/* aqui tem duas opções para fazer mudar a função DefaultButton ou colocar */}
        <View style={{ alignItems: 'center' }}>

          



        </View>

      </ImageBackground>
    </View>
  )
};
// Aqui fica os estilos.
const styles = StyleSheet.create({
  senha: {
    flexDirection: "row",
    width: '100%',
    borderRadius: 5,
    height: 70,
    alignItems: 'center'
  },

  input: {
    width: '85%',
    height: 50,
    pedding: 8
  },

  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },

  texto: {
    fontSize: 15,
    color: '#904B9C',
    fontSize: 18
  }
});