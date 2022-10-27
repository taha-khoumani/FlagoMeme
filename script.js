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
    const menuIcon = document.querySelector("#menu-icon")
    //menu variables
    const menuPopUp = document.querySelector("#menu-f1")
    const continu = document.querySelector("#continue")
    const mainMenu = document.querySelector("#main-menu")
    const reset = document.querySelector("#reset")
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
    menuIcon.addEventListener("click",function(e){
        move(game,menuPopUp)
    })
    //menu Pop-up event listener
    
