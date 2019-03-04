export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateForms', payload } }
export const remove = (payload) =>{ return { type: 'removeForm', payload } }
export const useForm = (payload) =>{ return { type: 'useForm', payload } }

export const fetchForm = (url) => {
  console.log(url);
  return async dispatch =>{
    dispatch({type: 'updateForms', payload: [{_id: url, title: url}] });
    dispatch({type: 'status', payload: 'ready' });
  }
}
