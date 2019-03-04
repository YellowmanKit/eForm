import * as data from '../data';

const reducer = (
  state = {
    forms: [],
    usingForm: {}
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'useForm':
      return {...state, usingForm: payload};
    case 'updateForms':
      return {...state, forms: data.update(state.forms, payload, false, true)};
    case 'removeForm':
      return {...state, forms: data.remove(state.forms, payload)};
    default:
      return state;
  }
}

export default reducer;
