import React from 'react';
import Component from 'src/component/Component';
import { TouchableOpacity, Image } from 'react-native';
import Texts from './Texts';

export default class Buttons extends Component {

  texts = new Texts(this.props);

  constructor(props){
    super(props);
    this.init(props);
  }

  absolute(text, color, scale, onPress){
    return this.button(text, color, scale, onPress, { position: 'absolute', top: 0, left: 0})
  }

  button(text, color, scale, onPress, custom, uri){
    const style = {...this.scale(scale[0],scale[1]), ...this.style.list, ...custom, ...{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color
    }}
    return(
    <TouchableOpacity style={style} onPress={onPress}>
      {text !== '' && this.texts.text(text, scale, scale[1] * 0.65, 'white', 'bold', 'center')}
      {uri && <Image source={{ uri }} style={this.scale(scale[0],scale[1])}/>}
    </TouchableOpacity>)
  }

}
