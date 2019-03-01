import React from 'react';
import UI from 'src/component/main/ui/UI';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends UI {
  state = { hasCameraPermission: null }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    this.init(this.props);
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) { return <Text>Requesting for camera permission</Text>; }
    if (hasCameraPermission === false) { return <Text>No access to camera</Text>; }

    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={StyleSheet.absoluteFill}/>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => { this.action.form.fetchForm(data); }

}
