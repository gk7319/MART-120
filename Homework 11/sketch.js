var x = 550;
var y = 580;
var movement = 1;
var size = 44;
var count = 0;
var sizedirection = 2;
var a = 430;
var b = 610;
var c = 320;
var d = 570;
var movement2 = 1
var e = 370
var movement3 = 1
var f = 320

function setup()
{
    createCanvas(1000,1000);
    movement = floor(random() * 10) + 1;
}
function draw()
{
    background(235,210,209);
    text('She is Grace',500,800);
    console.log("hi");
    textSize(size);
    size+= sizedirection;
    count++;
    if(count > 5)
    {
        sizedirection *= -1;
        count = 0;
    }
    text('She is Beauty', 10, 30);
  
    // head
    circle(500,200,200);
    // body
    ellipse(500,450,200,300);
    // right arm 
    rect(b,c,20,200);
    if (c <= 100 || c >= 800)
    {
        movement2*=-1;
    }
    c += movement2;
    // right shoulder
    rect(d,c,40,20);
    if (d <= 100 || d >= 800)
    {
        movement2*=-1;
    }
    d += movement2;
    // left arm
    rect(e,f,20,200);
    if (f <= 100 || f >= 800)
    {
        movement3*=-1;
    }
    f += movement3;
    //left shoulder
    rect(370,320,60,20);
    // eyes
    circle(450,200,50);
    circle(550,200,50);
    // mouth 
    line(550,250,500,250);
    // Legs
    rect(x,y,20,150);
    if (x >= 900 || x <= 100)
    {
      movement*=-1;  
    }
    x += movement;
    rect(a,y,20,150);
    if (a >= 900 || a <= 100)
    {
      movement*=-1;  
    }
    a += movement;

    //eyes
    triangle(450,220,460,210,440,190);
    triangle(550,220,560,210,540,190);
    point(450,210);
    point(550,210);
    
}