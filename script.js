import { flags } from "./data/code/array.js"
//VARIABLES-NEDEED----------------------------------------------------------------------------------------------------------
    let difficultyN ;
    let difficultyS;
    //landing page variables
    const landingPage = document.querySelector("#landing-page")
    const landingPagePlayer1 = document.querySelector("#player1")
    const landingPagePlayer2 = document.querySelector("#players2")
    //level variables
    const level = document.querySelector("#level")
    //0011
    const levelReturn = document.querySelector("#lreturn-icon")
    const gameReturn = document.querySelector("#greturn-icon")
    const resetReturn = document.querySelector("#rreturn-icon")
    //00
    const levelSound = document.querySelector("#lsound")
    const gameSound = document.querySelector("#gsound")
    const resetSound = document.querySelector("#rsound")
    //00
    const levelMusic = document.querySelector("#lmusic")
    const gameMusic = document.querySelector("#gmusic")
    const resetMusic = document.querySelector("#rmusic")
    //0011
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
    const gameFooter = document.querySelector("#game-footer")
    let nextB;
    let question = document.createElement("div")
    question.classList.add("question-div")
    container.append(question)
    let nextb = document.querySelector(".next")
    const nike = document.createElement("i")
        nike.classList.add("fa-sharp","fa-solid","fa-check")
        nike.classList.add("out")
        nike.setAttribute("id","nike")
    const adidas = document.createElement("i")
        adidas.classList.add("fa-sharp","fa-solid","fa-xmark")
        adidas.classList.add("out")
        adidas.setAttribute("id","adidas")
    const lebron = document.createElement("div")
        lebron.classList.add("lebron")
    lebron.append(nike,adidas)
    container.append(lebron)
    let chooseS;
    //timer vars
    let timerJs
    //resutl variables
    let rounds = 0;
    const results = document.querySelector("#results")
    const score = document.querySelector("#score")
    let points = 0;
    let restart = document.querySelector("#restart-b")
    let pussys;
    let usu;
    let usa;
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
function show(el){
    el.classList.remove("out")
}
function unshow(el){
    el.classList.add("out")
}
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
    isThat.innerText = `${namo.innerText} = ?`
    isThat.classList.add("question")
    isThat.setAttribute("id",`${namo.getAttribute("id")}`)
    question.append(isThat)
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
    if(difficultyN ===5 || difficultyN === 4){
        img.classList.add("smaller")
    }
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
    if(rounds === pussys && rounds !== 0){
        move([game],[results])
        score.innerText = `${points}/${pussys}`
    }
    else{
        unshow(nike)
        unshow(adidas)
        rounds++
        points =0;
        while(question.firstElementChild){question.removeChild(question.firstElementChild) }
        clear()
        idys=[]
        arr.forEach((num,ind)=>{
            quiz.append(makeCountry(num))
        })
    }
}
function clear(){
    Array.from(quiz.children).forEach((country,ind) =>{
        quiz.removeChild(country)
    })
}
function timer(s,func){ 
    let t = (s*1000)+1000
    let to = new Date().getTime()+t;
    timerJs = setInterval(function(){
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
function fuckid(id){
    let regex = /^./gi
    id = id.replace(regex,"")
    return id
}
function yes(el){
    el.parentElement.classList.add("yes")
    show(nike)
    Array.from(quiz.children).filter(a=>{return a !== el.parentElement}).forEach(a=>{a.classList.add("no")})
}
function no(el){
    el.parentElement.classList.add("no")
    let dr = document.querySelector(`#i${fuckid(isThat.getAttribute("id"))}`)
    dr.parentElement.classList.add("yes")
    Array.from(quiz.children).filter(a=>{return a !== el.parentElement && dr.parentElement !== a}).forEach(a=>{a.classList.add("no")})
    show(adidas)
}
function nacl(el){
    el.parentElement.classList.add("yes")
    Array.from(quiz.children).filter(a=>{return a !== el.parentElement}).forEach(a=>{a.classList.add("no")})
    show(adidas)
}
function test(img){
    if(fuckid(img.getAttribute("id")) === fuckid(isThat.getAttribute("id"))){
        points++
        yes(img)
    }
    else{
        no(img)
    }
}
function next(){
    nextb.classList.remove("out")
}
function noNext(){
    nextb.classList.add("out")
}
function timeDown(){
    let rch = document.querySelector(`#${isThat.getAttribute("id")}`)
    nacl(rch)
    next()
    nextB = document.querySelector(".next")
    /*
    nextB.addEventListener("click",function(){
        nextB.remove()
        display(provide(difficultyN))
        timer(difficultyS,testTime)
    })*/
    if(rounds === pussys){
        clearInterval(timerJs)
        nextB.removeEventListener("click",usu)
         usa = nextB.addEventListener("click",function(){
            noNext()
            display(provide(difficultyN))
        });
    }
    else{
        nextB.removeEventListener("click",usa)
         usu = nextB.addEventListener("click",function(){
            noNext()
            display(provide(difficultyN))
            timer(difficultyS,testTime)
        });
    }
}
function testTime(){;
    timer(chooseS,timeDown)
    hide()
    whatIs()
    let ces = Array.from(document.querySelectorAll(".flag"))
    ces.forEach(a =>{
        a.addEventListener("click",function(e){
            test(e.target);
            next();
            nextB = document.querySelector(".next")
            if(rounds === pussys){
                console.log("up")

                clearInterval(timerJs)
                nextB.removeEventListener("click",usu)
                 usa = nextB.addEventListener("click",function(){
                    noNext()
                    display(provide(difficultyN))
                });
            }
            else{
                console.log("down")
                clearInterval(timerJs)
                nextB.removeEventListener("click",usa)
                 usu = nextB.addEventListener("click",function(){
                    noNext()
                    display(provide(difficultyN))
                    timer(difficultyS,testTime)
                });
            }
        })
    })
}
//EVENT LISTENERS---------------------------------------------------------------------------------------------------
//landing page event listeners
landingPagePlayer1.addEventListener("click",function(){
    move([landingPage],[level])
})
//0011
levelReturn.addEventListener("click",function(e){
    move([level],[landingPage])
})
gameReturn.addEventListener("click",function(e){
    clearInterval(timerJs)
    rounds =0;
    unshow(nike)
    noNext()
    unshow(adidas)
    points =0;
    while(question.firstElementChild){question.removeChild(question.firstElementChild) }
    clear()
    idys=[]
    move([game],[level])
})
resetReturn.addEventListener("click",function(e){
    clearInterval(timerJs)
    rounds =0;
    unshow(nike)
    noNext()
    unshow(adidas)
    points =0;
    while(question.firstElementChild){question.removeChild(question.firstElementChild) }
    clear()
    idys=[]
    move([results],[level])
})
//0011
normal.addEventListener("click",function(e){
    move([level],[game])
    difficultyS = 4
    difficultyN = 4 //don't touch this line please bro
    pussys = 1
    chooseS = 5
    display(provide(difficultyN))
    timer(difficultyS,testTime)
})
easy.addEventListener("click",function(e){
    move([level],[game])
    difficultyN = 3 //don't touch this line please bro
    difficultyS = 5
    pussys = 5
    chooseS = 5
    display(provide(difficultyN))
    timer(difficultyS,testTime)
})

hard.addEventListener("click",function(e){
    move([level],[game])
    difficultyN = 5 //don't touch this line please bro
    difficultyS =3
    pussys = 1
    chooseS = 4
    display(provide(difficultyN))
    timer(difficultyS,testTime)
})
//results event listener
restart.addEventListener("click",function(e){
    clearInterval(timerJs)
    rounds =0;
    display(provide(difficultyN))
    move([results],[game])
    timer(difficultyS,testTime)
})
//EXECUTIONS----------------------------------------------------------------------------------------------------------