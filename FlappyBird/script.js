var score = document.getElementById("score");
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 1;
var best = 0;
var time = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(() => {
    time++
}, 1000)

setInterval(function(){
    console.log(counter)
    score.innerHTML = "<b>Time: " + time + "s	• Score: " + ( counter - 1 ) + "	• Best: " + best + "</b>"
    if(best < counter - 1) best = counter - 1

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(520-characterTop);
    if((characterTop>500)||((blockLeft<20) && (blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130))) || characterTop<20){
        alert("Game over.   Time: " + time + "s   Score: " + (counter-1) + "   Best: " + best);
        character.style.top = 100 + "px";
        counter = 0;
        time = -2;
    }
    if(time === -1){
        time = 0
    }
}, 10);

document.addEventListener("keydown", event => {
    if(event.key === " " || event.key.toLowerCase() === "w" || event.key === "ArrowUp"){
        jump()
    }
})

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    }, 10);
}