// 1-Print odds 1-20

// solution with While
export function main (){ 
var x=1;
while(x<=20){
  console.log(x);
  x++;
}
}

// Solution with Loop

export function main (){
  var x=1;
 for(x=1 ; x<=20 ; x++){
 console.log(x);
 }
}
// 2-Decreasing Multiples of 3
export function main (){
  var x=4
  for (x=4 ; x =>-3.5 ; x-=1.5){
      console.log(x);
  }

}
// 3-Print the sequence
export function main (){
  var x=4
  for (x=4 ; x >=-3.5 ; x-=1.5){
      console.log(x);
  }

}
// 4-Sigma
export function main (){

  var sum = 0;
  var i = 1
 
  for ( i = 1; i <= 100; i++) {
  var sum = sum+i;
 }
 console.log(sum);
 }
 
//  5-Factorial
export function main (){

  var product = 1;
  var i = 1;
 for (i = 1; i <= 12; i++) {
   product =product * i;
 }
 console.log(product);
 
 }
 