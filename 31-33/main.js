function $(e) {return document.querySelector(e)};
function $s(e) {return document.querySelectorAll(e)};
function create(e) {return document.createElement(e)};

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

window.onload = function() {
  newCheckbox("region",[{
    name: "east",
    value: "华东"
  },{
    name: "sorth",
    value: "华南"
  },{
    name: "north",
    value: "华北"
  }]);

  newCheckbox("product",[{
    name: "phone",
    value: "手机"
  },{
    name: "taplap",
    value: "笔记本"
  },{
    name: "speaker",
    value: "智能音箱"
  }]);
  
}
var forma = $("form");
forma.onclick = function(ev) {  //点击checkbox
  var e = ev||window.event;
  if(e.target.type == "checkbox") {
   var fieId = e.target.parentNode.id;
    var childArray = $s("#" + fieId + " input[data-checkboxtype=child]");
    var checkedNum = $s("#" + fieId + " input[data-checkboxtype=child]:checked");
    if(e.target.dataCheckboxtype == "all") { //点击全选
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


function createTable() { //创建表格
  var table = $("table");
  var div = $("#table-wrapper");
  if(table != null){
    div.removeChild(table)
  }
  newTable();
}

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

function newTable() { //渲染新的表格
  var table = create("table");
  var div = $("#table-wrapper");
  div.appendChild(table);
  var regionChecked = $s("#region input[data-checkboxtype=child]:checked");
  var productChecked = $s("#product input[data-checkboxtype=child]:checked");
  tableHead(regionChecked,productChecked);
  var data = val(regionChecked,productChecked);
  if(productChecked.length > 1&&regionChecked.length == 1) {
    tableData(regionChecked,productChecked,data);
  } else {
    tableData(productChecked,regionChecked,data);
  }
}

function tableData(before,after,data) { //表格主体
  var table = $("table");
  for(var k = 0; k < before.length; k++) {
    var trS = [];
    for(var i = 0; i < after.length; i++) { 
      var tr = create("tr");
      trS.push(tr);
      table.appendChild(tr);
      var th2 = create("th");
      tr.appendChild(th2);
      th2.innerHTML = after[i].value;
      for(var j = 0; j < 11; j++) {
        var td = create("td");
        tr.appendChild(td);
        td.innerHTML = data[i][j];
      }
    }
    var th0 = trS[0].querySelector("th");
    var th1 = create("th");
    th0.parentNode.insertBefore(th1,th0)
    th1.innerHTML = before[k].value;
    th1.rowSpan = after.length;
  }
}

function tableHead(region,product) { //表头
  var table = $("table");
  var tr = create("tr");
  table.appendChild(tr);
  var th1 = create("th");
  tr.appendChild(th1);
  var th2 = create("th");
  tr.appendChild(th2);
  if(product.length > 1&&region.length == 1) {
    th1.innerHTML = "地区";
    th2.innerHTML = "商品";
  } else {
    th1.innerHTML = "商品";
    th2.innerHTML = "地区";
  } 
  for(var i = 0; i < 11; i++) {
    var td = create("td");
    tr.appendChild(td);
    td.innerHTML = i + 1 + "月";
  }
}