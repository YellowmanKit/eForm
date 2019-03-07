import React from 'react';
import Page from '../Page';
import { View, ScrollView } from 'react-native';
import CheckBoxes from 'src/component/main/ui/item/list/CheckBoxes';
import Map from 'src/component/main/ui/item/Map';

export default class Form extends Page {

  constructor(props){
    super(props);
    this.init(props);
    this.state = { submit: this.getSubmit(this.store.form.usingForm._id)  }
  }

  render(){
    this.init(this.props);
    const form = this.store.form.usingForm;
    //console.log(form);
    return (
      <View style={this.page()}>
        <ScrollView contentContainerStyle={this.style.list}>
          {this.gap(0.02)}
          {this.texts.general(form.title)}
          {this.sep()}
          {form.body && form.body.map((q, i)=>{ return this.question(q); })}
          {this.gap(0.25)}
        </ScrollView>
      </View>
    )
  }

  question(q){
    //console.log(q);
    return(
      <View key={q.id} style={this.style.list}>
        {this.texts.small(q.caption)}
        {this.gap(0.01)}
        {this.field(q)}
        {this.gap(0.01)}
        {this.sep()}
      </View>
    )
  }

  field(q){
    const value = this.state.submit[q.id]? this.state.submit[q.id].value: '';
    const stringTypes = ['short_text','number','phoneNumber','email','password'];
    if(stringTypes.includes(q.type)){
      return this.inputs.string([0.67, 0.05], value, (value)=>{ this.onChange(q.id, value); }, q.placeholder); }
    switch (q.type) {
      case 'long_text':
        return this.inputs.string([0.67, 0.15], value, (value)=>{ this.onChange(q.id, value); }, q.placeholder, true)
      case 'radio':
        return this.inputs.picker([0.2, 0.05], q.choices, value, (value)=>{ this.onChange(q.id, value); } )
      case 'picker':
        return this.inputs.picker([0.2, 0.05], q.columns, value, (value)=>{ this.onChange(q.id, value); } )
      case 'date':
        return this.inputs.date([0.67, 0.065], value, (date)=>{ this.onChange(q.id, date); })
      case 'display_image':
        return this.buttons.button('', this.color.lightGrey, [0.67, 0.33], ()=>{}, {}, q.url)
      case 'map':
        return <Map app={this.app} markers={q.markers} caption={q.marker_caption}/>
      case 'upload':
        return this.inputs.file([0.67, 0.33], 'image/*', value, (uri)=>{ this.onChange(q.id, uri); } )
      case 'slider':
        return this.inputs.slider([0.67, 0.075], value? value: q.minimum, q.minimum, q.maximum,
          (value)=>{ this.onChange(q.id, value); });
      case 'checkbox':
        return(
        <CheckBoxes app={this.app} choices={q.choices} value={value? value: q.default_value}
        onChange={(value)=>{ this.onChange(q.id, value); }}/>)
      default:
        return null;
    }
  }

  onChange(id, value){
    this.state.submit[id] = { value }
    this.action.submit.update([this.state.submit]);
  }


}
