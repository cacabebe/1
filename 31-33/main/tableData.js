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