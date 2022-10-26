//needed DOM variables
const body = document.querySelector("body")
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
    const menu = document.querySelector("#menu-icon")
//needed functions
function move(a,b){
    b.classList.remove("out")
    a.classList.add("out")
}
//moving to level
    //landing page event listeners
    landingPagePlayer1.addEventListener("click",function(){
        move(landingPage,level)
    })
    //level event listeners
    levelReturn.addEventListener("click",function(e){
        move(level,landingPage)
    })
    easy.addEventListener("click",function(e){
        move(level,game)
    })
    normal.addEventListener("click",function(e){
        move(level,game)
    })
    hard.addEventListener("click",function(e){
        move(level,game)
    })
    //game event listener
        //game header event listener
        menu.addEventListener("click",function(e){
            move(game,level)
        })
