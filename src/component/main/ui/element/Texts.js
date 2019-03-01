import React from 'react';
import Component from 'src/component/Component';
import { Text } from 'react-native';

export default class Texts extends Component {

  constructor(props){
    super(props);
    this.init(props);
  }

  general(text){ return this.text(text, [0.5,0.05], 0.035, 'black', 'bold', 'center'); }

  text(text, scale, fontScale, color, fontWeight, textAlign){
    const style = {
      width: this.size[0] * scale[0], height: this.size[1] * scale[1],
      fontSize: this.size[1] * fontScale,
      fontWeight: fontWeight,
      color: color,
      textAlign: textAlign,
      overflow: 'hidden'
    }; return <Text style={style}>{text}</Text>
  }

}
