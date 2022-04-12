var x = 400;
var y = 300;
var diameter = 50;
var mousex = 0;
var mousey = 300;
var speed = 20;
var movement = 1;
var a = 400;
var b = 500;
var diameter1 = 300;


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
    fill(130);
    circle(a, b, diameter1);
    if (a >= 700 || a <= 100)
    {
      movement*=-1;  
    }
    a += movement;

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
function mouseClicked()
{
    fill(200);
    circle(300, 200, 100); 
}