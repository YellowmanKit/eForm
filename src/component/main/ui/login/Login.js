import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';
import Modal from '../extend/modal/Modal';

export default class Login extends UI {

  constructor(props){
    super(props);
    this.init(props);
    this.state = { id:'', pw:'' }
    this.loadUser();
  }

  async loadUser(){
    const id = await this.app.load('id');
    const pw = await this.app.load('pw');
    if(id && pw){ this.setState({ id, pw }); }
  }

  render() {
    this.init(this.props);
    const style = {...this.scale(1,1), ...this.style.list, ...{ backgroundColor: 'green' }}
    return (
      <View style={style}>
        {this.gap(0.2)}
        {this.texts.text('eForm', [0.5,null], 0.075, 'white', 'bold', 'center')}
        {this.gap(0.02)}
        {this.inputs.string([0.67,0.05], this.state.id, (value)=>{ this.setState({id: value})}, 'ID')}
        {this.gap(0.01)}
        {this.inputs.string([0.67,0.05], this.state.pw, (value)=>{ this.setState({pw: value})}, 'PASSWORD')}
        {this.gap(0.02)}
        {this.buttons.button('LOGIN', 'red', [0.67, 0.05], ()=>{ this.action.main.login(this.state.id, this.state.pw); })}
        <Modal app={this.app}/>
      </View>
    )
  }

}
