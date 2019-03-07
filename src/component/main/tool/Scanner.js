import React from 'react';
import UI from 'src/component/main/ui/UI';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends UI {
  state = { permission: null }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permission: status === 'granted' });
  }

  render() {
    this.init(this.props);

    return (
      <View style={{...this.scale(1,1), ...{ backgroundColor: 'black' }}}>
        {this.state.permission &&
        <BarCodeScanner
        onBarCodeScanned={this.scanned}
        style={this.scale(1,1)}/>}
        {this.buttons.absolute('<', 'transparent', [0.15,0.15], ()=>{ this.action.main.set('status','ready'); })}
      </View>
    );
  }

  scanned = ({ type, data }) => { this.action.main.set('status','ready'); this.action.form.fetchForm(data); }

}
