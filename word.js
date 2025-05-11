// ///Uy ishi!!!

// //1-masala
// function rectangle (a,b) {
//     let area = a*b;
//     let perimeter = 2*(a+b);
//     console.log(area,perimeter) 
// }

// rectangle(6, 9);

// //2-masala

// function triangle(a){
//     let p=3*a;
//     let y= Math.sqrt(3)* Math.pow(a,2)/4;
//     console.log("Yuza",Math.floor(y),"perimeteri",p);
// } triangle(3)
// //3-masala.

// function sum (s){
//     let yigindi=0;
//     for(let i=0; i<=s; i++){
//         yigindi=yigindi+i; 
//         console.log("i =", i);
//     }
//        return yigindi;
// }
// let natija=sum(5)
// console.log(natija);
// //4 -masala

// function isSquare (k){
//     if(Math.sqrt(k) %1 ==0){
//         return true;
//     } else{
//         return false
//     }
// }
// let javob = isSquare(36);
// console.log(javob);


// //5-masala

// function digitCount(k){
//     let  soni=1;
//     for(let i=0; i<=k;i++){
//         soni +=1;
//         console.log (k)
//         k=Math.floor(k /10);

//     }

//     return soni;

// }
// let javob1 =digitCount(2237654)
// console .log (javob1);

//6-masala
// function getDigitSum(n){
//     let yigindi= 0;
//     for( i=0; i<=n; i++){
//         yigindi+= n % 10;
//         n=Math.floor(n/10);
         

//     }
//     console.log(yigindi)

// }
// getDigitSum(4567)



//7-masala
// function  timeToHMS(T){
//     let soat =Math.floor(T/3600);
//     let minut=Math.floor(T/60)-soat *60;
//     let sekund=T-soat*3600-minut*60;


//     return[soat,minut,sekund];

// }

// let javob =timeToHMS(3707);
// console.log(javob)




// //dars
// function app(){
//     console.log('hello')

// } 
// app()////function exipion


 (() =>{
     console.log( new Date )
})()




const main = () =>{
    console.log('arrow is working','Madina')
}
main();//Nayza funxsiyasi

const app = (a,b) =>a+b;


console.log(app(4,3))

const date=new Date();
console.log(date) 


function power(a, n) {

    let result = 1;
  
    
    for (let i = 0; i < n; i++) {
      result *= a;
    }
  
    return result;
  }
  
  console.log(power(3, 5));  // Natija: 243

  function numberOfRoots(A, B, C) {
  
    let D = B * B - 4 * A * C;
  
    
    if (D > 0) {
      return 2;  
    } else if (D === 0) {
      return 1;  
    } else {
      return 0;  
    }
  }
  
  console.log(numberOfRoots(1, -6, 9));  // Natija: 1


  //8-masala
  function isEven(K) {
    return K % 2 === 0;
}
console.log( isEven(32));
console.log(isEven(7));

function sortABC(a, b, c) {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  console.log("Eng kichik:", arr[0]);
  console.log("O'rtacha:", arr[1]);
  console.log("Eng katta:", arr[2]);
}
//9-masala
function sortABC(a, b, c) {
  let arr = [a, b, c];     
  arr.sort((x, y) => x - y); 
  return arr;
            
}
console.log(34,10,8)

//10-masala
function isPowerN(K, N) {
  if (K <= 0 || N <= 1) return false; 

  while (K % N === 0) {
      K = K / N;
  }

  return K === 1;
}
console.log(isPowerN(18, 2));   
console.log(isPowerN(9, 3));  
console.log(isPowerN(12, 3)); 
console.log(isPowerN(1, 5));



function inverseNumber(N) {
  let reversed = N.toString().split('').reverse().join('');
  return parseInt(reversed, 10);
}
console.log(inverseNumber(123456789)); 
console.log(inverseNumber(6543));
