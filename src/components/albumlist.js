import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumdetail';

// class component
class AlbumList extends Component {

  state = { albums: [] }; // <- Class Level Property

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} data={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

// functional component
// const AlbumList = () => {
//   return (
//     <View>
//       <Text> Album List!! </Text>
//     </View>
//   )
// }

export default AlbumList;
