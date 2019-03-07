export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateSubmits', payload } }

export const submit = (form, submit) => {
  console.log(submit);
  return async (dispatch) => {

    dispatch({type: 'status', payload: 'ready' });
  }
}
