var x = 200;
var y = 200;
var diameter = 50;
var mousex = 0;
var mousey = 0;
var speed = 20

function setup() 
{
    createCanvas(800, 600);
}

function draw() 
{
    background(239, 222, 231);
    fill(560);
    circle(x, y, diameter);

    if (x >= 300) 
    {
        x = 50;
    }

    if (y >= 300) 
    {
        y = 50;
    }

    if (diameter < 200) 
    {
        diameter += 2;
    } 

    else if (diameter >= 200) 
    {
        diameter = 25;
    }
    circle(mousex, mousey, 30);

    if (circlex = 600) //help
    {
        text('You Win!', 400, 300);
    }
}

function keyPressed() 
{
    if (key == 'd') 
    {
        mousex += speed;
    } 
    else if (key == 'a') 
    {
        mousex -= speed;
    }
    else if (key == 'w')
    {
        mousey -= speed;
    }
    else if (key == 's')
    {
        mousey += speed;
    }   
}