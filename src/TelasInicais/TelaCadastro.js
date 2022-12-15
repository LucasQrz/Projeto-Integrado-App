import React, { useState } from "react";
import { TextInput } from 'react-native-paper'
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../DefaultButton/DefaultButton";

export default function Cadastro(){
  const navigation = useNavigation();
  const [input, setInput ] = useState('');
  const [hidePass, setHidepass] = useState(true);
  const [input2, setInput2 ] = useState('');
  const [hidePass2, setHidepass2] = useState(true);

  const NavigationSistema = () => {
    navigation.navigate("TelaLogin");
  };

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('../Assets/fundoCadastro.jpg')} 
        resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
          
          <View style={{alignItems: 'center'}}>
            <Image source={require('../Assets/logo.png')} />
          </View>

          <View style={styles.container}>
            <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              label="Email"
            />

            <View style={styles.senha}>
              <TextInput 
                backgroundColor="#000000"
                underlineColor="#B6B6B6"
                activeUnderlineColor="#B6B6B6"
                textColor="#fff"
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

          <View style={styles.senha}>
            <TextInput
              secureTextEntry={hidePass2}
              value={input2}
              onChangeText={ (texto) => setInput2(texto)}
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              style={styles.input}
              label="Confirmar senha"
            />
            <TouchableOpacity style={styles.icon} onPress={ () => setHidepass2(!hidePass2)}>
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
          <DefaultButton
            buttonText={'Acessar'}
            backgroundColor={'#26034D'}
            marginTop={14}
            click={NavigationSistema}
            width={200}
            height={50}
          />
        </View>

      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  senha: {
    flexDirection: "row",
    width: '100%',
    borderRadius: 5,
    height:70,
    alignItems:'center'
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