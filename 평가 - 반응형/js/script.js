// $(".menu").click(
//     function(){
//         $(".t_menu").stop().slideDown(400);
//     }
// );
// $(".close","#wrap",".menu").click(
//     function(){
//         $(".t_menu").stop().slideUp(400);
//     }
// );



var NWidth = document.querySelector("#wrap").clientWidth;


console.log(NWidth);


var wrap = document.querySelector("#wrap");
var slide = document.querySelector("#slide");
var tabli = document.querySelectorAll(".tab li");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s1li = document.querySelectorAll(".s1 a"); /* 10개 */
var s2li = document.querySelectorAll(".s2 a"); /* 6개 */
var move = document.querySelector(".move");
var moveimg = document.querySelectorAll(".move img");
var moveli = document.querySelectorAll(".move li");
var move2 = document.querySelector(".move2");
var move2img = document.querySelectorAll(".move2 img");
var move2li = document.querySelectorAll(".move2 li");

var menu = document.querySelector(".menu a");
var menuImg = document.querySelector(".menu a img");
var menuP = document.querySelector(".menu a");
var tmenu = document.querySelector(".t_menu");
var tmenuA = document.querySelectorAll(".t_menu a");
var s1count=0;
var s1maxcount=Math.floor((2140-NWidth)/NWidth);
var s1Xcount=((2140-NWidth)/NWidth-Math.floor((2140-NWidth)/NWidth))*NWidth;
var Trig;

var s1spoint;
var s1epoint;
    function s1s1(){
            var s1Open=setTimeout(function(){s1li[0].style.transform="translateX(100px)";
                        for(var i=0;i<10;i++){
                            s1li[i].style.opacity=1;
                            s1li[i].classList.add("open");
                        }
                        },100);
                        setTimeout(function(){s1li[1].style.transform="translateX(100px)";},150);
                        setTimeout(function(){s1li[2].style.transform="translateX(100px)";},200);
                        setTimeout(function(){s1li[3].style.transform="translateX(100px)";},250);
                        setTimeout(function(){s1li[4].style.transform="translateX(100px)";},300);
                        setTimeout(function(){s1li[5].style.transform="translateX(100px)";},350);
                        setTimeout(function(){s1li[6].style.transform="translateX(100px)";},400);
                        setTimeout(function(){s1li[7].style.transform="translateX(100px)";},450);
                        setTimeout(function(){s1li[8].style.transform="translateX(100px)";},500);
                        setTimeout(function(){s1li[9].style.transform="translateX(100px)";},550);
    }
    function s1Back(){
        for(var i=0;i<10;i++){
            s1li[i].style.opacity=0;s1li[i].style.transform="translateX(-100px)";;
        }
    }
    
    function s2s2(){
            var s2Open=setTimeout(function(){s2li[0].style.transform="translateX(100px)";
                for(var i=0;i<6;i++){
                    s2li[i].style.opacity=1;
                    s2li[i].classList.add("open");
                }
                },100);
                setTimeout(function(){s2li[1].style.transform="translateX(100px)";},150);
                setTimeout(function(){s2li[2].style.transform="translateX(100px)";},200);
                setTimeout(function(){s2li[3].style.transform="translateX(100px)";},250);
                setTimeout(function(){s2li[4].style.transform="translateX(100px)";},300);
                setTimeout(function(){s2li[5].style.transform="translateX(100px)";},350);
                
            }
    function s2Back(){
        for(var i=0;i<6;i++){
            s2li[i].style.opacity=0;s2li[i].style.transform="translateX(-100px)";;
        }
    }

wrap.addEventListener('click',moveslide);
window.addEventListener('load',slideOpen);

function slideOpen(){
    s1.classList.remove("close");
    s1s1();
    if(NWidth>="1340"){
        move2.style.display="none";
    }
}


function moveslide(e){  /* click Event */
    console.log("good/",e.target);
    
    switch(e.target){
        

        case moveimg[0] :       /* s1_left */
            if(NWidth>(2040-NWidth)){    /* 웹에서(한번만이동) */
                setTimeout(function(){
                    moveli[0].classList.remove("on");
                    moveli[1].classList.add("on");
                },100);
                s1.style.transform="translateX(0px)";
            }else{                      /* pad,모바일에서 (n번이동) */
                s1count=s1count%(s1maxcount+2);

                moveli[1].classList.add("on");
                moveli[0].classList.add("on");
                s1count--;
                console.log("left",s1count);
                if(s1count==0){
                    s1.style.transform="translateX("+-(NWidth*s1count+s1Xcount)+"px)";
                    moveli[0].classList.remove("on");
                    moveli[1].classList.add("on");
                }
                if(s1count==1){
                    s1.style.transform="translateX("+-(NWidth*s1count)+"px)";
                    
                }else{
                    s1.style.transform="translateX("+-(NWidth*s1count)+"px)";
                }
            } 
        break;

        case moveimg[1] :       /* s1_right */
            if(NWidth>(2140-NWidth)){    /* 웹에서(한번만이동) */
                setTimeout(function(){
                    moveli[1].classList.remove("on");
                    moveli[0].classList.add("on");
                },100);
                s1.style.transform="translateX("+-(2140-NWidth)+"px)";
            }else{                      /* pad,모바일에서 (n번이동) */
                s1count=s1count%(s1maxcount+2);
                moveli[1].classList.add("on");
                moveli[0].classList.add("on");
                s1count++;
                console.log("right",s1count);
                
                if(s1count==s1maxcount){
                    s1.style.transform="translateX("+-(NWidth*s1count+s1Xcount)+"px)";
                    moveli[1].classList.remove("on");
                    moveli[0].classList.add("on");
                }else{
                    s1.style.transform="translateX("+-(NWidth*s1count)+"px)";
                }
            }
        break;

        case menuImg||menuP :
            console.log("menuOn");
            tmenu.style.display="block";
            // setTimeout(function(){menu.classList.add("on")},50);
            menu.classList.add("on")
        break;

        case tabli[1] :
            s1.classList.add("close");
            s2.classList.remove("close");
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[1].classList.add("on");
            move.classList.add("off");
            move2.classList.remove("off");
            s2s2();
            s1Back();
        break;

        case tabli[0] :
            s2.classList.add("close");
            s1.classList.remove("close");
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[0].classList.add("on");
            move2.classList.add("off");
            move.classList.remove("off");
            s1s1();
            s2Back();
        break;

        case move2img[0] :      /* s2_left */
            setTimeout(function(){
                move2li[0].classList.remove("on");
                move2li[1].classList.add("on");
            },100);
            
                s2.style.transform="translateX(0)";
        break;

        case move2img[1] :      /* s2_right */
            setTimeout(function(){
                move2li[1].classList.remove("on");
                move2li[0].classList.add("on");
            },100);
            s2.style.transform="translateX("+-(1340-NWidth)+"px)";
        break;

        }

    if(menu.className=="on"){
        $(".t_menu").siblings().click(
            function(){
                $(".t_menu").hide();
            }
        );
        menu.classList.remove("on");
    }
    
      
}


$(".subopen").click(
    function(){
        if($(this).parent().siblings().css("display")=="none"){
            $(this).parent().siblings().show();
        }else{
            $(this).parent().siblings().hide();
        }
        $(this).stop().siblings().slideToggle(300);
        
    }
);






