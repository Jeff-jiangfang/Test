/**
 * Created by 方 on 2016/8/2.
 */

var lastNum=0;
function changeColor(){
    var smallBox=document.getElementsByClassName("small");//盒子数组
    smallBox[lastNum].style.backgroundColor="#e8830d";//'设置变色区域的初始颜色
    var smallColorName=["红色","绿色","蓝色"];//颜色名称数组
    var smallColor=["red","green","blue"];//颜色数组
    var smallColorNum=Math.floor((Math.random()*3));//取颜色的随机数
    var smallBoxNum=Math.floor((Math.random()*9));//取盒子的随机数
    smallBox[smallBoxNum].style.backgroundColor=smallColor[smallColorNum];//取随机盒子随机一个颜色
    lastNum=smallBoxNum;//取变色区域随机位置
    console.log("盒子"+smallBoxNum+"变成了"+smallColorName[smallColorNum]);//打印输出
}
setInterval("changeColor()",1000);//每隔一秒调用一次函数
