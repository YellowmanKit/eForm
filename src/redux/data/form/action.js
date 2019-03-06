import * as redux from '../../redux';
var to = redux.to;

export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateForms', payload } }
export const remove = (payload) =>{ return { type: 'removeForm', payload } }
export const useForm = (payload) =>{ return { type: 'useForm', payload } }

export const fetchForm = (url) => {
  //console.log(url);
  return async dispatch =>{
    var res, err;
    [err, res] = await to(fetch(url));
    if(err){ console.log(err.message); return; }

    var form = await res.json();
    console.log(form);
    form._id = form._id.$oid;

    dispatch({type: 'updateForms', payload: [form] });
    dispatch({type: 'status', payload: 'ready' });
  }

}
