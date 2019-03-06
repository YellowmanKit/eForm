import React from 'react';
import Component from 'src/component/Component';
import { Text } from 'react-native';

export default class Texts extends Component {

  constructor(props){
    super(props);
    this.init(props);
  }

  general(text){ return this.text(text, [null, null], 0.035, 'black', 'bold', 'center'); }
  small(text){ return this.text(text, [null, null], 0.025, 'black', 'normal', 'center'); }

  text(text, scale, fontScale, color, fontWeight, textAlign){
    const style = {...this.scale(scale[0], scale[1]), ...{
      fontSize: this.size[1] * fontScale,
      fontWeight: fontWeight,
      color: color,
      textAlign: textAlign,
      overflow: 'hidden'
    }}
    return <Text key={text} style={style}>{text}</Text>
  }

}
