const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(450, 200, 100, 100);
ctx.clearRect(460, 210, 80, 80);

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.ellipse(500, 500, 250, 150, 0, Math.PI, true);
ctx.fill();