import React from 'react';
import Page from '../Page';
import { View } from 'react-native';

export default class Form extends Page {

  render(){
    this.init(this.props);
    return (
      <View style={this.page()}>
        {this.texts.general('Form')}
      </View>
    )
  }

}
