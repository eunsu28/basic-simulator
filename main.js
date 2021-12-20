const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'brown';
ctx.fillRect(0, 250, 1000, 500);

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