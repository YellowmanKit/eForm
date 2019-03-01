import React from 'react';
import { View } from 'react-native';

import Row from './Row';

export default class Form extends Row {

  render(){
    this.init(this.props);
    const form = this.props.form;
    return(
      <View style={this.row()}>
        {this.verGap(0.01)}
        {this.title(form.title, [0.625,0.05])}
        {this.button('FILL','green',()=>{ this.action.content.set('page','form')})}
        {this.verGap(0.02)}
        {this.button('DEL','red',()=>{ this.action.form.remove(form); })}
      </View>
    )
  }

  button(text, color, onPress){ return this.buttons.button(text, color, [0.135,0.035], onPress) }

}
