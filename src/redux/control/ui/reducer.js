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
        overflow: 'scroll'
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey'
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
