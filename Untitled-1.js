function computerPlay(){
    const selection=["scissors","rock","paper"];
    return(selection[Math.floor(Math.random() *3 )]);
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
   const playerlose=2;
    const playerwin=1;
    const draw=0;
    /0 is 0 point , 1 is +1 player point 2 is +1 computer point /
      if (playerSelection==computerSelection){
          return draw;
       }  
     if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            return playerwin;
         }
         else{
             return playerlose;
         }
        }
      else if(playerSelection=="scissors"){
          if(computerSelection=="paper"){
              return playerwin;
          }
          else{
              return playerlose;
          }
      }
      else{
          if(computerSelection==rock){
              return playerwin;
          }
          else{
              return playerlose;
          }
      }
    } 
function game(){
  var computerpoints=0;
  var playerpoints=0;
  for (let i = 0; i < 5; i++) {
    var pS= window.prompt("enter rock paper or scissor");
    var cS=computerPlay();
    var flag=playRound(pS,cS);
    if(flag==0){
        console.log("it's a draw");
    }
    else if(flag==1){
        playerpoints++;
        console.log("player wins ,+1 for player");

    }
    else{
        computerpoints++;
        console.log("computer wins,+1 for computer");
    }

 }
 if(playerpoints>computerpoints){
     console.log("player wins the game");
 }
 else{
     console.log("computer wins the game");
 }
}
game();