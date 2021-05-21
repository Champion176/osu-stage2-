var formbg
var form,pointerimg,pointer,gameState
function preload()
{  
	formbg=loadImage ("js/download.jpg") 
    pointerimg=loadImage("js/osu circle.jpg")
}

function setup() {
	createCanvas(1200, 700);
form=new Form()
game=new Game()

//prompt("hi")


}


function draw() {
 
form.g1()
 form.display()
if(gameState===1 ){game.play()}
}



