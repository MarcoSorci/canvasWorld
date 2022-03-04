const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


context.fillStyle = "red";


// context.fillRect(10, 10, 30, 20);   //x,y,w,h, cartesian plane with origin in top left corner

// context.fillStyle = "blue"

// context.fillRect(20, 100, 300, 200)

// function draw(x, y) {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.fillStyle = "red"
//     context.fillRect(x, y, 30, 20);
// }

// let x = 0;
// let y = 0;
// let movementX = 5;
// let movementY = 5;

// const sprite = new RectSprite(0, 0, 50, 50, 5, 5, 'red')
// const sprite2 = new RectSprite(20, 45, 20, 20, 3, 10, 'magenta')

const sprites = [];
for (let i = 0; i < 40; i++) {
    // const x = Math.random() * (canvas.width - 100);
    // const y = Math.random() * (canvas.height - 100);
    // const w = (Math.random() * 99) + 1;
    // const h = (Math.random() * 99) + 1;
    // const sX = MathC.randomFloatFromInterval(-1,1);
    // const sY = MathC.randomFloatFromInterval(-1,1);
    // const c = getRandomColor();
    // const sprite = new RectSprite(canvas.width/2,canvas.height/2,1,1,sX,sY,c)
    // sprites.push(sprite)

    const radius = (Math.random() * 99) + 1;
    const x = MathC.randomIntFromInterval(radius, canvas.width - radius)
    const y = MathC.randomIntFromInterval(radius, canvas.height - radius)
    const sX = MathC.randomFloatFromInterval(-1, 1);
    const sY = MathC.randomFloatFromInterval(-1, 1);
    const c = getRandomColor();
    const sprite = new CircleSprite(x, y, radius, sX, sY, c)
    sprites.push(sprite)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    // draw(x, y);
    // x += movementX;
    // y += movementY;
    // if (x > canvas.width - 30 || x < 0) {
    //     movementX = movementX * -1
    // }
    // if (y > canvas.height - 20 || y < 0) {
    //     movementY = movementY * -1
    // }
    // context.fillStyle = "red";
    context.clearRect(0, 0, canvas.width, canvas.height);
    // sprite.draw(context);
    // sprite2.draw(context);
    // sprite.update(canvas);
    // sprite2.update(canvas);
    for (const sprite of sprites) {
        sprite.draw(context)
        sprite.update(canvas)
    }
}, 30);