function setup()
{
    createCanvas(500,500);
    background(255);
    noStroke();

    //Square Colors
    colors =
    [
        color(128, 128, 128), //Grey
        color(255, 255, 0), //Yellow
        color(255, 0, 255), //Magenta
        color(0, 255, 255) //cyan
    ];
}

function draw()
{
let squareSize = width/2;
for (let i = 0; i < 2; i++)
    {
        for (let j = 0; j < 2; j++)
        {
            push();
            translate(i*squareSize+squareSize/2, j*squareSize + squareSize/2);
            rotate(angle);
            let colorIndex = i + j * 2;
            fill(colors[colorIndex]);
            rectMode(center);
            rect(0, 0, squareSize + 0.9, squareSize * 0.9);
            pop();
        }
    }
    let lastColor = colors.pop();
    colors.unshift(lastColor);
    angle += Half_PI/120; 
}