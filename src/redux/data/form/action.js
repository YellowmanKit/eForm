import * as redux from '../../redux';
var to = redux.to;

export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateForms', payload } }
export const remove = (payload) =>{ return { type: 'removeForm', payload } }
export const useForm = (payload) =>{ return { type: 'useForm', payload } }
//https://builder.asform.io/api/getForm?passcode=0fjw3s&&code=D30EEA3B-3993-11E9-98D7-00163E01BCC6
//https://builder.asform.io/api/getForm?passcode=0fjw3s&&code=3CC6A411-3EED-11E9-81C3-00163E44A7A2
export const fetchForm = (url) => {
  console.log(url);
  return async (dispatch) => {
    redux.loading(dispatch);

    var res, err;
    [err, res] = await to(fetch(url));
    if(err){ redux.error(dispatch); return; }

    var result = await res.json();
    console.log(result);
    var form = result.data;

    redux.rename(form, 'id', '_id');
    redux.rename(form, 'form_definition', 'definition');
    redux.rename(form, 'form_name', 'name');
    redux.rename(form['definition'], 'body', 'questions');

    //console.log(form);
    redux.close(dispatch);
    dispatch({type: 'updateForms', payload: [form] });
  }

}
