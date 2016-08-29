/**
 * Created by 方 on 2016/8/10.
 */
var arr=JSON.parse(localStorage.arr);  //解析数组
console.log("已经存储的数"+arr);  //打印
var i= 0,j=0;  
function btn(){
    var list_num= document.getElementsByClassName("list")[0];
    var show_img= document.getElementsByClassName("card")[0].getElementsByTagName("img")[0];
    var id_text= document.getElementsByTagName("p")[0];
    var btn= document.getElementsByTagName("button")[0];
    if (i==0||j==0&&(i+1)!=arr.length){
        show_img.src="images/photo2.png";
        id_text.innerHTML=(i+1)+"号是"+arr[i];
        btn.innerHTML="隐藏并传递给"+(i+2)+"号";
        i++;
        j++;
    }
    else if(j==0){
        show_img.src="images/photo2.png";
        id_text.innerHTML=(i+1)+"号是"+arr[i];
        btn.innerHTML="法官日记";
        j--;
    }
    else if(j==-1){
        location.href="../js2/js3-1.html";
    }
    else{
        show_img.src="images/photo1.png";
        list_num.innerHTML=i+1;
        id_text.innerHTML="";
        btn.innerHTML="查看"+(i+1)+"号身份";
        j--;
    }
}
