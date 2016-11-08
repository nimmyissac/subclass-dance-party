// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


///////////////////////////////////////

//Questions we need to consider/explore more:
//are we calling step properly? is it supposed to be called/can it be called in the object itself the way we've done it?
//is the function within setTimeout written properly? need to confirm.

//not calling function properly in makeDancer.


var makeDancer = function (top, left, timeBetweenSteps) {
 
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
// makeDancer.prototype.oldStep = function () {
  
//   debugger;
//   setTimeout(this.step.bind(that), this.timeBetweenSteps);
//   console.log('i am old step! running!');

// };
makeDancer.prototype.setPosition = function (top, left) {
 console.log("Entering");
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

