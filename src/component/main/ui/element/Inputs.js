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

  string(scale){
    const style = {...this.scale(scale[0], scale[1]), ...{
      textAlign: 'center',
      backgroundColor: this.color.lightGrey
    }}
    return <TextInput style={style}/>
  }

  picker(scale, options, selected){
    const style = {...this.scale(scale[0], scale[1]), ...{
      backgroundColor: this.color.lightGrey
    }}
    return(
      <Picker style={style} selectedValue={selected}>
        {options.map((option, i)=>{ return <Picker.Item key={i} label={option} value={option} /> })}
      </Picker>
    )
  }

  date(scale){
    const style = {...this.scale(scale[0], scale[1]), ...{
      backgroundColor: this.color.lightGrey
    }}
    return(
    <DatePicker
      style={style}
      date={'2019-3-4'}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
      }}
      onDateChange={(date) => {}}/>)
  }

  file(scale, type){
    return(
      this.buttons.button('select file', this.color.lightGrey, scale, async ()=>{
        const result = await DocumentPicker.getDocumentAsync({ type });
        if (!result.cancelled) { }
      })
    )
  }

}
