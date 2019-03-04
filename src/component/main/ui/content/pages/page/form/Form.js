import React from 'react';
import Page from '../Page';
import { View, ScrollView } from 'react-native';

export default class Form extends Page {

  render(){
    this.init(this.props);
    const form = this.store.form.usingForm;
    return (
      <View style={this.page()}>
        <ScrollView contentContainerStyle={this.style.list}>
          {this.gap(0.02)}
          {this.texts.general(form.title)}
          {this.sep()}
          {form.questions.map((question, i)=>{
            return this.question(question);
          })}
        </ScrollView>
      </View>
    )
  }

  question(q){
    return(
      <View key={q.qid} style={this.style.list}>
        {this.texts.general(q.name)}
        {this.field(q)}
        {this.gap(0.01)}
        {this.sep()}
      </View>
    )
  }

  field(q){
    switch (q.type) {
      case 'string':
        return this.inputs.string([0.67, 0.05])
      case 'picker':
        return this.inputs.picker([0.2, 0.05], q.options, q.options[0])
      case 'date':
        return this.inputs.date([0.67, 0.065])
      case 'text':
        return this.inputs.string([0.67, 0.15])
      case 'image':
        return this.inputs.file([0.67, 0.05], 'image/*')
      default:
        return null;
    }
  }

}
