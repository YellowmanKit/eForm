import React from 'react';
import Page from '../Page';
import { View, ScrollView } from 'react-native';

export default class Form extends Page {

  constructor(props){
    super(props);
    this.init(props);
    this.state = { submit: this.getSubmit(this.store.form.usingForm._id)  }
  }

  render(){
    this.init(this.props);
    const form = this.store.form.usingForm;
    return (
      <View style={this.page()}>
        <ScrollView contentContainerStyle={this.style.list}>
          {this.gap(0.02)}
          {this.texts.general(form.title)}
          {this.sep()}
          {form.questions && form.questions.map((question, i)=>{
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
    const value = this.state.submit[q.qid]? this.state.submit[q.qid].value: '';
    switch (q.type) {
      case 'string':
        return this.inputs.string([0.67, 0.05], value, (text)=>{ this.onChange(q.qid, text); })
      case 'picker':
        return this.inputs.picker([0.2, 0.05], q.options, value, (value)=>{ this.onChange(q.qid, value); } )
      case 'date':
        return this.inputs.date([0.67, 0.065], value, (date)=>{ this.onChange(q.qid, date); })
      case 'text':
        return this.inputs.string([0.67, 0.15], value, (text)=>{ this.onChange(q.qid, text); })
      case 'image':
        return this.inputs.file([0.67, 0.05], 'image/*', value, (uri)=>{ this.onChange(q.qid, uri); } )
      default:
        return null;
    }
  }

  onChange(qid, value){
    this.state.submit[qid] = { value }
    this.action.submit.update([this.state.submit]);
  }


}
