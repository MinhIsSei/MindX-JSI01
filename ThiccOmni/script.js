var img = document.getElementById("omni1");
var container = document.getElementById("container");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("pop.mp3");
var audio2 = new Audio("music.mp3");
var music = document.getElementById("music")
var click = 0;

// mouseclick event
container.addEventListener("mousedown", function () {
  increaseScore();
  img.src = "ThiccOmniMan.png";
  audio.play();
});

container.addEventListener("mouseup", function () {
  img.src = "OmniMan.gif";
  audio.play();
});

body.addEventListener("keydown", function () {
  
  img.src = "ThiccOmniMan.png";
  audio.play();
});

body.addEventListener("keyup", function () {
  img.src = "OmniMan.gif";
  increaseScore();
  audio.play();
});

// touch event
container.addEventListener("touchstart", function () {
  increaseScore();
  img.src = "ThiccOmniMan.png";
  audio.play();
});

container.addEventListener("touchmove", function () {
  img.src = "OmniMan.gif";
  audio.play();
});

function increaseScore() {
  score++;
  count.innerHTML = score;
}


music.addEventListener("mousedown",function() {
  click ++;
  audio2.volume = 0.2;
  increaseCount();
});

function increaseCount() {
    if(click%2 == 0){
       audio2.pause()
    }else{
      audio2.play()
    }
}
// // Score on leaderboard
// setInterval(startCountHk, 1);

// function startCountHk(){
//     hk_score++;
//     document.getElementById("table").rows[1].cells.item(3).innerHTML = hk_score;
// }

// setInterval(startCountTw, 20);

// function startCountTw(){
//     tw_score++;
//     document.getElementById("table").rows[2].cells.item(3).innerHTML = tw_score;
// }

// setInterval(startCountTh, 25);

// function startCountTh(){
//     th_score++;
//     document.getElementById("table").rows[3].cells.item(3).innerHTML = th_score;
// }

// setInterval(startCountJp, 40);

// function startCountJp(){
//     jp_score++;
//     document.getElementById("table").rows[4].cells.item(3).innerHTML = jp_score;
// }

// setInterval(startCountFi, 34);

// function startCountFi(){
//     fi_score++;
//     document.getElementById("table").rows[6].cells.item(3).innerHTML = fi_score;
// }

// setInterval(startCountSe, 20);

// function startCountSe(){
//     se_score++;
//     document.getElementById("table").rows[7].cells.item(3).innerHTML = se_score;
// }

// setInterval(startCountPl, 15);

// function startCountPl(){
//     pl_score++;
//     document.getElementById("table").rows[8].cells.item(3).innerHTML = pl_score;
// }

// setInterval(startCountDm, 31);

// function startCountDm(){
//     dm_score++;
//     document.getElementById("table").rows[9].cells.item(3).innerHTML = dm_score;
// }

// setInterval(startCountId, 29);

// function startCountId(){
//     id_score++;
//     document.getElementById("table").rows[10].cells.item(3).innerHTML = id_score;
// }

// setInterval(startCountHu, 70);

// function startCountHu(){
//     hu_score++;
//     document.getElementById("table").rows[11].cells.item(3).innerHTML = hu_score;
// }

// setInterval(startCountSr, 5);

// function startCountSr(){
//     sr_score++;
//     document.getElementById("table").rows[12].cells.item(3).innerHTML = sr_score;
// }

