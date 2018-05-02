// // ES5 way
// function Dot(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Dot.prototype.showLocation = function() {
//     console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// var dot1 = new Dot(55, 20);
// dot1.showLocation();
// // ES6 way
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// const dot2 = new Dot(5, 13);
// dot2.showLocation();
// parent Dot class

// class Dot {
//     constructor(x, y) {
//          this.x = x;
//          this.y = y;
//      }
//      showLocation() {
//          console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//      }
//  }
//  // child Circle class
//  class Circle extends Dot {
//      constructor(x, y, radius) {
//          super(x, y);
//          this.radius = radius;
//      }
//  }
//  // we can now create Circles
//  const circle1 = new Circle(1, 7, 33);

//  // same attributes as a Dot, plus a radius
//  console.log(circle1);
//  // and Circles can access Dot methods
//  circle1.showLocation();
 
// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.showLocation();
        console.log(message);
    }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();
