import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

export default function Playlist({route, navigation}){

  let [filmes, addFilmeToFavoritos, filmesFavoritos] = [[], () => {}, []];

  if(route && route.params){
    filmes = route.params?.filmes ?? [];
    filmesFavoritos = route.params?.filmesFavoritos ?? [];
    addFilmeToFavoritos = route.params?.addFilmeToFavoritos ?? (() => {});

  }

  return (
     <View style={{flex: 1, backgroundColor: '#000000'}}>
      <Text style={{fontSize: 22, color: '#fff', padding: 5}}>Playlist</Text>

      <FlatList
        data={filmesFavoritos}
        horizontal={false}
        renderItem={({ item }) => (
           
        <Card onPress={() => navigation.navigate('Detalhes', { id: item.id, addFilmeToFavoritos, filmesFavoritos})}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} 
            style={{ padding: 5, backgroundColor: '#000000', borderRadius: 0}}/>
        </Card>  
        
        )}
      />      
    </View>
  )

}