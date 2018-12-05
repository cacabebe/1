function newCheckbox(fieId,array) { //生成checkbox
  var fieledset = $("#" + fieId);
  var checkAll = create("input"); //创建全选
  checkAll.type = "checkbox";
  checkAll.name = fieId + "All"
  checkAll.setAttribute("data-checkboxtype","all"); 
  
  var labelAll = create("label");
  labelAll.innerHTML = "全选"
  labelAll.setAttribute("for",checkAll.name);
  for(var i = 0; i < array.length; i++) {
    var checkChild = create("input"); //创建选项
    checkChild.type = "checkbox";
    checkChild.name = array[i].name;
    checkChild.value = array[i].value;
    checkChild.setAttribute("data-checkboxtype","child");
    if(checkChild.value == "华东"||checkChild.value == "手机") {
      checkChild.checked = true;
    }
    
    var labelChild = create("label"); //创建选项解释
    labelChild.innerHTML = checkChild.value;
    labelChild.setAttribute("for",checkChild.name);
    
    fieledset.appendChild(checkChild);
    fieledset.appendChild(labelChild);
  }
  fieledset.appendChild(checkAll);
  fieledset.appendChild(labelAll);
  createTable();
}

