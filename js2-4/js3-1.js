/**
 * Created by 方 on 2016/8/12.
 */
var arr=JSON.parse(localStorage.arr);
console.log("接收数组数据:"+arr);
var days=1;
var diary=[];
var win=1;
var data=[arr,days,diary,win];  //创建 数组，日期，日记，获胜者
localStorage.data=JSON.stringify(data);  //序列化数组
console.log(data);
$(function(){
    for (var i= 0;i<arr.length;i++){
        $("main").append("<div><p>"+(i+1)+"号</p></div>")
    }
    $("button").click(function(){
        location.href="js3-2.html"
    })
});