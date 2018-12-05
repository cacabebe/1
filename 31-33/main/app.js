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


$("form").onclick = formClick;