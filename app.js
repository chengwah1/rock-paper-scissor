let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const textResult_div = document.querySelector(".text-result");
const paper_img = document.querySelector(".paper");
const rock_img = document.querySelector(".rock");
const scissors_img = document.querySelector(".scissors");
const userResult_img = document.getElementById("userResult");
const compResult_img = document.getElementById("compResult");
const smalltext_div = document.querySelector(".small-text");
const rockImgScr = "./img/noun_rock_88661.png";
const paperImgScr = "./img/noun_Paper_88662.png";
const scissorsImgScr = "./img/noun_Scissors_88666.png";

// *******************
// *****Controller****
// *******************
paper_img.addEventListener('click',readUserInput);
rock_img.addEventListener('click',readUserInput);
scissors_img.addEventListener('click',readUserInput);

function readUserInput(e) {
    let userInput = e.target.dataset.userinput;
    console.log(userInput);
    let comp_Input = compInput();
    let match = userInput+comp_Input;
    let result = matching(match);
    renderUserPick(userInput);
    renderCompPick(comp_Input);
    scoreCal(result);
}

// *******************
// *****Model*********
// *******************

function compInput() {
    let compOption = ['r','p','s'];
    let index = Math.floor(Math.random()*3);
    return compOption[index];
}
function scoreCal(Result) {
    if (Result === 'win') {
        userScore++
        renderScoreBoard();
    }else if (Result === 'lose') {
        compScore++
        renderScoreBoard();
    }
}

function matching(match) {
    let result;
    switch(match) {
        case 'pr':
        textResult_div.innerHTML = "Paper covers rock. You win!";
        result = 'win';
        break;
        case 'rs':
        textResult_div.innerHTML = "Rock smash scissors. You win!";
        result = 'win';
        break;
        case 'sp':
        textResult_div.innerHTML = "Scissors cut paper. You win!";
        result = 'win';
        break;
        case 'ps':
        textResult_div.innerHTML = "Scissors cut paper. You lose!";
        result = 'lose';
        break;
        case 'rp':
        textResult_div.innerHTML = "Paper covers rock. You lose!";
        result = 'lose';
        break;
        case 'sr':
        textResult_div.innerHTML = "Rock smash scissors. You lose!";
        result = 'lose';
        break;
        case 'pp':
        textResult_div.innerHTML = "Paper and paper. Its a Draw";
        result = 'draw';
        break;
        case 'rr':
        textResult_div.innerHTML = "Rock and rock. Its a Draw";
        result = 'draw';
        break;
        case 'ss':
        textResult_div.innerHTML = "Scissors and scissors. Its a Draw";
        result = 'draw';
        break;
      }
      return result;
}



// *******************
// *****View**********
// *******************



function renderUserPick(e){
    if (e ==='r'){
        userResult_img.src = rockImgScr;
    } else if (e ==='p'){
        userResult_img.src = paperImgScr;
    } else userResult_img.src = scissorsImgScr;
}

function renderCompPick(e) {
    if (e ==='r'){
        compResult_img.src = rockImgScr;
    } else if (e ==='p'){
        compResult_img.src = paperImgScr;
    } else compResult_img.src = scissorsImgScr;
}

function renderScoreBoard() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}