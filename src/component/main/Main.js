import React from 'react';
import Component from 'src/component/Component';
import { Dimensions, AsyncStorage } from 'react-native';

import Login from './ui/login/Login';
import Content from './ui/content/Content';
import Scanner from './tool/Scanner';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.init(props);
    this.action.ui.set('size', [Dimensions.get('window').width, Dimensions.get('window').height]);
    this.action.main.set('status', 'login');
  }

  view(status){
    switch (status) {
      case 'login':
        return <Login app={this.app}/>
      case 'ready':
        this.rememberUser();
        return <Content app={this.app}/>
      case 'scan':
        return <Scanner app={this.app}/>
      default:
        return null;
    }
  }

  rememberUser(){
    const user = this.store.main.user;
    this.app.save('id', user.id);
    this.app.save('pw', user.pw);
  }

  render() {
    this.init(this.props);
    return this.view(this.store.main.status)
  }

}
