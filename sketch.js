let colors; 
let angle = 0;
let colorChangeCounter = 0;
const colorChangeInterval = 30;

function setup() 
{
    createCanvas(400, 400);
    noStroke();

    colors = [
        color(128, 128, 128), //grey
        color (255, 255, 0), //yellow
        color(255, 0, 255), //magenta
        color(0, 255, 255) //cyan
    ];
}

function draw()
{
    background(220);
    let squareSize = width / 2;
    for (let i = 0; i < 2; i++)
    {
        for (let j = 0; j<2; j++)
        {
            push();
            translate(i * squareSize + squareSize / 2, j * squareSize + squareSize / 2);
            rotate(angle);
            let colorIndex = i + j * 2;
            fill(colors[colorIndex]);
            rectMode(CENTER);
            rect(0, 0, squareSize * 0.9, squareSize * 0.9);
            pop();
        }
    }
    angle += HALF_PI / 100;
    colorChangeCounter++;
    if (colorChangeCounter >= colorChangeInterval)
    {
        let lastColor = colors.pop();
        colors.unshift(lastColor);
        colorChangeCounter = 0;
    }
}
