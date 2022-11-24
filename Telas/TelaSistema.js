import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Início', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'albums', title: 'Playlist', focusedIcon: 'play', unfocusedIcon: 'play-outline'},
    { key: 'recents', title: 'Favoritos', focusedIcon: 'star', unfocusedIcon: 'star-outline'},
    { key: 'notifications', title: 'Configurações', focusedIcon: 'cog', unfocusedIcon: 'cog-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;