import React from 'react';
import Component from 'src/component/Component';
import { Text } from 'react-native';

class Texts extends Component {

  constructor(props){
    super(props);
    this.init(props);
  }

  text(text, color, fontWeight, scale){
    const style = {
      fontSize: scale? this.size[1] * scale[1] * 0.25: this.size[1] * 0.075,
      fontWeight: fontWeight? fontWeight: 'bold',
      color: color? color: 'black'
    }; return <Text style={style}>{text}</Text>
  }

}

export default Texts;
