import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardsection';
import Button from './button';

const AlbumDetail = ({ data }) => {

  const { title, artist, image, thumbnail_image, url } = data;
  const {
    thumbnailStyle,
    textContentStyle,
    thumbnailContainerStyle,
    titleStyle,
    artworkStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={ thumbnailContainerStyle }>
          <Image style={ thumbnailStyle } source={{ uri: thumbnail_image}} />
        </View>
        <View style={ textContentStyle }>
          <Text style={ titleStyle }>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={ artworkStyle } source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={ () => Linking.openURL(url) }>
          Purchase
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontWeight: '600'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  artworkStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
