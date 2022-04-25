class Dog {
    constructor(name, breed, weight, eyeColor, furColor) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.furColor = furColor;
    }
    zoomies()
    {
        text(this.name + " has the zoomies!", 200, 200);
    }

    cuddles()
    {
        text(this.name + " loves cuddles", 150, 150);
    }

    chomp()
    {
        text(this.name + " is chomping on their enemies.", 100, 100);
    }
}

var leonberger = new Dog("Alice", "Leonberger", 120, "black", "brown");

var cockerspaniel = new Dog("Sadie", "cockerspaniel", 15, "brown", "gold");

var germanShepherd = new Dog("Dune", "german shepherd", 40, "black", "brown");

function display()
{
    zoomies()
    {
        text(this.name + " has the zoomies!", 200, 200);
    }

    cuddles()
    {
        text(this.name + " loves cuddles", 150, 150);
    }

    chomp()
    {
        text(this.name + " is chomping on their enemies.", 100, 100);
    }
}

function setup()
{
    createCanvas (800,800);
}

function draw()
{
    background(242, 221, 222);
    fill(0);
    leonberger.cuddles();
    cockerspaniel.zoomies();
    germanShepherd.chomp();
    display();
}
