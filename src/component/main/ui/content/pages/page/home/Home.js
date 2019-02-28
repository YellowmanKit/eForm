import React from 'react';
import Page from '../Page';
import { View } from 'react-native';

class Home extends Page {

  render(){
    this.init(this.props);
    return (
      <View style={this.page()}>
        {this.texts.text('eForm')}
      </View>
    )
  }

}

export default Home;
