function val(regionChecked,productChecked) { //获取数据
  var data = [];
  for(var i = 0; i < sourceData.length; i++) {
    for(var j = 0; j < regionChecked.length; j++) {
      for(var k = 0; k < productChecked.length; k++) {
        if(sourceData[i].region == regionChecked[j].value&&sourceData[i].product == productChecked[k].value) {
          data.push(sourceData[i].sale);
        }  
      }
    }
  }
  return data;
}