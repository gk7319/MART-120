// black circle
var x = 500;
var y = 300;
var diameter = 50;

// this is my player
var mousex = 0;
var mousey = 300;

// grey moving circle
var speed = 20;
var movement = 1;
var a = 400;
var b = 500;
var diameter1 = 300;

// mouse clicked circle 
var dotx;
var doty;


function setup() 
{
    createCanvas(800, 600);
    drawCharacter(mousex, mousey, 30);
}

function draw() 
{
    // this wipes out everything because it's being called all the time
    background(239, 222, 231); 

    // create player 
    drawCharacter ();

    // boarders
    createBoarder (10);

    // gates of success 
    gates ();

    // enemy movement 
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

    // enemy
    fill (0);
    circle(x,y,diameter);
    fill (130);
    circle(a,b,diameter1);
   
    // mouse clicked circle being called under draw
    circle(dotx, doty, 100); 

    // winner! 
    winner (20);

    // console.log(mousex); 
    // console.log(mousey);
}

function gates()
{
    rect(700,300,100,50);
    rect(700,200,100,50);
}

function createBoarder (thickness)
{
   // top border
   rect(0,0,width,thickness);
   // left border
   rect(0,0,thickness,height);
   // bottom border
   rect(0, height-thickness,width, thickness);
   // right upper border
   rect(width-thickness,0,thickness,height-50); 
}


function winner ()
{
   if (mousex > 800 && mousey > 250)
    {
        fill(0);
        textSize(25);
        text("You Win!", width/2-50, height/2-50);
    }  
}

function drawEnemies ()
{
    // this fill is for the growing black circle
    fill(0);
    circle(x, y, diameter);

    // this fill is for the grey circle
   fill(130);
   circle(a, b, diameter1); // grey circle that moves back and forth
}

function moveEnemy ()
{
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
}

// draws circle when mouse is clicked
function mouseClicked() // mouse clicked circle
{
    fill(200);
    dotx = mouseX; //call new variable since circle is under draw
    doty = mouseY;
    console.log("hi" + mouseY);
}

// this is my player
function drawCharacter ()
{
    fill(255);
    circle(mousex, mousey, 30);
}

// this moves my character around
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

