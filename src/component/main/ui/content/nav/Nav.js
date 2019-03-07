import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';

export default class Nav extends UI {

  componentWillMount(){ this.init(this.props); this.nav(this.content.page); }
  componentWillReceiveProps(newProps){ this.init(newProps); this.nav(this.content.page); }

  nav(page){
    var title = '';
    var text = ['<','+']
    var onPress = [()=>{ this.action.content.set('page','home'); }, ()=>{ this.action.main.set('status','scan'); } ];

    const form = this.store.form.usingForm;

    switch (page) {
      case 'home':
        title = 'eForm';
        onPress[0] = ()=>{ this.action.main.set('status','login'); }
        break;
      case 'form':
        title = 'FILL'
        text[1] = '^';
        onPress[1] = ()=>{ this.action.submit.submit(form, this.getSubmit(form._id)); }
        break;
      default:
        break;
    }
    this.setState({ title, text, onPress });
  }

  render(){
    this.init(this.props);
    const style = {...this.scale(1,0.1), ...this.style.nav, ...{ backgroundColor: 'green' }}
    return (
      <View style={style}>
        {this.buttons.button(this.state.text[0], 'transparent', [0.1,0.1], this.onLeft.bind(this))}
        {this.texts.text(this.state.title, [0.75,0.1], 0.075, 'white', 'bold', 'center')}
        {this.buttons.button(this.state.text[1], 'transparent', [0.1,0.1], this.onRight.bind(this))}
      </View>
    )
  }

  onLeft(){
    this.app.save('submits', JSON.stringify(this.store.submit.submits));
    this.state.onPress[0]();
  }

  onRight(){
    this.app.save('submits', JSON.stringify(this.store.submit.submits));
    this.state.onPress[1]();
  }

}
