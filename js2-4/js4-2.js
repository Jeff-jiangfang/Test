var data = JSON.parse(localStorage.data);
console.log(data);
$(function(){

    $("#diary").html(data[2]);
    $("button").click(function(){
        if($.inArray("杀手",data[0]) == -1){
            data[3] = 0;
            localStorage.data = JSON.stringify(data);
            location.href = "js4-3.html";
        }
        else if($.inArray("平民",data[0]) ==-1){
            data[3] = 1;
            localStorage.data = JSON.stringify(data);
            location.href = "js4-3.html";
        }
        else {
            localStorage.data = JSON.stringify(data);
            console.log(data[1]);
            data[1]%2 == 0?location.href = "js4-1.html":location.href = "js3-2.html";
        }
    });
});


