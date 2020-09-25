

var wrap = document.querySelector("#wrap");
var box = document.querySelectorAll(".boxbox li");
var start = document.querySelector(".start");
var nWidth = document.querySelector(".nwidth").clientWidth;
console.log(nWidth);

document.addEventListener('click',gogo);

function gogo(e){
    console.log(e.target);

    switch(e.target){

        case start :
            start.style.display="none";
            wrap.style.transform="translateX("+(2000+(nWidth/2-150))+"px)";
        break;

        case wrap :
            
            wrap.style.transform="translateX("+(2000+(nWidth/2-150))+"px) rotate(45deg)";
        break;

        case box[0] :
            box[1].style.opacity="1";
            box[1].style.zIndex="6";
            box[1].style.transform="rotateY(180deg)";

            setTimeout(function(){box[2].style.zIndex="7";box[2].style.opacity="1";},300);
            setTimeout(function(){box[2].style.transform="rotateX(-180deg)";},400);

            setTimeout(function(){box[3].style.zIndex="8";box[3].style.opacity="1";},700);
            setTimeout(function(){box[3].style.transform="rotateY(180deg)";},800);
        break;

    }

} /* - click END - */