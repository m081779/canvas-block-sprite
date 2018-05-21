const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width/2,
    y = canvas.height/2,
    moveSpeed = 20,
    keys = {};




function draw() {
    c.beginPath();
    c.rect(x, y, 20, 20);
    c.fillStyle = 'yellow';
    c.fill();
    c.lineWidth = 7;
    c.strokeStyle = 'black';
    c.stroke();

    c.beginPath();
    c.moveTo(40,40);
    c.lineTo(canvas.width-40, 40);
    c.lineTo(canvas.width-40, canvas.height - 40);
    c.lineTo(40, canvas.height - 40);
    c.lineTo(40, 40);
    c.lineWidth = 20;
    c.strokeStyle = 'black';
    c.stroke();
}


function update() {
    if (keys[38] && y > 55) {//up key
        y-=moveSpeed;;
    } else if (keys[39] && x < canvas.width-60) {//right key
        x+=moveSpeed;
    } else if (keys[40] && y < canvas.height-80) {//down key
        y+=moveSpeed;
    } else if (keys[37] && x > 50) {//left key
        x-=moveSpeed;
    }
    draw();
} 

function animate() {
    c.clearRect(0,0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    update();
}



document.addEventListener('keydown', function(e) {
    keys[e.keyCode || e.which] = true;
});

document.addEventListener('keyup', function(e) {
    keys[e.keyCode || e.which] = false;
    console.log(keys)
});
animate();
