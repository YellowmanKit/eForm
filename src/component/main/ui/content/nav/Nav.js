import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';

export default class Nav extends UI {

  constructor(props){
    super(props);
    this.init(this.props);
    this.state = {}
  }

  componentDidMount(){ this.nav(this.content.page); }
  componentWillReceiveProps(newProps){ this.init(newProps); this.nav(this.content.page); }

  nav(page){
    var title = '';
    switch (page) {
      case 'home':
        title = 'eForm'
        break;
      case 'form':
        title = 'FILL'
        break;
      default:
        break;
    }
    this.setState({ title });
  }

  render(){
    this.init(this.props);
    const style = {...this.scale(1,0.1), ...this.style.nav, ...{ backgroundColor: 'green' }}
    return (
      <View style={style}>
        {this.buttons.button('<','transparent',[0.1,0.1],()=>{ this.action.content.set('page','home'); })}
        {this.texts.text(this.state.title, [0.75,0.1], 0.075, 'white', 'bold', 'center')}
        {this.buttons.button('+','transparent',[0.1,0.1],()=>{ this.action.main.set('status','scan'); })}
      </View>
    )
  }

}
