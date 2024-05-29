// 1) Class - Movie

class Movie {
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;    
    }

    static getPG(movies){
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);


const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG")
];

const pgMovies = Movie.getPG(movies);

pgMovies.forEach(movie => {
    console.log(movie.title, movie.studio, movie.rating);
});


// 2)class - Circle

class Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    toString(){
        return `[radius : ${this.radius}, color : ${this.color}]`;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;    
    }

    getCircumference(){
        return 2 * (Math.PI) * this.radius;
    }
}

var c1 = new Circle(1.0,"red");
console.log(c1);

console.log(c1.radius);

console.log(c1.radius,c1.color);

console.log(c1.getRadius());

c1.setRadius(3.0);

//console.log(c1.getRadius());

console.log(c1.getColor());

c1.setColor("blue");

//console.log(c1.getColor());

console.log('Circle - ' + c1.toString());

console.log(c1.getArea());

console.log(c1.getCircumference());

// 3) class Person

class Person {
    constructor(name, age, gender, qualification) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
    }
    
    getName(){
        return  this.name;
    }
    setName(){
        this.name = "Angel";
    }

    getAge(){
        return this.age;
    }
    setAge(){
        this.age = 23;
    }

    getGender(){
        return this.gender;
    }
    setGender(){
       this.gender = "female";
    }

    getQualification(){
        return this.qualification;
    }
    setQualification(){
       this.qualification = "BE"
    }
}

var p1 = new Person("john",32,"male","BSC");

console.log(p1);

p1.setName();

p1.setAge();

p1.setGender();

p1.setQualification();

console.log(p1);

// 4) class -  Uber

class UberPriceCalculator{
    constructor(baseFare,costPerKm,costPerMinute,bookingFee){
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInKm , timeInMinutes){
        var distanceCost = this.costPerKm * distanceInKm;
        var timeCost = this.costPerMinute * timeInMinutes;
        var totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalPrice;
    }
}

var calculate = new UberPriceCalculator(50,15,2,10);

var price = calculate.calculatePrice(10,20);

console.log(`The total Uber price is Rs.${price.toFixed(2)}`);

