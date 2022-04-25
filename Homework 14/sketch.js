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
        text(this.name + "has the zoomies!", 200, 200);
    }

    cuddle()
    {
        text(this.name + "loves cuddles", 150, 150);
    }
}

var leonberger = new Dog("Alice", "Leonberger", 120, black)
