import * as redux from '../../redux';
var to = redux.to;

export const set = (type, payload) =>{ return { type, payload } }
export const update = (payload) =>{ return { type: 'updateSubmits', payload } }

export const submit = (form, submit, location, jwt) => {
  console.log(form);
  console.log(submit);
  console.log(location);
  console.log(jwt);
  return async (dispatch) => {
    redux.loading(dispatch);

    var submission = { formid: form._id, location, results: createSubmission(form.definition.questions, submit)};
    //console.log(submission);

    var res, err;
    [err, res] = await to(fetch(redux.api('addSubmission'), redux.post({ submission_data: submission }, jwt) ));
    if(err){ redux.error(dispatch); return; }

    var result = await res.json();
    //console.log(result);

    if(result.errno === 0){
      redux.message(dispatch, 'Form submitted!');
    }else{ redux.error(dispatch); }

  }
}

const createSubmission = (questions, submit) => {
  var results = [];
  for(var i=0;i<questions.length;i++){
    var q = questions[i];
    var result = { qid: q.id, type: q.type_no, data: submit[q.id].value }
    results.splice(0,0,result);
  }
  return results;
}
