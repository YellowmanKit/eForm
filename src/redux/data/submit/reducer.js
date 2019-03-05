import * as data from '../data';

const reducer = (
  state = {
    submits: []
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'updateSubmits':
      return {...state, submits: data.update(state.submits, payload)};
    default:
      return state;
  }
}

export default reducer;
