var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.

  var Bike = "gear";
  
  this.getGear = function(change){
    
  }
  this.setGear = function(change){
    
  }
  // Only change code above this line.
};

var myCar = new Car();

var myBike = new Bike();
