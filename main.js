//assaiment one
// let inter = prompt("set interval: ");
// let val = inter.split("-");
// val = val.sort();
// for(let i = Number(val[0]) ; i<= Number(val[1]) ; i++){
//     console.log(i);
// }

//assaiment two
// setTimeout(al , 4000);
//  function al (){
//     let div = document.createElement("div");
//     let title = document.createElement("p");
//     let subtitle = document.createElement("p");
//     let but = document.createElement("div");


//     title.innerHTML = "Welcom";
//     subtitle.innerHTML = "Elzero Web School";
//     but.innerHTML = "X";

//     document.body.style.display = "flex";
//     document.body.style.height = "100vh";
//     document.body.style.justifyContent = "center";
//     document.body.style.alignItems = "center";

//     div.style.textAlign = "center";
//     div.style.fontWeight = "bold";
//     div.style.fontSize = "24px";
//     div.style.backgroundColor = "#bbc1c5";
//     div.style.padding = "20px";
//     div.style.paddingLeft = "80px";
//     div.style.paddingRight = "80px";
//     div.style.borderRadius = "10px";
//     div.style.position = "relative";
    
//     but.style.backgroundColor = "red";
//     but.style.borderRadius = "100%";
//     but.style.color = "white";
//     but.style.position = "absolute";
//     but.style.padding = "4px"
//     but.style.paddingLeft = "7px"
//     but.style.paddingRight = "07px"
//     but.style.top = "-5%";
//     but.style.right = "-5%";
//     but.style.fontSize = "15px"
//     but.style.cursor = "pointer"
//     but.onclick = function (){
//         div.style.display = "none";
//     }
    

//     div.appendChild(title);
//     div.appendChild(subtitle);
//     div.appendChild(but);
//     document.body.appendChild(div);
// }

// assaiment three
// let div = document.createElement("div");
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";

// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";

// let v = prompt("enter value");
// // console.log(typeof v);
// let count = function (){
//  if(v=== 0 ){
//     clearInterval(op);
//  }
//  div.innerHTML = v;
//  console.log(v);
//  v--;
// }
// let op = setInterval(count , 1000);

// document.body.appendChild(div);

//assaiment foor
// let div = document.createElement("div");
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";

// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";

// let v = prompt("enter value");
// // console.log(typeof v);
// let count = function (){
//  if(v=== 0 ){
//     clearInterval(op);
//     open("https://elzero.org");
//  }
//  div.innerHTML = v;
//  console.log(v);
//  v--;
// }
// let op = setInterval(count , 1000);

// document.body.appendChild(div);

//assaiment five
let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

let v = prompt("enter value");
// console.log(typeof v);
let count = function (){
 if(v=== 5 ){
    open("https://elzero.org","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
 }
 if(v === 0){
    clearInterval(op);
 }
 div.innerHTML = v;
 console.log(v);
 v--;
}
let op = setInterval(count , 1000);

document.body.appendChild(div);