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

/*const decrease =document.getElementById("decrease")
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
}*/
// let x=3.99
// let y=2
// let z
// z=Math.round (x)
// z=Math.floor(x)
// z=Math.ceil (x)//4
// z=Math.trunc(x)
// z=Math.pow(x,y)
/*let min=50
let max=100
let randomnum=Math.floor(Math.random()*(max-min))+min
console.log(randomnum)*/
/*const mybutton=document.getElementById("mybutton")
// const mylabel=document.getElementById("mylabel")
const mylabel1=document.getElementById("mylabel1")
const mylabel2=document.getElementById("mylabel2")
const mylabel3=document.getElementById("mylabel3")
const min=1
const max=6
// let randomnum
let randomnum1
let randomnum2
let randomnum3
mybutton.onclick=function(){
    // randomnum=Math.floor(Math.random()*max)+min
    randomnum1=Math.floor(Math.random()*max)+min
    randomnum2=Math.floor(Math.random()*max)+min
    randomnum3=Math.floor(Math.random()*max)+min
    // mylabel.textContent=randomnum
    mylabel1.textContent=randomnum1
    mylabel2.textContent=randomnum2
    mylabel3.textContent=randomnum3
}*/
/*let age=13
if(age>=18){
    console.log("your eligible")
}
else{
    console.log("you not eligible")
}*/
/*let time=9
if(time<12){
    console.log("good morning")
}else{
    console.log("good afternoon")
}*/
/*let student=false
if(student){
    console.log("you are a student")
}else{
    console.log("you are not a student")
}*/
/*let age=18
let license=true
if(age>=16){
    console.log("your old enough")
    if(license){
        console.log("you have your licence")
    }
    else{
        console.log("you dont")
    }
}else{
    console.log("you are not 16 ")
}*/
/*const mytext=document.getElementById("mytext")
const mysubmit=document.getElementById("mysubmit")
const result=document.getElementById("result")
let age
mysubmit.onclick=function(){
    age=mytext.value
    age=Number(age)
    if(age>=100){
        result.textContent=`your to old to enter this site`
    }
    else if(age==0){ 
        result.textContent=`you cant enter. you just born`
    }
    else if(age>=18){
        result.textContent=`you old enough to enter this site`

    }
    else{
        result.textContent=`you must be 18+ enter this site`
    }
}*/
/*const mycheckbox=document.getElementById("mycheckbox")
const master=document.getElementById("master")
const visa=document.getElementById("visa")
const pay=document.getElementById("pay")
const mysubmit=document.getElementById("mysubmit")
const subresult=document.getElementById("subresult")
const payresult=document.getElementById("payresult")
mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`you are subscribed`
    }
    else{
        subresult.textContent=`you are not subscribed`
    }
    if(visa.checked){
        payresult.textContent=`your paying with visa`
    }
    else if(master.checked){
        payresult.textContent=`your paying with mastercard`
    }
    else if(pay.checked){
        payresult.textContent=`your paying with paypaul`

    }
    else{
        payresult.textContent=`you must selsct a payment type`

    }
}*/
/*let age=18
let m=age>=18 ? "your an adulit" : "your a minor"
console.log(m)*/
/*let age=26
let m=age>=18? "your are major":"your minor"
console.log(m)*/
/*let day="pizza"
switch(day){
    case 1:
        console.log("its monday")
        break
    case 2:
        console.log("its tuesday")
        break
    case 3:
        console.log("its wednesday")
        break
    case 4:
        console.log("its thursday")
        break
    case 5:
        console.log("its friday")
        break
    default:
        console.log(`${day} is not day`)
        break
}*/
/*const full="bro code"
let first=full.slice(0,full.indexOf(" "))br
let last=full.slice(full.indexOf(" "))
console.log(first)
console.log(last)*/
/*let username=window.prompt("enter your name")
username=username.trim()
let letter=username.charAt(0)
letter=letter.toUpperCase()
let extension=username.slice(1)
extension=extension.toLowerCase()
username=letter+extension
console.log(username)*/
/*let username=window.prompt("enter your ysarename")
username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase()
console.log(username)*/
/*const min=50
const max=100
const ans=Math.floor(Math.random()*(max-min+1))+min
let attempt=0
let guess
let running=true
while(running){
    guess=window.prompt(`guess the num bet ${min}-${max}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("please eneter a valid num")
    }
    else if(guess<min||guess>max){
        window.alert("enter a vlalid num")
    }
    else{
        attempt++
        if(guess<ans){
            window.alert("too low try again")
        }
        else if(guess>ans){
            window.alert("too high try again")
        }
        else{
            window.alert(`correct ${ans}.it took you ${attempt} attempts`)
            running=false
        }
    }
}*/
const text=document.getElementById("text")
const tofahren=document.getElementById("tofahren")
const tocelsius=document.getElementById("tocelsius")
const result=document.getElementById("result")
let temp
function convert(){
    if(tofahren.checked){
        temp=Number(text.value)
        temp=temp*9/5+32
        result.textContent= temp.toFixed() + "F"
    }
    else if(tocelsius.checked){
        temp=Number(text.value)
        temp=(temp-32)*(5/9)
        result.textContent= temp.toFixed() + "c"

    }
    else{
        result.textContent="select a unit"
    }

}