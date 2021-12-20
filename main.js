const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'brown';
ctx.fillRect(0, 250, 1000, 500);

//가운데다 화살표 만들기

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.ellipse(500, 500, 250, 150, 0, Math.PI, true);
ctx.fill();