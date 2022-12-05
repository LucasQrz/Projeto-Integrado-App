import { View, StyleSheet, TextInput, SafeAreaView, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Inicio = () => {
  return (
    <View style={{flex: 1, marginTop: 35}}>

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: "black"}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>

          <TextInput style={styles.input}>

          </TextInput>

          <Entypo style={{position: 'absolute', paddingLeft: 230}} name="magnifying-glass" size={25} color="white" />
          <Ionicons style={{position: 'absolute', paddingLeft: 300}} name="filter" size={25} color="white" />
          <FontAwesome style={{position: 'absolute', paddingLeft: 370}} name="user" size={25} color="white" />

        </View>
      </View>

      <View style={{flex: 9, backgroundColor: "black"}}>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '65%',
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#2A2B2D",
    borderRadius: 20
  }
});

export default Inicio;