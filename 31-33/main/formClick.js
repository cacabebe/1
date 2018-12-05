function formClick(ev) {  //点击checkbox
  var e = ev||window.event;
  if(e.target.type == "checkbox") { 
   var fieId = e.target.parentNode.id; 
    var childArray = $s("#" + fieId + " input[data-checkboxtype=child]");
    var checkedNum = $s("#" + fieId + " input[data-checkboxtype=child]:checked");
    if(e.target.dataset.checkboxtype == "all") { //点击全选 
      if(e.target.checked == true){ //全选为true       
        for(var k = 0; k < childArray.length; k++) {
          childArray[k].checked = true;
        }
      } else if(e.target.checked == false) { //全选为false          
        if(checkedNum.length == childArray.length) {
          e.target.checked = true;
        }
      }
    } else { //点击子选项       
      if(checkedNum.length == 0) {
        e.target.checked = true;
      }
      var checkAll = $("#" + fieId + " input[data-checkboxtype=all]");
      if(checkedNum.length == childArray.length) {        
        checkAll.checked = true;
      } else {
        checkAll.checked = false;
      }
    }
  }
  createTable();
}

m000 2675 5266