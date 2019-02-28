import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Entry from './src/Entry';

export default class App extends React.Component {
  render(){ return <Provider store={store}><Entry /></Provider> }
}
