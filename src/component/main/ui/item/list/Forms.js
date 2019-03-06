import React from 'react';
import { ScrollView } from 'react-native';

import List from './List';
import Form from './row/Form';

export default class Forms extends List {

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
