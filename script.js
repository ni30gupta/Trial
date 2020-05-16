// var  btnIncrease = document.getElementById("btn-increase");

// var  btnDecrease = document.getElementById("btn-decrease");

// // addEventListener("click", function (){
// //     btnDecrease.style.fontSize="1.5em";
// // })

// var headingElement = document.getElementById("main-heading");
// var initialTextSize= window.getComputedStyle(headingElement).fontSize;
// var initialTextSize = parseInt(initialTextSize.substr(0,(initialTextSize.length-2)));

// // headingElement.style.fontSize = initialTextSize + 20 + "px";

// btnDecrease.onclick = function(){
//     initialTextSize -= 10 ;
//     headingElement.style.fontSize = initialTextSize + "px";
// }
// btnIncrease.addEventListener("click", function(){
//     initialTextSize += 10 ;
//     headingElement.style.fontSize = initialTextSize + "px";
// })


// let list = ['ntish', [5,4,6,2], 25, 'deepa'];

// for (i=0;i<list.length;i++){
//     console.log(list[i]);
//     if (i<2){
//         console.log("jjj");
//     }

// }


function Circle(radius){
    this.draw = function(){
        console.log("drawing" + this);
        
    }
}


var another = new Circle(5);
