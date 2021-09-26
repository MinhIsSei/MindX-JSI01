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
