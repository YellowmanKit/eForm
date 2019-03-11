import React from 'react';
export default class Component extends React.Component {

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

  scale(width, height){
    var style = {};
    if(width){ style = { width: this.size[0] * width } }
    if(height){ style = { ...style, ...{ height: this.size[1] * height } } }
    return style;
  }

  getSubmitByFormId(formId){
    const submits = this.store.submit.submits;
    for(var i=0;i<submits.length;i++){
      if(submits[i].form === formId){ return submits[i]; }
    }
    const newSubmit = { _id: formId, form: formId }

    const form = this.getItem(this.store.form.forms, formId);
    //console.log(form);
    const questions = form.definition.questions;
    for(var i=0;i<questions.length;i++){
      var value = '';
      if(questions[i].type === 'slider'){ value = questions[i].minimum; }
      if(questions[i].type === 'checkbox'){ value = questions[i].default_value; }
      newSubmit[questions[i].id] = { value };
    }

    this.action.submit.update([newSubmit]);
    //console.log(newSubmit);
    return newSubmit;
  }

  getItem(data, id){ for(var i=0;i<data.length;i++){ if(data[i]._id === id){ return data[i]; } } return null; }

}
