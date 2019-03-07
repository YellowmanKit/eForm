import * as redux from '../../redux';
var to = redux.to;

export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateForms', payload } }
export const remove = (payload) =>{ return { type: 'removeForm', payload } }
export const useForm = (payload) =>{ return { type: 'useForm', payload } }

export const fetchForm = (url) => {
  //console.log(url);
  return async (dispatch) => {
    var res, err;
    redux.loading(dispatch);

    [err, res] = await to(fetch(url));
    if(err){ redux.error(dispatch); return; }

    var result = await res.json();
    console.log(result);
    const form = result.data;
    form._id = result.form_name;

    redux.close(dispatch);
    dispatch({type: 'updateForms', payload: [form] });
  }

}
