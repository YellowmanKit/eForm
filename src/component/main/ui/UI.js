import React from 'react';
import { View } from 'react-native';
import Component from 'src/component/Component';
import Buttons from './element/Buttons';
import Texts from './element/Texts';

class UI extends Component {

  buttons = new Buttons(this.props);
  texts = new Texts(this.props);

  gap(height){ return <View style={{width: this.size[0], height: this.size[1] * height}}/> }

}
export default UI;
