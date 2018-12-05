function createTable() { //创建表格
  var table = $("table");
  var div = $("#table-wrapper");
  if(table != null){
    div.removeChild(table)
  }
  newTable();
}