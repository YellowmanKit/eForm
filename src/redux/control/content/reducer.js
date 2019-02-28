const reducer = (
  state = {
    page: 'home'
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'page':
      return {...state, page: payload};
    default:
      return state;
  }
}

export default reducer;
