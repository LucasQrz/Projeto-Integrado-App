import { useEffect, useState } from 'react';
import { View, FlatList, Text, ScrollView, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Inicio({ navigation }) {

  const [filmesLancamentos, setFilmesLancamentos] = useState([]);
  const [filmesEmAlta, setFilmesEmAlta] = useState([]);
  const [filmesTop, setFilmesTop] = useState([]);

  const [filmesFavoritos, setFilmesFavoritos] = useState([]);

  const addFilmeToFavoritos  = (filme) => {
    const newFavoritos = [...filmesFavoritos];
    newFavoritos.push(filme);
    setFilmesFavoritos(newFavoritos);
  }

  const getFilmesByTipo = async (tipo) => {
    try{
      let resposta = await fetch(
        `https://api.themoviedb.org/3/movie/${tipo}?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=1`
      );
      let json = await resposta.json();
      return (json.results);
    }catch(error){
      console.log(error);
    }
  }

  const navigateToDetails = (id) => {
    navigation.navigate('Detalhes', { id, addFilmeToFavoritos, filmesFavoritos })
  }

  useEffect(async () =>  {
    //getFilmes();
    const filmesLancamento = await getFilmesByTipo('upcoming');
    setFilmesLancamentos(filmesLancamento);

    const filmesPopulares = await getFilmesByTipo('popular');
    setFilmesEmAlta(filmesPopulares);

    const filmesTop = await getFilmesByTipo('top_rated');
    setFilmesTop(filmesTop);

  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000000'}}>

    <ImageBackground source={require('../Assets/fundoPerfil.jpeg')} 
        resizeMode="cover" style={{justifyContent: 'center'}}>

      <TouchableOpacity onPress={() => navigation.navigate('Favoritos',{filmes: filmesFavoritos, addFilmeToFavoritos, filmesFavoritos})}>
        <View style={{alignItems: 'center'}}>
        <Image
          source={require('../Assets/logoInicio.png')}
        />
        </View>
      </TouchableOpacity>
    </ImageBackground>

      <Text style={{fontSize: 22, color: '#fff', padding: 5}}>Lançamentos</Text>
      <View>
        <FlatList
          data={filmesLancamentos}
          horizontal={true}
          renderItem={({ item }) => (
              
          <Card onPress={() => navigateToDetails(item.id)} style={{backgroundColor: '#000000'}}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} 
              style={{width: 125, height: 200, padding: 5, backgroundColor: '#000000', borderRadius: 0}}/>
                
              <TouchableOpacity onPress={() => addFilmeToFavoritos(item, {filmes: filmesFavoritos, addFilmeToFavoritos, filmesFavoritos}, 
                Alert.alert("Filme favoritado com sucesso!"))}>
                <View style={{alignItems: 'center', flexDirection: 'column', marginBottom: 15}}>
                  <Ionicons name='add-circle-outline' size={35} color='#fff' />
                  <Text style={{color: '#fff', fontSize: 12}}>Favoritar</Text>
                </View>
              </TouchableOpacity>
          </Card>  
          )}
        />
      </View>

      <Text style={{fontSize: 22, color: '#fff', padding: 5}}>Em alta</Text>
      <View>
        <FlatList
          data={filmesEmAlta}
          horizontal={true}
          renderItem={({ item }) => (
           
        <Card onPress={() => navigateToDetails(item.id)} style={{backgroundColor: '#000000'}}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} 
            style={{width: 125, height: 200, padding: 5, backgroundColor: '#000000', borderRadius: 0}}/>

            <TouchableOpacity onPress={() => addFilmeToFavoritos(item, 
              Alert.alert("Filme favoritado com sucesso!"))}>
              <View style={{alignItems: 'center', flexDirection: 'column', marginBottom: 15}}>
                <Ionicons name='add-circle-outline' size={35} color='#fff'/>
                <Text style={{color: '#fff', fontSize: 12}}>Favoritar</Text>
              </View>
            </TouchableOpacity>
        </Card>  
        )}
      />
      </View>

      <Text style={{fontSize: 22, color: '#fff', padding: 5}}>Tops</Text>
      <View>
        <FlatList
          data={filmesTop}
          horizontal={true}
          renderItem={({ item }) => (
           
        <Card onPress={() => navigateToDetails(item.id)} style={{backgroundColor: '#000000'}}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}} 
            style={{width: 125, height: 200, padding: 5, backgroundColor: '#000000', borderRadius: 0}}/>
            
            <TouchableOpacity onPress={() => addFilmeToFavoritos(item, 
              Alert.alert("Filme favoritado com sucesso!"))}>
              <View style={{alignItems: 'center', flexDirection: 'column', marginBottom: 15}}>
                <Ionicons name='add-circle-outline' size={35} color='#fff'/>
                <Text style={{color: '#fff', fontSize: 12}}>Favoritar</Text>
              </View>
            </TouchableOpacity>
        </Card>  
        )}
      />
      </View>
      
    </ScrollView>
  );
}