var x = 0;
var speed = 5;

function setup(){
    createCanvas (600,400);
}
function draw(){
    background(50);
    // i wrote this to make the background green
    if(mouseIsPressed){
        background(0,255,65);
    }
    stroke(255);
    strokeWeight(6);
    if(mouseY<150){
        fill(0,255,65);
    }
    else{
        noFill();
    }
    //a circle
    ellipse(x,200,100,100);
    
    //this code is going to get the circle to move on it's own.

   
    
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN!!!")
         speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
}
