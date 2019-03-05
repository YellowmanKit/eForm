import React from 'react';
import Component from 'src/component/Component';
import { TextInput, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { DocumentPicker } from 'expo';

import Buttons from './Buttons';

export default class Inputs extends Component {

  buttons = new Buttons(this.props);

  constructor(props){
    super(props);
    this.init(props);
  }

  string(scale, value, onChange){
    const style = {...this.scale(scale[0], scale[1]), ...{
      textAlign: 'center',
      backgroundColor: this.color.lightGrey
    }}
    return <TextInput style={style} defaultValue={value} onChangeText={onChange}/>
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

  file(scale, type, selected, onChange){
    return(
      this.buttons.button(selected? selected.name: 'select file', this.color.lightGrey, scale, async ()=>{
        const result = await DocumentPicker.getDocumentAsync({ type });
        if (!result.cancelled) { onChange(result); }
      })
    )
  }

}
