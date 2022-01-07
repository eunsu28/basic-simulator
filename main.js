const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let groundY = 250;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    console.log("pressed")
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    console.log("unpressed")
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}


function draw(){

    if(upPressed) {
        groundY -= 7;
    }
    else if(downPressed) {
        groundY += 7;
    }

    ctx.fillStyle = 'brown';
    ctx.fillRect(0, groundY, 1000, 500);

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

}

function add() {
    groundY -= 1
}

setInterval(draw, 10);

setInterval(add, 100)
