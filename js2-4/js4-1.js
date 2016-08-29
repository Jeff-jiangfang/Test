/**
 * Created by 方 on 2016/8/20.
 */
var data = JSON.parse(localStorage.data);
console.log(data);
$(function(){
    var i,if_this,about_name,dead_name;
    if (data[1]%2 == 1){
        $("h2").text("杀手杀人");
        $("p:first").append("杀手请睁眼,杀手请选择要杀的对象");
        $("p:last").append("点击下方玩家头像，对被杀的玩家进行标记");
    } else {
        $("h2").text("全员公投");
        $("p:first").append("发言讨论结束，请大家投票");
        $("p:last").append("点击得票数最多人的头像");
    }
    for(i=0;i<data[0].length;i++){
        $(".main-button").append("<div class='box'><span>"+data[0][i]+"</span><p>"+(i+1)+"号</p></div>");
    }
    $(".box:contains('死亡')").addClass("dead");
    $(".box").click(function(){
        if_this=$(this).children("span").html();
        if(data[1]%2 != 1||if_this == "平民"){
            $(".box:contains('平民'),.box:contains('杀手')").removeClass("dead");
            $(this).addClass("dead");
            dead_name=parseInt($(this).children("p").html());
            console.log("标记了"+dead_name+"号");
        }
    });
    $("button").html(data[1]%2==1?"确定":"投票").click(function(){
        if(dead_name != null){
            data[1]%2 == 1? about_name="杀手杀死":about_name="公投处决";
            data[2]+="<p>"+dead_name+"号玩家被"+about_name+",真实身份是"+data[0][(dead_name-1)]+"</p>";
            data[0][(dead_name-1)]="死亡";
            data[1]=data[1]+1;
            location.href="js4-2.html";
            localStorage.data=JSON.stringify(data);
        }
        else {
            alert("没有标记目标");
        }
    });
});