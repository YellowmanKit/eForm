import React from 'react';
import { ScrollView } from 'react-native';

import List from './List';
import CheckBox from './row/CheckBox';

export default class CheckBoxes extends List {

  render(){
    this.init(this.props);
    return (
      <ScrollView contentContainerStyle={this.list()}>
        {this.gap(0.02)}
        {this.props.choices.map((choice, i)=>{
          return(
          <CheckBox key={choice} app={this.app} index={i} title={choice} checked={this.props.value[i]}
          onChange={this.onChange.bind(this)}/>)})}
        {this.gap(0.02)}
      </ScrollView>
    )
  }

  onChange(index){
    var value = this.props.value;
    value[index] = !value[index];
    this.props.onChange(value);
  }

}
