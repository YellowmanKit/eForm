export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateSubmits', payload } }

export const submit = (submit) => {
  console.log(submit);
  return async dispatch =>{
    dispatch({type: 'updateSubmits', payload: [submit] });
    dispatch({type: 'status', payload: 'ready' });
  }
}
