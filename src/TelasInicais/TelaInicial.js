import { ImageBackground, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../DefaultButton/DefaultButton";

export default function App(){
  const navigation = useNavigation();

  const NavigationLogin = () => {
    navigation.navigate("TelaLogin");
  };

  const NavigationCadastro = () => {
    navigation.navigate("TelaCadastro");
  };

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('../Assets/fundoInicio.jpeg')} resizeMode="cover" 
        style={{flex: 1, justifyContent: 'center'}}>

          <View style={{alignItems: 'center'}}>
            <Image source={require('../Assets/logo.png')} />
          </View>

        <View style={{ alignItems: 'center'}}> 
          <DefaultButton
            buttonText={'Acessar'}
            backgroundColor={'#26034D'}
            click={NavigationLogin}
            width={110}
            height={50}
          />

          <DefaultButton
            marginTop={10}
            backgroundColor={'#26034D'}
            buttonText={'Cadastrar'}
            click={NavigationCadastro}
            width={110}
            height={50}
          />
        </View>
        
      </ImageBackground>
    </View>
  )
};