const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let groundY = 250;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}


function draw(){

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

    if(upPressed === true) {
        groundY += 7;
    } else if(downPressed === true) {
        groundY -= 7;
    }

}

function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: alert("Left"); break; //Left key
        case 38: alert("Up"); break; //Up key
        case 39: alert("Right"); break; //Right key
        case 40: alert("Down"); break; //Down key
        default: alert(code); //Everything else
    }
}

setInterval(check, 1)
setInterval(draw, 1);
//아래 화살표를 눌렀더니 위로 가는데 다시 안내려옴