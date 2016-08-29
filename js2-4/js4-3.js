/**
 * Created by 方 on 2016/8/25.
 */
var data = JSON.parse(localStorage.data);
console.log(data);
$(function(){
    if(data[3] ==1){
        $(".win>span").text("杀手获胜");
        $("p:first").text("太棒了！你知道么？在捉鬼游戏中只有20%的杀手取得游戏最终的胜利哦！")
    }
    else {
        $(".win>span").text("平民获胜");
        $("p:first").text("本轮游戏共抓出杀手1人,共经历了2个白天,在杀人游戏中击败了67%的玩家！")
    }
    $(".foot-again").click(function () {
        location.href = "js2.html";
    });
});





