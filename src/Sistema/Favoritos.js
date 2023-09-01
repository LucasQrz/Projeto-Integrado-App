import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Favoritos({ route, navigation }) {
  let [filmes, addFilmeToFavoritos, filmesFavoritos] = [[], () => {}, []];

  if (route && route.params) {
    filmes = route.params?.filmes ?? [];
    filmesFavoritos = route.params?.filmesFavoritos ?? [];
    addFilmeToFavoritos = route.params?.addFilmeToFavoritos ?? (() => {});
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000', padding: 10 }}>
      <FlatList
        data={filmesFavoritos}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detalhes', { id: item.id, addFilmeToFavoritos, filmesFavoritos })
            }
          >
            <Image
              style={{ height: 400 }}
              resizeMode="contain"
              source={{ uri: 'https://image.tmdb.org/t/p/w200/' + item.poster_path }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
