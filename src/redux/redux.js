var redux = {
  to: (promise) => { return promise.then(data => { return [null, data]; }).catch(err => [err]); }
}

module.exports = redux;
