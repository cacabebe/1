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