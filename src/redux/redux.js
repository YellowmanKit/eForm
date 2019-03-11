var redux = {
  rename: (json, oldName, newName) => { json[newName] = json[oldName]; delete json[oldName]; },
  to: (promise) => { return promise.then(data => { return [null, data]; }).catch(err => [err]); },
  api: (type)=>{ return 'https://builder.asform.io/api/' + type },
  post: (body, jwt)=>{ return {
    method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', jwt },
    body: JSON.stringify(body) } },

  loading: (dispatch) => { dispatch({type: 'modal', payload: { status: 'loading', message: 'Loading...' } }); },
  close: (dispatch) => { dispatch({type: 'modal', payload: { status: 'off' } }); },
  message: (dispatch, message) => { dispatch({type: 'modal', payload: { status: 'message', message } }); },
  error: (dispatch) => { dispatch({type: 'modal', payload: { status: 'message', message: 'Action failed! Please try again!' } }); },
}

module.exports = redux;
