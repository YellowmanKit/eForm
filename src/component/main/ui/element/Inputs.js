import React from 'react';
import Component from 'src/component/Component';
import { View, TextInput, Picker, Slider } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Texts from './Texts';
import Buttons from './Buttons';

export default class Inputs extends Component {

  texts = new Texts(this.props);
  buttons = new Buttons(this.props);

  constructor(props){
    super(props);
    this.init(props);
  }

  slider(scale, value, min, max, onChange){
    const style = {...this.scale(scale[0], scale[1]), ...this.style.list}
    return(
      <View style={style}>
        {this.texts.small(value)}
        <Slider style={this.scale(scale[0], scale[1] / 2)} value={value} minimumValue={min} maximumValue={max}
        step={1} onValueChange={onChange}/>
      </View>)
  }

  string(scale, value, onChange, placeholder, multiline){
    const style = {...this.scale(scale[0], scale[1]), ...{
      textAlign: 'center',
      backgroundColor: this.color.lightGrey
    }}
    return(
      <TextInput style={style} defaultValue={value} onChangeText={onChange}
      maxLength={200} multiline={multiline} placeholder={placeholder}/>)
  }

  picker(scale, options, selected, onChange){
    const style = {...this.scale(scale[0], scale[1]), ...{
      backgroundColor: this.color.lightGrey
    }}
    return(
      <Picker style={style} selectedValue={selected} onValueChange={onChange}>
        {options.map((option, i)=>{ return <Picker.Item key={i} label={option} value={option} /> })}
      </Picker>
    )
  }

  date(scale, selected, onChange){
    const style = {...this.scale(scale[0], scale[1]), ...{
      backgroundColor: this.color.lightGrey
    }}
    return(
    <DatePicker
      style={style}
      date={selected}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: { position: 'absolute', left: 0, top: 4 },
        dateInput: { marginLeft: 36 }
      }}
      onDateChange={onChange}/>)
  }

  file(scale, type, value, onChange){
    return(
      this.buttons.button('', this.color.lightGrey, scale, async ()=>{
        const result = await this.getFile(type);
        if (!result.cancelled) { onChange(result); }
      },{}, value.uri? value.uri: null)
    )
  }

}
