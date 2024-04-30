
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const starCount = 600;
const stars = [];
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    color: 'white'
  });
}


function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();
  }
}


function updateStars() {
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.x += Math.random() - 0.5;
    star.y += Math.random() - 0.5;

    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    //if (star.y > canvas.height) star.y = 0;
  }
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}


animate();


window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});