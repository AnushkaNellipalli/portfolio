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
       / }
        else{
            window.alert(`correct ${ans}.it took you ${attempt} attempts`)
            running=false
        }
    }
}*/
/*const text=document.getElementById("text")
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
}*/
//password generator
/*function generatepass(plength,iLowerCase,iUpperCase,inumber,isymbol){
     const lcasechar="khrsfbkmhdbdfm nebdmj"
     const ucasechar="BVJSDHBFMKHSEDKFCN"
     const numchars="7868456937598"
     const symbolchar="%$%^&&@@!$^"
     let allow=""
     let password=""
     allow+=iLowerCase?lcasechar:""
     allow+=iUpperCase?ucasechar:""
     allow+=inumber?numchars:""
     allow+=isymbol?symbolchar:""
     console.log(allow)
     if(plength<=0){
        return(`password length must be least 1`)
     }
    return ""

}
const plength=0
const iLowerCase=false
const iUpperCase=false
const inumber=true
const isymbol=true
const password=generatepass(plength,iLowerCase,iUpperCase,inumber,isymbol)
console.log(`generate password: ${password}`)*/
/*sum(page,1,2)
function sum(callback,x,y){
    let result =x+y
    callback(result)
}
function display(reset){
    console.log(result)
}
function page(result){
    document.getElementById("myh1").textContent=result
}*/
/*let num=[1,2,3,4,5]
num.forEach(display)
function display(element){
    console.log(element)
}*/
/*const pi=3.14
const rad
const circum
document.getElementById("mybutton").onclick=function(){
    rad=document.getElementById("mytext").value
    circum=2*pi*rad
    document.getElementById("myh3").textContent=circum+"cm"
}*/
/*function hello(){
    console.log("hello")
}
setTimeout(hello,3000)*/
/*const hello=() =>console.log("helo")
hello()*/
/*let fruits=["apple","orange","banana"]
let m=[...fruits]
console.log(m)*/
/*let time;
function startTimer(){
    time=setTimeout(()=>window.alert("Hello"),3000)
    console.log("starter")
}
function clearTimer(){
    clearTimeout(time)
    console.log("cleard")
}*/
/*function updateclock(){
    const now=new Date()
    let hours=now.getHours().toString().padStart(2,0)
    const maridin=hours>=12?"PM":"AM"
    hours=hours%12||12
    hours=hours.toString().padStart(2,0)
    const minutes=now.getMinutes().toString().padStart(2,0)
    const seconds=now.getSeconds().toString().padStart(2,0)
    const timestring=`${hours}:${minutes}:${seconds} ${maridin}`
    document.getElementById("clockc").textContent=timestring
}
updateclock()
setInterval(updateclock,1000)*/
//stopwatch
/*const display=document.getElementById("display")
let timer=null
let startTime=0
let elapsed=0
let running=false
function start(){
    if(!running){
        startTime=Date.now()-elapsed
        timer=setInterval(update,10)
        running=true
    }

}
function stop(){
    if(running){
        clearInterval(timer)
        elapsed=Date.now()-startTime
        running=false
    }

}
function reset(){

    clearInterval(timer)
    startTime=0
    elapsed=0
    running=false
    display.textContent="00:00:00:00"

}
function update(){
    const current=Date.now()
    elapsed=current-startTime
    let hours=Math.floor( elapsed/(1000*60*60))
    let minutes=Math.floor( elapsed/(1000*60)%60)
    let seconds=Math.floor( elapsed/1000%60)
    let milliseconds=Math.floor( elapsed%1000/10)
    hours=String(hours).padStart(2,"0")
    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0")

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`

}*/
/*import { pi,getcircum,getarea,getvolume } from "./mathutile.js";
console.log(pi)
const circum=getcircum(10)
const area=getarea(10)
const volume=getvolume(10)
console.log(circum.toFixed(2))
console.log(area.toFixed(2))
console.log(volume.toFixed(2))*/
//calculator
/*const display=document.getElementById("display")
function appendToDisplay(input){
    display.value +=input

}
function clearDisplay(){
    display.value= ""

}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
    

}*/
/*const u=""
const welcomea=document.getElementById("welcomea")
welcomea.textContent+=u===""?'Guest':u*/
/*function hello(callback){
    console.log("hello")
    callback();
}
function goodbye(){
    console.log("good bye")
}
hello(goodbye)*/
/*function sum(callback,x,y){
    let result=x+y
    callback(result)
}
function displayconsole(result){
    console.log(result)
}
sum(displayconsole,2,3)*/
/*function great(name,callback){
    console.log("hello " + name)
    callback()
}
function say(){
    console.log("good morning!")
}
great("alice " , say)*/
/*const fruits=["apple","banana","orange"]
fruits.forEach(function(fruit){
    console.log(fruit)
})*/
/*const nums=[10,20,30]
nums.forEach(num=>{
    console.log(num)
})*/
/*const nums=[1,2,3,4]
const double=nums.map(function(num){
    return num*2
})
console.log(double)*/
/*let nums=[1,2,3,4,5,6]
let even=nums.filter(iseven)
console.log(even)
function iseven(element){
    return element%2==0
}*/
/*const price=[20,30,40,50]
const total=price.reduce(sum)
console.log(total)
function sum(accumulator,element){
    return accumulator+element
}*/
/*const hello=()=> console.log("hello")
hello()*/
/*const num=[1,2,3,4,5,6]
const total=num.reduce((accumulator,Element)=>accumulator+Element)
console.log(total)*/
/*const person1={
    fname:"spongbob",
    lastname:"alice",
    age:30,
    student:true,
    sayhello:function(){console.log("hi i am spongbob")}

}
console.log(person1.fname)
person1.sayhello()*/
const startscreen=document.getElementById("start-screen")
const quizscreen=document.getElementById("quiz-screen")
const resultscreen=document.getElementById("result-screen")
const Startbtn=document.getElementById("Start-btn")
const questiontext=document.getElementById("question-text")
const answercontainer=document.getElementById("answer-container")
const currentequestionspan=document.getElementById("currente-question")
const totalquestionspan=document.getElementById("total-question")
const scorespan=document.getElementById("score")
const finalscorespan=document.getElementById("final-score")
const maxscorespan=document.getElementById("max-score")
const resultmessage=document.getElementById("result-message")
const restartbtn=document.getElementById("restart-btn")
const progress=document.getElementById("progress")
const quizquestions=[
    {
        question:"What is the capital of france?",
        answers:[
            {text:"London", correct:false},
            {text:"Berlin",correct:false},
            {text:"paris",correct:true},
            {text: "madrid",correct:false}
        ],
    },
    {
        question:"which planet is known as the red planet?",
        answers:[
            {text:"venus",correct:false},
            {text:"mars",correct:true},
            {text:"jupiter",correct:false},
            {text:"saturn",correct:false},
        ],
    },
    {
        question:"what is the largest ocean in the world?",
        answers:[
            {text:"atlantic ocean", correct:false},
            {text:"indian ocean",correct:false},
            {text:"arctic ocean",correct:false},
            {text:"pacific ocean",correct:true},
        ],
    },
    {
        question:"which is not programing language?",
        answers:[
            {text:"java",correct:false},
            {text:"python",correct:false},
            {text:"banana",correct:true},
            {text:"c",correct:false},
        ],
    },
    {
        question:"what is the chemical symbol for gold?",
        answers:[
            {text:"go",correct:false},
            {text:"gd",correct:false},
            {text:"Au",correct:true},
            {text:"ag",correct:false},
        ],
    },
];
let currentquestionindex=0;
let score=0
let answerdisabled=false
totalquestionspan.textContent=quizquestions.length
maxscorespan.textContent=quizquestions.length
Startbtn.addEventListener("click",startquiz)
restartbtn.addEventListener("click",restartquiz)
function startquiz(){
    currentquestionindex=0
    score=0
    scorespan.textContent=0
    startscreen.classList.remove("active")
    quizscreen.classList.add("active")
    showquestion()
}
function showquestion(){
    answerdisabled=false

    const currentequestion=quizquestions[currentquestionindex]

    currentequestionspan.textContent =currentquestionindex+1

    const progresspercent=(currentquestionindex/quizquestions.length)*100

    progress.style.width=progresspercent+"%"

    questiontext.textContent=currentequestion.question

    answercontainer.innerHTML=""

    currentequestion.answers.forEach((answers)=>{
        const button=document.createElement("button")
        button.textContent=answers.text
        button.classList.add("answer-btn")
        button.dataset.correct=answers.correct
        button.addEventListener("click",selectanswer)
        answercontainer.appendChild(button)
    })
}
function selectanswer(event){
    if(answerdisabled) return
    answerdisabled=true
    const selectedbutton=event.target
    const iscorrect=selectedbutton.dataset.correct==="true"
    Array.from(answercontainer.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")

        }else if(button===selectedbutton){
            button.classList.add("incorrect")
        }
    })
    if(iscorrect){
        score++
        scorespan.textContent=score
        
    }
    setTimeout(()=>{
        currentquestionindex++
        if(currentquestionindex<quizquestions.length){
            showquestion()
        }else{
            showresults()
        }
    },1000)
}
function showresults(){
    quizscreen.classList.remove("active")
    resultscreen.classList.add("active")

    finalscorespan.textContent=score

    const percentage=(score/quizquestions.length)*100

    if(percentage===100){
        resultmessage.textContent="perfect your genius!"
    }else if(percentage>=80){
        resultmessage.textContent="great job! you know your stuff"
    }else if(percentage>=60){
        resultmessage.textContent="good effort keep learning"
    }else if(percentage>=40){
        resultmessage.textContent="not bad try again to improve"
    }else{
        resultmessage.textContent="keep studieng you will get better"
    }
}
function restartquiz(){
    resultscreen.classList.remove("active")
    startquiz()
}
