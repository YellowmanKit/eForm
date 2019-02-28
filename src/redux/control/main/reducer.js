const reducer = (
  state = {
    status: 'init',
    language: 'english',
    version: 'v1.0.0'
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'status':
      return {...state, status: payload};
    default:
      return state;
  }
}

export default reducer;
