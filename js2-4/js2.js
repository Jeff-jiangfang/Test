var log_num= 0;
var player_num;  //参加总人数变量
function allot (){  //随机函数
    var summary= [],i;  //身份变量
    log_num++;
    var kill_num= Math.floor(player_num/4);   //分配杀手人数

    for (i=0;i<player_num;i++){
        summary[i]= "平民";
    }
    for (i=0;i<kill_num;i++){
        summary[i]= "杀手";
    }
    summary.sort(function(){      //随机排序
        return 0.5-Math.random()
    });
    var num_1=document.getElementsByClassName("num-1");
    var num_2=document.getElementsByClassName("num-2");
    num_1[0].innerHTML=player_num-kill_num;
    num_2[0].innerHTML=kill_num;
    var texts=document.getElementById("plan-right");
    texts.innerHTML="";
    for(i=0;i<player_num;i++){
        texts.innerHTML +="<li>"+(i+1)+"号是"+summary[i]+"</li>";  //文本循环
    }
    console.log("第"+log_num+"次分配"+"+总人数是"+player_num+",设定杀手人数是"+kill_num);  //打印
    localStorage.arr=JSON.stringify(summary);
    console.log("已存储的数据："+summary);
}

function numIf(num){   //限定人数范围
    if(parseInt(num)>=6&&parseInt(num)<=18){
        return 1;
    }
    else{
        return 0;
    }
}

function actionIf(){  
    player_num=document.getElementById("num").value;
    if(numIf(player_num)){
        allot();
    }
    else {
        alert("请输入正确的数据");
    }
}

function action(){
    if (numIf(player_num)){
        location.href="../js2/js3.html";
    }
    else {
        alert("请设定正确人数");
    }
}