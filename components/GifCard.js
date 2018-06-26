import React from 'react';
import { Tile } from 'react-native-elements';
import { View, Text } from 'react-native';

const GifCard = (props) => (
  <Tile
    featured
    title={props.title}
    imageSrc={{ uri: props.image.url }}
    titleStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
);

export default GifCard;