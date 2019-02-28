import React from 'react';
class Component extends React.Component {

  init(props){
    this.app = props.app;
    this.action = this.app.action;
    this.store = this.app.store;
    this.main = this.store.main;
    this.content = this.store.content;
    this.size = this.store.ui.size;
    this.style = this.store.ui.style;
    this.color = this.store.ui.color;
  }

  scale(width, height){ return { width: this.size[0] * width, height: this.size[1] * height } }

}
export default Component;
