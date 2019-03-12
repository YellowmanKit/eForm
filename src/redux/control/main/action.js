import * as redux from '../../redux';
var to = redux.to;

export const set = (type, payload) =>{ return { type, payload } }

export const login = (id, pw) => {
  return async (dispatch) => {
    //redux.error(dispatch); return;
    if(!id || !pw){ redux.message(dispatch, 'Please enter user id and password correctly!'); return; }
    //id:Chung
    //pw:Jeffrey

    var res, err;
    redux.loading(dispatch);

    [err, res] = await to(fetch(redux.api('login'), redux.post({ username: id, password: pw })) );
    if(err){ redux.error(dispatch); return; }

    const result = JSON.parse(res._bodyText);
    //console.log(result);

    if(result.errno === 0){
      redux.close(dispatch);
      dispatch({ type: 'user', payload: { id, pw, jwt: result.jwt }})
      dispatch({ type: 'status', payload: 'ready' });
    }else{ redux.message(dispatch, 'Login failed!'); }
  }

}
