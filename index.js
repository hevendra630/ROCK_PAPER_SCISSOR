let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".ROCK,.PAPER,.SCISSOR");      //here all the divs (rock,paper,scissors are in choices now)
const msg=document.querySelector("#MSG");

const userscorepara=document.querySelector("#USER-SCORE");
const compscorepara=document.querySelector("#COMP-SCORE");
const gencompchoice =()=>{
  const options = ["rock","paper","scissor"];
  const random=Math.floor(Math.random()*3);
  return options[random];
};
   const drawgame = ()=>{
    console.log("game is draw");
    msg.innerText="it's a draw play again nigga!!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
   };
   const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
      userscore++;
      userscorepara.innerText=userscore;
      console.log("you won!!");
      msg.innerText=`you won!! your ${userchoice} beats ${comchoice}`;
      msg.style.backgroundColor="green";
      msg.style.color="white";
    } else {
      computerscore++;
      compscorepara.innerText=computerscore;
      console.log("you lost haha lol!!");
      msg.innerText=`you lost!!  ${comchoice} beats ${userchoice}`;
      msg.style.backgroundColor="red";
    }
   }
 
 const playgame = (userchoice) =>{                                        // defined a function named playgame with a parameter (userchoice)
  console.log("user choice is ", userchoice);
  const comchoice=gencompchoice();
  console.log("computer choice is",comchoice);

  if(userchoice===comchoice){
    drawgame();
    //draw
  }else{
    let userwin=true;
    if(userchoice==="rock") {
      userwin=comchoice ==="paper"? false : true;
    } else if(userchoice==="paper"){
      userwin=comchoice==="scissor" ? false:true;
    } else {
      userwin=comchoice==="rock"?false:true;
    }
      showwinner(userwin,userchoice,comchoice);
  }

 };


choices.forEach((choice)=>{   
  console.log(choice) ;                           // each of the div in the choice div.
     choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id");
      playgame(userchoice);

     });

})




// references here

// 1️⃣ Declare Global Variables
// let userscore = 0;
// let computerscore = 0;

// const choices = document.querySelectorAll(".ROCK,.PAPER,.SCISSOR");
// const msg = document.querySelector("#MSG");
// const userscorepara = document.querySelector("#USER-SCORE");
// const compscorepara = document.querySelector("#COMP-SCORE");

// // 2️⃣ Generate Computer's Choice
// const gencompchoice = () => {
//   const options = ["rock", "paper", "scissor"];
//   const random = Math.floor(Math.random() * 3);
//   return options[random];
// };

// // 3️⃣ Handle Draw
// const drawgame = () => {
//   console.log("Game is a draw!");
//   msg.innerText = "It's a draw! Play again!";
// };

// // 4️⃣ Determine Winner
// const showwinner = (userwin, userchoice, comchoice) => {
//   if (userwin) {
//     userscore++;
//     userscorepara.innerText = userscore;
//     console.log("You won!");
//     msg.innerText = `You won! Your ${userchoice} beats ${comchoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     computerscore++;
//     compscorepara.innerText = computerscore;
//     console.log("You lost!");
//     msg.innerText = `You lost! ${comchoice} beats ${userchoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// // 5️⃣ Play Game Function
// const playgame = (userchoice) => {
//   console.log("User choice is", userchoice);
//   const comchoice = gencompchoice();
//   console.log("Computer choice is", comchoice);

//   if (userchoice === comchoice) {
//     drawgame();
//   } else {
//     let userwin = true;
//     if (userchoice === "rock") {
//       userwin = comchoice === "paper" ? false : true;
//     } else if (userchoice === "paper") {
//       userwin = comchoice === "scissor" ? false : true;
//     } else {
//       userwin = comchoice === "rock" ? false : true;
//     }

//     showwinner(userwin, userchoice, comchoice);
//   }
// };

// // 6️⃣ Add Click Events to Choices
// choices.forEach((choice) => {
//   console.log(choice);
//   choice.addEventListener("click", () => {
//     const userchoice = choice.getAttribute("id");
//     playgame(userchoice);
//   });
// });
