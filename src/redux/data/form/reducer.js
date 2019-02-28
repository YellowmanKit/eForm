import * as data from '../data';

const reducer = (
  state = {
    forms: []
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'updateForms':
      return {...state, forms: data.update(state.forms, payload)};
    default:
      return state;
  }
}

export default reducer;
