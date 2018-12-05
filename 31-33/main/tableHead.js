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