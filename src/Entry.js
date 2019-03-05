import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from "react-redux";
import Main from './component/main/Main';

import * as content from './redux/control/content/action';
import * as main from './redux/control/main/action';
import * as ui from './redux/control/ui/action';

import * as form from './redux/data/form/action';
import * as submit from './redux/data/submit/action';

class Entry extends React.Component {

  render() {
    return(
    <Main app={{
      store: this.props.store,
      action: this.props.action
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
