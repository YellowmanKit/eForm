import React from 'react';
import { ScrollView } from 'react-native';

import List from './List';
import Form from './row/Form';

export default class Forms extends List {

  constructor(props){
    super(props);
    this.init(props);
    this.loadForms();
    this.loadSubmits();
  }

  async loadForms(){
    const forms = await this.app.load('forms');
    this.action.form.update(JSON.parse(forms));
  }

  async loadSubmits(){
    const submits = await this.app.load('submits');
    this.action.submit.update(JSON.parse(submits));
  }

  componentWillReceiveProps(newProps){
    const newForms = newProps.app.store.form.forms;
    if(this.store.form.forms.length !== newForms.length){ this.saveForms(newForms); }
  }

  saveForms(forms){ this.app.save('forms', JSON.stringify(forms)); }

  render(){
    this.init(this.props);
    return (
      <ScrollView contentContainerStyle={this.list()}>
        {this.gap(0.02)}
        {this.store.form.forms.map(form=>{ return <Form key={form._id} form={form} app={this.app}/> })}
        {this.gap(0.02)}
      </ScrollView>
    )
  }

}
