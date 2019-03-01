import React from 'react';
import { ScrollView } from 'react-native';

import List from './List';
import Form from './row/Form';

export default class Forms extends List {

  constructor(props){
    super(props);
    this.init(this.props);
    this.action.form.update([{_id:'0',title:'sample'}]);
  }

  render(){
    this.init(this.props);
    return (
      <ScrollView contentContainerStyle={this.list()}>
        {this.gap(0.02)}
        {this.store.form.forms.map(form=>{
          return <Form key={form._id} form={form} app={this.app}/>
        })}
        {this.gap(0.02)}
        {this.buttons.button('ADD','grey', [0.135,0.035], ()=>{
          this.action.main.set('status','scan'); })}
        {this.gap(0.02)}
      </ScrollView>
    )
  }

}
