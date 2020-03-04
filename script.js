 /*当鼠标进入盒子，盒子两边的圆形显示效果*/
            function $(id){return document.getElementById(id);}
            $("pictures").οnmοuseοver=function () {
                $("arrow").style.display="block";
            }
            $("pictures").οnmοuseοut=function () {
                $("arrow").style.display="none";
            }
            var image = $("image").getElementsByTagName("li");
            var list = $("list").getElementsByTagName("li");
            var arrow_r = $("arrow_r");
            var arrow_l = $("arrow_l");
            for (var i = 0; i < list.length; i++) {
                list[i].index = i;
                /*当鼠标放在图片下方小圆点上时图片自动切换*/
                list[i].onmouseover = function(){
                    for(var j = 0;j<list.length;j++){
                        list[j].className="";
                        image[j].className="";
                    }
                    this.className="list_show";
                    image[this.index].className="image_show";
                }
            }
            arrow_r.onclick = function(){
                move(false);
            }
            arrow_l.onclick = function(){
                move(true);
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
        