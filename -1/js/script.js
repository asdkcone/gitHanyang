


var bbox =document.querySelector(".bbox");
var box = document.querySelectorAll("#link1 .box");

bbox.addEventListener('click',showbox);


function showbox(e){
    
    switch(e.target){
        case box[6] :
            box[3].style.transform="translateY(-310px)";
            box[7].style.transform="translateX(310px)";
        break;
        case box[4] :
            box[1].style.transform="translateY(-310px)";
            box[5].style.transform="translateX(310px)";
        break;
    }
}