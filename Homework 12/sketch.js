var x = 300;
var y = 200;
var diameter = 50;
var mousex = 0;
var mousey = 300;
var speed = 20;

function setup() 
{
    createCanvas(800, 600);
}

function draw() 
{
    background(239, 222, 231);
    fill(0);
    circle(x, y, diameter);
    rect(700,300,100,50);
    rect(700,200,100,50);

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
    fill(255);
    //this is my player
    circle(mousex, mousey, 30);

    if (mousex > 800 && mousey > 250)
    
    {
        fill(0);
        textSize(25);
        text("You Win!", width/2-50, height/2-50);
    }
   console.log(mousex); 
   console.log(mousey);
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