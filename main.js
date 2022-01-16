// main setting
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let groundY = (canvas.height - 250);
let upPressed = false;
let downPressed = false;
//

// event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//

// finish function to reset the game
function finish() {
    groundY = 250;
    upPressed = false;
    downPressed = false;
}
//

// when key down
function keyDownHandler(e) {
    console.log("pressed");
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

// when key is up
function keyUpHandler(e) {
    console.log("unpressed");
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}
//

//draw ground part (brown part)
function ground() {
    ctx.beginPath();
    ctx.rect(0, groundY, 1000, 500);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
}

//main function draw every thing
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //<= important
    ground();

    if(upPressed) {
        groundY -= 1;
    }
    else if(downPressed) {
        groundY += 1;
    }

    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(450, 250);
    ctx.lineTo(550, 250);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(500, 200);
    ctx.lineTo(500, 300);
    ctx.stroke();

    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.ellipse(500, 500, 250, 150, 0, Math.PI, true);
    ctx.fill();

    if (groundY < 0){
        alert("gameover");
        finish();
    }

    if (groundY > 500){
        alert("gameover");
        finish();
    }

}
//

// function to change y always
function add() {
    groundY -= Math.random() * (1 - 0.01); // use Math modlue to make random
}
//

//draw before everything start
draw();
//

//=================================================// button thing
const button = document.querySelector("#button");
let num = 0;
//

// function to control stop and start
function startOrStop(){
    num += 1;
    if(num === 1){
        ground(); // to draw thing at first
        setInterval(draw, 10); // start
        setInterval(add, 100); // start to add
    } else if(num === 2) {
        window.location.reload(); //refresh the page
    }
}
//

// event lister
addEventListener("click", startOrStop);
//