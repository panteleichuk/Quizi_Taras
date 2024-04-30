let x = 0,
    y = 0;

document.addEventListener('keydown', function(e){
  if(e.keyCode == 37) y -= 5;
  if(e.keyCode == 39) y += 5;
  if(e.keyCode == 38) x += 5;
  if(e.keyCode == 40) x -= 5;
 
 document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});