import React from 'react';
import { View } from 'react-native';
import Extend from '../Extend';

export default class Modal extends Extend {

  render(){
    this.init(this.props);
    const modal = this.store.content.modal;
    const hide = modal.status === 'off';
    return (
      <View style={this.extend(hide)} pointerEvents={hide? 'none': 'auto'}>
        {this.board(modal)}
      </View>
    )
  }

  board(modal){
    const style = {...this.style.list, ...{ backgroundColor: 'rgba(255,255,255,0.75)', padding: this.size[0] * 0.04 }}
    return (
      <View style={style}>
        {this.texts.general(modal.message)}
        {modal.status !== 'loading' && this.gap(0.02)}
        {modal.status !== 'loading' && this.buttonArea(modal)}
      </View>
    )
  }

  buttonArea(modal){
    const style = {...this.style.row, ...{ justifyContent: 'space-between' }};
    const confirm = modal.status === 'confirm';
    const buttonColors = ['green','blue'];
    return (
      <View style={style}>
        {confirm && modal.buttons.map((button, i)=>{
          return this.button(button.caption, buttonColors[i], ()=>{ this.action.content.modal('off'); button.onPress(); } );
        })}
        {this.button(confirm?'CANCEL':'CLOSE','red',()=>{ this.action.content.modal('off'); })}
      </View>
    )
  }

  button(text, color, onPress){ return this.buttons.button(text, color, [0.225,0.035], onPress, { margin: this.size[0] * 0.02 }) }

}
