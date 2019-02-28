import React from 'react';
import Component from 'src/component/Component';
import { TouchableOpacity } from 'react-native';
import Texts from './Texts';

class Buttons extends Component {

  texts = new Texts(this.props);

  constructor(props){
    super(props);
    this.init(props);
  }

  button(text, color, scale, onPress){
    const style = {...this.scale(scale[0],scale[1]), ...{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color
    }}; return(
    <TouchableOpacity style={style} onPress={onPress}>
      {this.texts.text(text, 'white', 'bold', scale)}
    </TouchableOpacity>)
  }

}

export default Buttons;
