// Um desafio complexo em Mojo é criar e manipular gráficos e animações avançadas.
// Isso envolve o uso de bibliotecas ou APIs específicas para desenhar formas, renderizar elementos gráficos complexos e controlar a animação de elementos na tela. É necessário compreender conceitos como coordenadas, camadas, transições e cronometragem para criar visualizações interativas e envolventes.

import mojo from 'mojo';

const canvas = mojo.createCanvas(400, 400);
const context = canvas.getContext('2d');

function drawCircle(x, y, radius, color) {
context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI);
context.fillStyle = color;
context.fill();
}

function animateCircle() {
let x = 200;
let y = 200;
let radius = 20;
let color = 'blue';
let dx = 2;
let dy = 2;

function update() {
context.clearRect(0, 0, canvas.width, canvas.height);
drawCircle(x, y, radius, color);

if (x + radius > canvas.width || x - radius < 0) {
  dx = -dx;
}

if (y + radius > canvas.height || y - radius < 0) {
  dy = -dy;
}

x += dx;
y += dy;

requestAnimationFrame(update);
}

update();
}

mojo.addToDocument(canvas);
animateCircle();