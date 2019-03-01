import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';

import Home from './page/home/Home';
import Form from './page/form/Form';

export default class Pages extends UI {

  page(page){
    switch (page) {
      case 'home':
        return <Home app={this.app}/>
      case 'form':
        return <Form app={this.app}/>
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    const style = {...this.scale(1,0.864), ...this.style.list, ...{
      justifyContent: 'center',
      backgroundColor: 'yellow'
    }}
    return (
      <View style={style}>
        {this.page(this.store.content.page)}
      </View>
    )
  }
}
