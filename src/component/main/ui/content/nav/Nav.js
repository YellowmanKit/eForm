import React from 'react';
import UI from 'src/component/main/ui/UI';
import { View } from 'react-native';

class Nav extends UI {

  constructor(props){
    super(props);
    this.init(this.props);
    this.state = {}
  }

  componentDidMount(){ this.nav(this.content.page); }
  componentWillReceiveProps(newProps){ this.init(newProps); this.nav(this.content.page); }

  nav(page){
    var title = '';
    switch (page) {
      case 'home':
        title = 'eForm'
        break;
      default:
        break;
    }
    this.setState({ title });
  }

  render(){
    this.init(this.props);
    const style = {...this.scale(1,0.1), ...this.style.nav, ...{
      backgroundColor: 'green'
    }}
    return (
      <View style={style}>
        {this.texts.text(this.state.title,'white')}
      </View>
    )
  }

}

export default Nav;
