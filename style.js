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
    }
   else if (userInput == 0 && botInput == 2){
    console.log("USER WIN")
        //rock
        //scissor
   }
    else if (userInput == 1 && botInput == 0){
    console.log("USER WIN")

        //paper
        //rock
    }
    else if (userInput == 2 && botInput == 1 ){
    console.log("USER WIN")
        //scissor
        //paper
    }
    else {
    console.log("BOT WIN")}
    Bottext=document.getElementById(botInput)
    console.log("BOT=",botInput)
    gtext=document.getElementById("text")
    gtext.innerText="BOT=" + botInput
}