// let fullName="Boburmirzo";
// let isMarried =false;
// let birthYear=1999;

// console.log('a'.codePointAt());

// let yurt='Vatanim manim';
// let i=0;
// while(i<yurt.length){
//     console.log(yurt[i], i++)
// }
// for(i=65)
// console.log(String.fromCharCode(i));



// for(let i=65; i<=90; i++){
//     console.log(String .fromCharCode(i))
// }

// let str="O'zbekiston - vatanim manim";
// let newstr1= str.slice(0,11)
// let newstr12= str.slice(11,22)
// let newstr13= str.slice(22,28)
// console.log(newstr1);
// console.log(newstr12);
// console.log(newstr13);

// let str="O'zbekiston - vatanim manimhbhbh";
// let newstr = str.slice(0,str.length);
// console.log(newstr)




// let str1='Madina';
//  let str2='Shermamatova';
//  let str3='Obidjon qizi';
//  let str =str1.concat(' ',str2, ' ', str3)
//   console.log(str)
//    let str="O'zbekiston - vatanim manim";
//    for (let i =  < array.lengt++) {
//      const element = arr];
    
//  }
   //  console.log("O'zbekiston - vatanim manim".charCodeAt(9));
    //1-masala
   //  function chiqarHarflar(n) {
   //      if (n < 1 || n > 26) {
   //        console.log("n 1 va 26 orasida bo'lishi kerak");
   //        return;
   //      }
      
   //      let natija = "";
      
   //      for (let i = 0; i < n; i++) {
      
   //        let harf = String.fromCharCode(65 + i);
   //        natija += harf + " ";
   //      }
      
   //      console.log(natija.trim());
   //    }
      
   
   //    chiqarHarflar(26)


      

      //5-masala
      //  function teskariMatn (satr){
      //   let teskari = satr.split('').reverse().join('');

      //    console.log(teskari)
      //  }

      //  teskariMatn('YurtKelajagi')

      //  function chappatext (matn){
      //   let qayt =matn.split(''). reverse().join('');
      //   console.log(qayt)
      //  }
      //  chappatext('Kompyuter')

      

      // function getStiring(Satr,N){
      //   let belgiArray=Satr.split('');


      //   let yangiSatr = belgiArray.join('*'.repeat(N));

      //   return yangiSatr;
      // }
      // console.log(getStiring("Amirxon",7)); 
     
     // let yosh = 20;

// if (yosh >= 18) {
//     console.log("Siz voyaga yetgansiz.");
// }
// let yosh = 10;

// if (yosh >= 18) {
//     console.log("Siz ovoz bera olasiz.");
// } else {
//     console.log("Siz hali yosh, ovoz bera olmaysiz.");
// }

// let ball = 75;

// if (ball >= 90) {
//     console.log("A baho");
// } else if (ball >= 75) {
//     console.log("B baho");
// } else {
//     console.log("C yoki pastroq baho");
// }


// let son = 4;

// if (son > 10) {
//     console.log("Son 10 dan katta");
// } else if (son > 5) {
//     console.log("Son 5 dan katta");
// } else {
//     console.log("Son 5 yoki kichik");
// }


//8-masala
// let text = prompt("Satrni kiriting:");
// let harf = 0;
//  for(i=0;i<text.length;i++){
//   let ch= text[i]

//   if ((ch >= 'a' && ch <= 'z') || (ch >= 'а' && ch <= 'я')) {
//     harf++;
// }

//  }
//  alert("Kichik lotin va kirill harflari soni: " + harf);

//9-masala
// let string=prompt('Matn kiriting:');
// let matn=string.toLowerCase();
// alert('Kichik harflarga aylantilgan matn:'+ matn);

//10-masala
// let gap=prompt('Matn kiriting:');
// let soz=gap.toLowerCase();
// alert('Kichik harfga aylantilgan matn:'+ soz)
//10- masala 2


// let text=prompt('Matn kiriting:');
// let result="";
// for (let i = 0; i < text.length; i++) {
//    let ch = text[i];
//    if (ch<='A' && ch>='Z') {
//     result += ch.toLowerCase()
    
//    } else{
//     result += ch
//    }
  
// }
// alert('Natija:'+ result)
 //2-masala
// function yozuv(satr){
//    if (satr>= '0' && satr <= '9') {
//       return "Digit";      

// }
// else if ((satr >= 'a' && satr<= 'z') || (satr>= 'A' && satr <= 'Z')) {
//       return 'Lotin'
// }
// else {
//    return "0";
// }
// }
//5-masala

// function matn(satr){
//    let newsatr = satr.split("").reverse().join("");
//    return newsatr;
// }
// console.log(matn('Ustoz imtihonga qattiq tayyorlanishimizni tayinladi.'))
// console.log(yozuv("7"));   
// console.log(yozuv("F"));   
// console.log(yozuv("s"));   
// console.log(yozuv("$"));   

//29-masala
function fayle(lastfayle){
   let dofayle=lastfayle.lastIndexOf(".");

if (dofayle !== -1 && dofayle < lastfayle.length - 1){
   return lastfayle.substring(dofayle + 1);
}
else{
   return"'Xatolik"
}


}
let lastfayle= "D:/Qudrat_c++/books/My_book.exe";
let faylew = fayle(lastfayle);
console.log(faylew)