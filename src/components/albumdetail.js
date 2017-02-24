import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const AlbumDetail = ({ data }) => {

  const { title, artist, image, thumbnail_image} = data;
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
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image}} />
        </View>
        <View style={textContentStyle}>
          <Text style={titleStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <Cardsection>
        <View>
          <Image style={artworkStyle} source={{ uri: image}} />
        </View>
      </Cardsection>
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
    width: 300
  }
}

export default AlbumDetail;
