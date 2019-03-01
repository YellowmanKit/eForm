import React from 'react';
import Page from '../Page';
import { View } from 'react-native';
import Forms from 'src/component/main/ui/item/list/Forms';

export default class Home extends Page {

  render(){
    this.init(this.props);
    return (
      <View style={this.page()}>
        <Forms app={this.app}/>
      </View>
    )
  }

}
