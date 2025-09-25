function Userinput(){
userInput= document.getElementById("user in put").value
console.log(userInput)

     botInput = Math.floor((Math.random() * 100 ) % 3 )
console.log(botInput)
    // rock 0
    // paper 1
    //scisor 2
    if(userInput == botInput){
    console.log("DRAW")
    document.getElementById("greeting-text").innerText = "DRAW"
    }
   else if (userInput == 0 && botInput == 2){
    console.log("USER WIN")
    document.getElementById("greeting-text").innerText = "USER WIN (Rock beats Scissor)"
        //rock
        //scissor
   }
    else if (userInput == 1 && botInput == 0){
    console.log("USER WIN")
    document.getElementById("greeting-text").innerText = "USER WIN (Paper beats Rock)"

        //paper
        //rock
    }
    else if (userInput == 2 && botInput == 1 ){
    console.log("USER WIN")
    document.getElementById("greeting-text").innerText = "USER WIN (Scissor beats Paper)"
        //scissor
        //paper
    }
    else {
    console.log("BOT WIN")
    document.getElementById("greeting-text").innerText = "BOT WIN"
    }
    
}