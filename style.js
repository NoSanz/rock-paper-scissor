function Userinput(){
userInput= document.getElementById("user in put").value
console.log(userInput)   
     botInput = Math.floor((Math.random() * 100 ) % 3 )
console.log(botInput) 

    // rock 0
    // paper 1
    //scisor 2
    if(userInpur == botInput){
        console.log("DRAW")
    }
   else if (userInput == 0 && botInput == 2){
        console.log("user win")
        //rock
        //scissor
    }
    else if (userInput == 1 && botInput == 0){
        console.log("user win")
        //paper
        //rock
    }
    else if (userInput == 2 && botInput == 1 ){
        console.log("user win")
        //scissor
        //paper
    }
    else console.log("botwin")
}
