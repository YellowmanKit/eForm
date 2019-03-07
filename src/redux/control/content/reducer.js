const reducer = (
  state = {
    page: 'home',
    modal: { status: 'off', message: '', onConfirm: ()=>{} }
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'modal':
      return {...state, modal: payload};
    case 'page':
      return {...state, page: payload};
    default:
      return state;
  }
}

export default reducer;
