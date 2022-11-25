import React, { useContext } from "react";
import { Button } from 'react-native-paper'
import { ImageBackground, Image, StyleSheet, View } from "react-native";

const image = { uri: "https://i.pinimg.com/564x/d9/e5/39/d9e5397d7d084c4009889dfcdf0b5758.jpg" };

const App = ({ navigation }) => {
  return(
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../Imagens/logoLogin.png')} />
        </View>
    <View style={{ alignItems: 'center'}}> 
        <Button
            style={styles.botao}
            mode='contained'
            textColor='#000000'
            buttonColor='#AD0505'
            onPress={() => navigation.navigate('TelaLogin')}>
                 Acessar
        </Button>
        <Button
            style={styles.botao}
            mode='contained'
            textColor='#000000'
            buttonColor='#AD0505'
            onPress={() => navigation.navigate('TelaCadastro')}>
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
    justifyContent: "center"
  },
  botao: {
    marginTop: 20,
    width: 150,
  }
});

export default App;
