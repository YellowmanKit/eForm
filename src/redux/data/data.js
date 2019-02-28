var data = {
  update: function (original, newItems, idOnly, append){
    if(!newItems || newItems.length === 0){ return original; }

    var result = original.slice(0);
    if(result.length === 0){ result = [newItems[0]]; }

    for(var i=0;i<newItems.length;i++){
      if(!newItems[i]){ continue; }
      for(var j=0;j<result.length;j++){
        if(!idOnly && (result[j]._id === newItems[i]._id)){
          result[j] = {...result[j], ...newItems[i]};
          break;
        }
        if(idOnly && (result[j] === newItems[i])){
          result[j] = newItems[i];
          break;
        }
        if(j === result.length - 1){
          if(append){ result.splice(result.length,0,newItems[i]);
          }else{ result.splice(0,0,newItems[i]); }
        }
      }
    }
    console.log(result);
    return result;
  },
  getIndex: function (data, item){ for(var i=0;i<data.length;i++){ if(data[i]._id === item._id){ return i; } } }
}

module.exports = data;
