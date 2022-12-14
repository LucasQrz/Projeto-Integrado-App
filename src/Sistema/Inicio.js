import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
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
    <View>
      <FlatList
        data={filmes}
        horizontal={true}
        renderItem={({ item }) => (
           
        <Card onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} style={{width: "100%", height: 100}}/>
          <Card.Title title={item.title} subtitle={item.vote_average}/>
        </Card>  
        
        )}
      />
    </View>
  );
}

 // <List.Item
          //   imagem={item.poster_path}
          //   title={item.title}
          //   description={item.vote_average}

          //   imagemStyle={styles.poster_path}
          //   titleStyle={styles.title}
          //   descriptionStyle={styles.vote_average}
          //   onPress={() => navigation.navigate('Detalhes', { id: item.id })}
          // />
const styles = StyleSheet.create({
title: {
  fontWeight: 'bold',
  color: 'rgb(117, 117, 117)',
  fontSize: 12,
}
    
});