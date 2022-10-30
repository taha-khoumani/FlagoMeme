import { flags } from "./data/code/array.js"
//VARIABLES-NEDEED----------------------------------------------------------------------------------------------------------
    //landing page variables
    const landingPage = document.querySelector("#landing-page")
    const landingPagePlayer1 = document.querySelector("#player1")
    const landingPagePlayer2 = document.querySelector("#players2")
    //level variables
    const level = document.querySelector("#level")
    const levelReturn = document.querySelector("#return-icon")
    const easy = document.querySelector("#easy")
    const normal = document.querySelector("#normal")
    const hard = document.querySelector("#hard")
    //game variables      
    const game = document.querySelector("#game")
    const menuIcon = document.querySelector("#menu-icon")
    //menu variables
    const menuPopUp = document.querySelector("#menu-f1")
    const continu = document.querySelector("#continue")
    const mainMenu = document.querySelector("#main-menu")
    const reset = document.querySelector("#reset")
    //game vars
    let idys = []
    const container = document.querySelector("#quiz-f")
    let used = []
    const quiz = document.querySelector("#quiz")
    let  timerHtml = document.querySelector("#timer")
    let isThat;
//WEIRD PARTS--------------------------------------------------------------------------------------------------------------
let save = []
let num ;
function randomBeta(){ 
    return(Math.floor(Math.random()*51))
}
save.push(randomBeta())
num= save[0]
function newNum(){
    save = []
    save.push(Math.floor(Math.random()*51))
    num= save[0]
}
//00
//FUNCTIONS NEDEED------------------------------------------------------------------------------------------------------------
function move(a,b){
    b.forEach( s => {
        s.classList.remove("out")
    });
    a.forEach( x => {
        x.classList.add("out")
    });
}
function up(a){
    a.style.zIndex = 1;
}
function down (a){
    a.style.zIndex = 0;
}
function ranid(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}
function whatIs(){
    let namo = document.querySelector(`#${ranid(idys)}`)
    isThat = document.createElement("p")
    isThat.innerText = namo.innerText
    isThat.classList.add("question")
    isThat.setAttribute("id",`${namo.getAttribute("id")}`)
    container.append(isThat)
}
function isnot(n){
    let is = used.every(not =>{
       return not !== n
    })
    return is
}
function random(){
    if(used.length === 51){
        used = []
        newNum()
        used.push(num)
        return num
    }
    else{
        while(isnot(num) === false){
            newNum()
        }
        used.push(num)
        return num
    }

}
function pathOf(n){
    return flags[n].path
}
function nameOf(n){
    return flags[n].nam
}
function provide(nam){
    let bam = []
    for(let i=0;i<nam;i++){
        bam.push(random())
    }
    return bam
}
function makeFlag(n){
    let img = document.createElement("img")
    img.setAttribute("id",`i${n}`)
    img.setAttribute("src",pathOf(n))
    img.setAttribute("alt",nameOf(n))
    img.classList.add("flag")
    return img
}
function makeName(n){
    let name = document.createElement("p")
    name.innerText = nameOf(n)
    name.classList.add("c-name")
    name.setAttribute("id",`n${n}`)
    idys.push(`n${n}`)
    return name
}
function makeCountry(n){
    let div = document.createElement("div")
    div.classList.add("country")
    div.append(makeFlag(n),makeName(n))
    return div
}
function display(arr){
    clear()
    idys=[]
    arr.forEach((num,ind)=>{
        quiz.append(makeCountry(num))
    })
}
function clear(){
    Array.from(quiz.children).forEach((country,ind) =>{
        quiz.removeChild(country)
    })
}
function timer(s,func){
    let t = (s*1000)+1000
    let to = new Date().getTime()+t;
    let timerJs = setInterval(function(){
        var now = new Date().getTime()
        var timeLeft = Math.floor((to-now)/1000);
        timerHtml.innerText=`${timeLeft}`
        if(timeLeft<0){
            clearInterval(timerJs)
            timerHtml.innerText=""
            func()
        }
    },100)
}
function hide(){
    let pes = Array.from(document.querySelectorAll(".c-name"))
    pes.forEach(a=>{
        a.style.display = "none"
    })
}
function yes(el){
    el.parentElement.classList.add("yes")
}
function no(el){
    el.parentElement.classList.add("no")
    let dr = document.querySelector(`#i${isThat.getAttribute("id")[1]}`)
    console.log(dr)
    dr.classList.add("yes")
    
}
function test(img){
    if(img.getAttribute("id")[1] === isThat.getAttribute("id")[1]){
        yes(img)
    }
    else{
        no(img)
    }
}
function testTime(){
    hide()
    whatIs()
    let ces = Array.from(document.querySelectorAll(".flag"))
    ces.forEach(a =>{
        a.addEventListener("click",function(e){test(e.target)})
    })
}
//EVENT LISTENERS---------------------------------------------------------------------------------------------------
//landing page event listeners
landingPagePlayer1.addEventListener("click",function(){
    move([landingPage],[level])
})
//level event listeners
levelReturn.addEventListener("click",function(e){
    move([level],[landingPage])
})
normal.addEventListener("click",function(e){
    move([level],[game,menuPopUp])
})
easy.addEventListener("click",function(e){
    move([level],[game,menuPopUp])
    timer(5,testTime)
})
hard.addEventListener("click",function(e){
    move([level],[game,menuPopUp])
})
//game event listener
menuIcon.addEventListener("click",function(e){
    up(menuPopUp)
})
//menuPopup event listeners
continu.addEventListener("click",function(e){
    down(menuPopUp)
})
reset.addEventListener("click",function(){
    down(menuPopUp)
})
mainMenu.addEventListener("click",function(e){
    down(menuPopUp)
    move([game,menuPopUp],[landingPage])
})
//EXECUTIONS----------------------------------------------------------------------------------------------------------
display(provide(3))