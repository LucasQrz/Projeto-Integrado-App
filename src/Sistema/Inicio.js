import { View, TextInput } from "react-native";
import { Appbar } from 'react-native-paper';

const Inicio = () => {
  return (
    <View style={{flex: 1}}>

      <View style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Filmes"/>
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="filter-variant" onPress={() => {}} />
          <Appbar.Action icon="account" onPress={() => {}} />
        </Appbar.Header>
        </View>

      <View style={{flex: 9, backgroundColor: "black"}}>
      </View>
      
    </View>
  );
};

export default Inicio;