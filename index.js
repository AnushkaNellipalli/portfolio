//console.log(` hello`);
//console.log('i like pizza');
//window.alert('this is an alaert');
//window.alert('i like pizza');

//document.getElementById("myh1").textContent ='hello';
//document.getElementById("myp").textContent='i like pizza';
//this is a comment

//let age = 25;
//let price=10.99;
//let gpa=2.1;
//let firstname="anu"
//console.log(typeof firstname);
//

// let name="anu"
// let age=19
// let student=true
// document.getElementById("p1").textContent=`your name is ${name}`
// document.getElementById("p2").textContent=`your age is ${age}`
// document.getElementById("p3").textContent=`enroll ${student}`
//let students=31;
//students=students%2
//console.log(students)

//let result=1+2*3+4**2
//console.log(result)
// let username;a
// console.log(username)
// let username
// document.getElementById("mysubmit").onclick= function(){
    // username=document.getElementById("mytext").value;
    // document.getElementById("myh1").textContent=`hello ${username}`
    // console.log(username)
// }
//let age=window.prompt("how old are you")
//age=Number(age)
//age+=1
// console.log(age,typeof age)
// let x="0"
// let y=""
// let z=""
/*x=Number(x)
y=String(y)
z=Boolean(z)
console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)*/
// const PI=3.14
// let rad=window.prompt("enter the radius value")
// rad=Number(rad)
// let circum=2*pi*rad
// let rad
// let circum
// document.getElementById("mysubmit").onclick=function(){
    // rad=document.getElementById("mytext").value
    
    // circum=2*PI*rad
    //  document.getElementById("myh3").textContent=circum+"cm";

const decrease =document.getElementById("decrease")
const reset =document.getElementById("reset")
const increase= document.getElementById("increase")
const countlabel=document.getElementById("countlabel")
let count=0
increase.onclick=function(){
    count++
    countlabel.textContent=count
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count
}
reset.onclick=function(){
    count=0
    countlabel.textContent=count
}