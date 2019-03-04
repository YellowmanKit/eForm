import React from 'react';
import Component from 'src/component/Component';
import { Dimensions } from 'react-native';

import Content from './ui/content/Content';
import Scanner from './tool/Scanner';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.init(props);
    this.action.form.update([{
      _id: '0',
      title: 'Personal information form',
      questions: [
        {
          qid: '0',
          name: 'Name',
          type: 'string'
        },
        {
          qid:'1',
          name: 'Gender',
          type: 'picker',
          options: ['Male','Female']
        },
        {
          qid:'2',
          name: 'Birthday',
          type: 'date'
        },
        {
          qid:'3',
          name: 'Address',
          type: 'text'
        },
        {
          qid:'4',
          name: 'Photo',
          type: 'image'
        }
      ]
    }]);

    this.action.form.update([
      {_id: '1', title: 'texting'},
      {_id: '2', title: 'texting'},
      {_id: '3', title: 'texting'},
      {_id: '4', title: 'texting'},
      {_id: '5', title: 'texting'},
      {_id: '6', title: 'texting'},
      {_id: '7', title: 'texting'},
      {_id: '8', title: 'texting'},
      {_id: '9', title: 'texting'},
      {_id: '11', title: 'texting'},
      {_id: '22', title: 'texting'},
      {_id: '33', title: 'texting'},
      {_id: '44', title: 'texting'},
      {_id: '55', title: 'texting'},
      {_id: '66', title: 'texting'},
      {_id: '77', title: 'texting'},
      {_id: '88', title: 'texting'},
      {_id: '99', title: 'texting'},
    ])

    this.action.ui.set('size', [Dimensions.get('window').width, Dimensions.get('window').height]);
    this.action.main.set('status', 'ready');
  }

  view(status){
    switch (status) {
      case 'ready':
        return <Content app={this.app}/>
      case 'scan':
        return <Scanner app={this.app}/>
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    return this.view(this.store.main.status)
  }

}
