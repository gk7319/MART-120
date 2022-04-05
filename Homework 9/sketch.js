var x = 550;
var y = 580; 
var rl = 430;
var movement = 1

function setup()
{
    createCanvas(1000,1000);
}
function draw()
{
    background(235,210,209);
    console.log("hi");
    textSize(40);
    text('She is Beauty', 10, 30);
    text('She is Grace',500,800);
    // head
    circle(500,200,200);
    //body
    ellipse(500,450,200,300);
    //arms
    rect(610,320,20,200);
    rect(570,320,40,20);
    //shoulders
    rect(370,320,20,200);
    rect(370,320,60,20);
    //eyes
    circle(450,200,50);
    circle(550,200,50);
    //mouth
    line(550,250,500,250);
    //legs
    rect(x,y,20,150);
    console.log(x)
    if(x >= 900)
    {
     movement*=-1;
    }
        x += movement;
    rect(rl,y,20,150);
    rl++;
    //inside eyes
    triangle(450,220,460,210,440,190);
    triangle(550,220,560,210,540,190);
    point(450,210);
    point(550,210);
    //two shapes moving back and fourth on x-axis
    //two shapes moving back and fourth on y-axis
    //shapes move at random speeds
    //make one shape move back and fourth along the x and y-axis (diagonally)
    //portait gets five times bigger and then smaller - repeat
    //extra credit
        //make head get bigger and then smaller continuously 
        //change colors of shapes every time they hit the wall 
        //change name text so it moves in a sqaure pattern
}