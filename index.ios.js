// Index.ios.js - place code in here for ios (windows)

// Step 1 - Import a library to help create a Component

import React from 'react';
// Only the root component uses 'AppRegistry'
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

// Step 2 - Create a Component
// Javascript function that returns some JSX.

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Step 3 - Render it to the device

AppRegistry.registerComponent('albums', () => App);
