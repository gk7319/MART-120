var x = 200;
var y = 800;
var diameter = 50;
var mousex = 0;
var mousey = 0;
var s = 83;
var w = 87;
var a = 65;
var d = 68;

var myXs = []; // create an array for the x coordinate
var myYs = []; // create an array for the y coordinate
var myDiameters = []; // create array for the diameter of circles

function setup() 
{
    createCanvas(800, 600);
    // create a for loop here to create the circles
    for(var i = 0; i < 2; i++)
        {
            // get all the random numbers to create a circles
            myXs[i] = getRandomNumber(800);
            myYs[i] = getRandomNumber(600);
            myDiameters[i] = getRandomNumber(100);
        }
}

function draw() 
    {
      background(250,220,230);
      
      fill(255);
      circle(x, y, diameter);

      // call the function created
      controlCircle();

      ellipse(mousex, mousey, 15, 50);

      for(var i = 0; i < myXs.length; i++)
      {
        // concentric circle randomly using arrays
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
      }
   }

    /* This function controls all the variables of the circle */
function controlCircle()
{
    if (x >= 300) 
    {
        x = 50;
    }
      
    if (y >= 300) 
    {
        y = 50;
    }

    if (keyIsDown(s)) 
    {
        y += 10;
    } 
    else if (keyIsDown(w)) 
    {
        y -= 10;
    }

    if (keyIsDown(d)) 
    {
        x += 10;
    } 
    else if (keyIsDown(a)) 
    {
        x -= 10;
    }
  
    // we call the function here.
    changeDiameter();

}

    // This function updates the size of the circle
function changeDiameter()
{
    if (diameter < 200) 
    {
        diameter += 2;
    } 
    else if (diameter >= 200) 
    {
        diameter = 25;
    }

}

function mouseMoved() 
{  
    mousex = mouseX;
    mousey = mouseY;
    
}

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
}

// define ConcentricCircle function
function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
{
    fill(outer_red,outer_green, outer_blue);
    circle(x,y,outer_diameter);
    fill(inner_red, inner_green, inner_blue);
    circle(x,y,inner_diameter);
}
