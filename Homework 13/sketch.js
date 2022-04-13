var x = 500;
var y = 300;
var diameter = 50;
var mousex = 0;
var mousey = 300;
var speed = 20;
var movement = 1;
var a = 400;
var b = 500;
var diameter1 = 300;
var dotx;
var doty;


function setup() 
{
    createCanvas(800, 600);
}
function mouseClicked()
{
    fill(200);
    dotx = mouseX //call new variable since circle is under draw
    doty = mouseY
    console.log("hi" + mouseY)
}
function draw() 
{
    background(239, 222, 231); // this mf wipes out everything because it's being called all the time
    fill(0);
    circle(x, y, diameter);
    rect(700,300,100,50);
    rect(700,200,100,50);
    circle(dotx, doty, 100); 
    fill(130);
    circle(a, b, diameter1);
    if (a >= 700 || a <= 100)
    {
      movement*=-1;  
    }
    a += movement;

   /* if (x >= 300) 
    {
        x = 50;
    }

    if (y >= 300) 
    {
            y = 50;
    }*/

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
    //console.log(mousex); 
    // console.log(mousey);
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

