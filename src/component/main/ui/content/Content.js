import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View, StatusBar } from 'react-native';
import Nav from './nav/Nav';
import Pages from './pages/Pages';

export default class Content extends UI {

  render() {
    this.init(this.props);
    const style = {...this.scale(1,1), ...this.style.list, ...{backgroundColor: 'blue'}}
    return (
      <View style={style}>
        {this.gap(0.036)}
        <Nav app={this.props.app}/>
        <Pages app={this.props.app}/>
      </View>
    )
  }
}
