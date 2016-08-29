var data = JSON.parse(localStorage.data);
var days = Math.ceil(data[1]/2);
for (var i=0;i<days;i++){
    var day_name = ["一","二","三","四","五","六","七","八","九"];
    var box =
        "<div class='container'>"+
            "<div class='content-top'>第"+day_name[0]+"天<img src='images/down.png'>"+
            "</div>"+
            "<div class='content-bottom'>"+
                "<img src='images/moon.png'>"+
                "<img src='images/sun.png'>"+
                "<ul>"+
                    "<li><span></span><span>杀手杀人</span></li>"+
                    "<li><span></span><span>警察验人</span></li>"+
                    "<li><span></span><span>狙击狙人</span></li>"+
                    "<li><span></span><span>医生救人</span></li>"+
                    "<li><span></span><span>亡灵发表遗言</span></li>"+
                    "<li><span></span><span>玩家依次发言</span></li>"+
                    "<li><span></span><span>投票</span></li>"+
                "</ul>"+
            "</div>"+
        "</div>";
    $("main").append(box);
}

$(function(){
    $("img[src*='down']").click(function(){
        $(this).parent().next().toggle();
    });
    $(function(){
        $("li:contains('杀手杀人')").click(function(){
            location.href = "js4-1.html";
        });
        $("ul:last").css("display","block");
    })
});


















