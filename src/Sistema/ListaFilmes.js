import { useEffect, useState } from 'react';
import { ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

export default function ListaFilmes({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [filmesPageOne, setFilmesPageOne] = useState([]);
  const [filmesPageTwo, setFilmesPageTwo] = useState([]);
  const [filmesPageThree, setFilmesPageThree] = useState([]);
  const [filmesPageFour, setFilmesPageFour] = useState([]);

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

  const getFilmesPageOne = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=2'
      );
      const json = await resposta.json();
      setFilmesPageOne(json.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getFilmesPageTwo = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=3'
      );
      const json = await resposta.json();
      setFilmesPageTwo(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilmesPageThree = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=4'
      );
      const json = await resposta.json();
      setFilmesPageThree(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilmesPageFour = async () => {
    try {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e8dec90feebc5e7d11344d90f9d75fe&language=pt-BR&page=5'
      );
      const json = await resposta.json();
      setFilmesPageFour(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilmes();
    getFilmesPageOne();
    getFilmesPageTwo();
    getFilmesPageThree();
    getFilmesPageFour();
  }, []);

  return (
    <ScrollView style={{flex : 1, backgroundColor: '#000000', statusBarColor: '#26034D',
      statusBarStyle: 'light'}}>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 300, margin: 10}}
              resizeMode='stretch'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={filmesPageOne}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 300, margin: 10}}
              resizeMode='stretch'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={filmesPageTwo}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 300, margin: 10}}
              resizeMode='stretch'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={filmesPageThree}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 300, margin: 10}}
              resizeMode='stretch'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={filmesPageFour}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            
            <Image style={{height: 300, margin: 10}}
              resizeMode='stretch'
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path}}
            />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}