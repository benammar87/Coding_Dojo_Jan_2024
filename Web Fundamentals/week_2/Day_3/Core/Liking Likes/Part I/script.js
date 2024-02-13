var bar = 3;
var barElement = document.querySelector("#bar");
 function addLike(){

    bar ++;
    barElement.innerHTML = bar + " like(s)" ;
    console.log(bar);
 }