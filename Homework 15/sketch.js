var x = 50;
    var y = 50;
    var diameter = 25;
    var x1 = 150;
    var y1 = 150;
    var diameter1 = 125;
    var myXs = [];
    var myYs = [];
    var myDiameters = [];

    function setup()
    {
        createCanvas(800,600);
        myXs[0] = 50;
        myYs[0] = 50;
        myDiameters[0] = 25;

        myXs[1] = 150;
        myYs[1] = 150;
        myDiameters[1] = 125;
    }

    function draw()
    {
        circle(myXs[0],myYs[0], myDiameters[0]);
        circle(myXs[1],myYs[1], myDiameters[1]);  
    }
