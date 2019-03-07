const reducer = (
  state = {
    status: 'init',
    language: 'english',
    user: { id: '', pw: '', jwt: '' },
    version: 'v1.0.0'
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'user':
      return {...state, user: payload};
    case 'status':
      return {...state, status: payload};
    default:
      return state;
  }
}

export default reducer;
