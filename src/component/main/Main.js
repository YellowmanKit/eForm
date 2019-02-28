import React from 'react';
import Component from 'src/component/Component';
import { Dimensions } from 'react-native';

import Content from './ui/content/Content';

class Main extends Component {

  constructor(props){
    super(props);
    this.init(props);
    this.action.ui.set('size', [Dimensions.get('window').width, Dimensions.get('window').height]);
    this.action.main.set('status', 'ready');
  }

  view(status){
    switch (status) {
      case 'ready':
        return <Content app={this.props.app}/>
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    return this.view(this.store.main.status)
  }

}

export default Main;
