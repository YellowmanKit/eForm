const reducer = (
  state = {
    size: [0, 0],
    style: {
      nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      list: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overFlow: 'auto'
      }
    },
    color: {
      lightGrey: '#e8e8e8'
    }
  }, action)=>{
  const payload = action.payload;
  switch (action.type) {
    case 'size':
      return {...state, size: payload };
    default:
      return state;
  }
}

export default reducer;
