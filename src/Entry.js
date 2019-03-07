import React from 'react';
import { AsyncStorage } from 'react-native';
import { bindActionCreators} from 'redux';
import { connect } from "react-redux";
import Main from './component/main/Main';

import * as content from './redux/control/content/action';
import * as main from './redux/control/main/action';
import * as ui from './redux/control/ui/action';

import * as form from './redux/data/form/action';
import * as submit from './redux/data/submit/action';

class Entry extends React.Component {

  save(key, value){ AsyncStorage.setItem(key, value); }
  async load(key){ const value = await AsyncStorage.getItem(key); return value; }

  render() {
    //AsyncStorage.clear();
    return(
    <Main app={{
      store: this.props.store,
      action: this.props.action,
      save: this.save.bind(this),
      load: this.load.bind(this)
    }}/>)
  }

}

function mapStateToProps(state, props) { return { store: state } }
function Action(action, dispatch){ return bindActionCreators(action, dispatch) }
function mapDispatchToProps(dispatch){
  return { action: {
      content: Action(content, dispatch),
      main: Action(main, dispatch),
      ui: Action(ui, dispatch),

      form: Action(form, dispatch),
      submit: Action(submit, dispatch)
  }}
}

export default connect(mapStateToProps,mapDispatchToProps)(Entry);
