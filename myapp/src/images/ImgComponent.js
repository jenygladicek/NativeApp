import React, {Component} from 'react';
import {Image} from 'react-native';

export default class ImgComponent extends Component{
  render() {
    return (
        <Image source={require('./../images/firstImg.PNG')} />
    );
  }
}

