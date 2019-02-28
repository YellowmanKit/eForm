import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';

import Home from './page/home/Home';

class Pages extends UI {

  page(page){
    switch (page) {
      case 'home':
        return <Home app={this.app}/>
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    const style = {...this.scale(1,0.9), ...this.style.list, ...{
      justifyContent: 'center',
      backgroundColor: 'white'
    }}
    return (
      <View style={style}>
        {this.page(this.store.content.page)}
      </View>
    )
  }
}

export default Pages;
