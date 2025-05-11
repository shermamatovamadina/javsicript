





// const hours = vaqt.getHours();
// const minutes = vaqt.getMinutes();
// const seconds = vaqt.getSeconds();

// console.log(vaqt.setTimeout);
// setInterval( ()=>{
// const vaqt=new Date();
// const hours= vaqt.getHours().toString().padStart(2,'0');
// const minutes = vaqt.getMinutes().toString().padStart(2,'0');
// const seconds = vaqt.getSeconds().toString().padStart(2,'0');

// document.querySelector('h1').textContent= hours + ':' + minutes + ':' + seconds;

// },1)


// let sekund = 0;
// let interval;

// function boshlash(){
//     if(!interval){
//         interval = setInterval(()=> {
//             sekund++;
//             document.querySelector("h1").textContent = sekund;

//         }, 1000);
//     };
// }

// function tuxta(){
//     clearInterval(interval);
//     interval - null;
// }

// let son = 0;
// let interval = setInterval(()=>{
//     son++;
//     console.log(son);

//     if(son == 15){
//         clearInterval(interval);
//     }
// }, 300);




// // //2-masala..
// function tugilganKungachaQolganKunlar(yil, oy, kun) {
//    const bugun = new Date(); 


//    let tugilganKun = new Date(bugun.getFullYear(), oy - 1, kun);


//   if (tugilganKun < bugun) {
//     tugilganKun = new Date(bugun.getFullYear() + 1, oy - 1, kun);
//    }


//  const farq = tugilganKun - bugun;

//  const qolganKunlar = Math.ceil(farq / (1000 * 60 * 60 * 24));

//  console.log(`Tug‘ilgan kuningizgacha ${qolganKunlar} kun qoldi.`);
//  }


//  tugilganKungachaQolganKunlar(1999, 7, 7);


// //3-masala

// function sonlarniChiqar() {
//   let son = 0;

//   const interval = setInterval(() => {
//     son++;
//     console.log(son);
//   }, 1000);

//   
//   setTimeout(() => {
//     clearInterval(interval);
//     console.log("To‘xtadi.");
//   }, 5000);
// }


// sonlarniChiqar();

//4-masala
// let boshlanishVaqti = null;

// function boshlash() {
//   boshlanishVaqti = Date.now(); 
//   console.log("Taymer boshlandi...");
// }

// function toxtatish() {
//   if (boshlanishVaqti === null) {
//     console.log("Iltimos, avval boshlash() funksiyasini chaqiring.");
//     return;
//   }

//   const tugashVaqti = Date.now(); 
//   const farqMillisekund = tugashVaqti - boshlanishVaqti;
//   const farqSekund = Math.round(farqMillisekund / 1000); 

//   console.log(`Taymer ${farqSekund} sekund ishladi.`);
//   boshlanishVaqti = null; 
// }
//  toxtatish()


//  let son =10;
// let interval= setInterval(()=>{
//       console.log(son);
//       son--;

//       if (son===0){
//         clearInterval(interval)
//         console.log('Bajarildi')
//       }

// },1000)


// let son=0;
// let interval=setInterval(()=>{
//   console.log(son);
//   son++;

//   if(son===15){
//     clearInterval(interval)
//     console.log('Shart bajarildi')
//   }
// },1000)



// function vaqtniKorsat(){
//   function hozirgiVaqtniChiqar(){
//     const hozir = new Date();
//     const soat =  hozir.getHours().toString().padStart(2,'o')
//     const minut =  hozir.getMinutes().toString().padStart(2,'o')
//     const sekund =  hozir.getsekunds().toString().padStart(2,'o')
//     console.log('Hozirgi vaqt:${soat}: ${minut}:${sekund}')
//   }
//   hozirgiVaqtniChiqar();

//   const interval=setInterval(hozirgiVaqtniChiqar,1000);
//   setTimeout(function(){
//     clearInterval(interval);
//     console.log('Vaqt tugadi !!')
//   },10000);
// } vaqtniKorsat()


// let sana=prompt("Sana kiriting (yyyy-mm-dd formatda):")
// let date=new Date(sana);
// let haftakunlari= date.getDay();


// let haftanomi=[
//   "Yakshanba",
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba"]
//   console.log('${sana} sanasi ${haftanomi[haftakunlari]} kuniga togri keladi.')

// let sana = new Date('2025-09-13')

// let haftaKuni = sana.getDay();

// switch (haftaKuni) {
//   case 0:
//     console.log("Yakshanba")
//     break;
//   case 1:
//     console.log("dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;


//   default:
//     console.log('XATO')
//     break;
// }

