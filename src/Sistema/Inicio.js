import { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card } from 'react-native-paper';


export default function Inicio({ navigation }) {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=1'
      );
      const json = await resposta.json();
      setFilmes(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <Text style={{fontSize: 22, color: '#fff', padding: 5}}>Lançamentos</Text>
      <View>
      <FlatList
        data={filmes}
        horizontal={true}
        renderItem={({ item }) => (
           
        <Card onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} 
            style={{width: 125, height: 200, padding: 5, backgroundColor: '#000000', borderRadius: 0}}/>
        </Card>  
        
        )}
      />
      </View>
    </View>
  );
}