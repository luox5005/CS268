function $(id){return document.getElementById(id);}
var image = $("image").getElementsByTagName("li");
var list = $("list").getElementsByTagName("li");
var round_r = $("arrow_r");
var round_l = $("arrow_l");
var index = 0;
for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].onclick = function(){
        for(var j = 0;j<list.length;j++){
            list[j].className="";
            image[j].className="";
        }
        this.className="list_show";
        image[this.index].className="image_show";
    }
}
round_r.onclick = function(){
    move(false);
}
round_l.onclick = function(){
    move(true);
}
timer = null;
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        timer = setInterval(autoPlay, 3000);
        function autoPlay() {
            index++;
            if (index >= list.length) {
                index = 0;
            }
            move(false);
        }
function move(boolean){
    for(var i = 0;i<list.length;i++){
        if(list[i].className=="list_show"){
            var index = i;
            break;
        }
    }
    boolean ?(index == 0? index= list.length-1:index--):(index == list.length-1? index= 0:index++);
    for(var j = 0;j<list.length;j++){
        list[j].className="";
        image[j].className="";
    }
    list[index].className="list_show";
    image[index].className="image_show";
}