import React from 'react';
import { View, Switch } from 'react-native';
import Row from './Row';

export default class CheckBox extends Row {

  render(){
    this.init(this.props);
    const title = this.props.title;
    return(
      <View style={this.row()}>
        <Switch value={this.props.checked} onValueChange={()=>{ this.props.onChange(this.props.index); }}/>
        {this.texts.small(title)}
      </View>
    )
  }

}
