// var makeThirdDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
// };
// makeThirdDancer.prototype = Object.create(makeDancer.prototype);
// makeThirdDancer.prototype.constructor = makeThirdDancer;

// makeThirdDancer.prototype.step = function () {
 
//  makeDancer.prototype.step.apply(this);
//  //debugger;
//   // this.$node.animate({"right": "-10px"}, 1000, function() { 
//   //       $(this).animate({"right": "+10px"}, 1000); 
//   //   }).removeClass( "dancer" ).addClass("thirdDancer" );
//    //this.$node.animate({"right": "-10px"},500).removeClass( "dancer" ).addClass("thirdDancer" );
//  //this.$node.removeClass("dancer").addClass("thirdDancer" );
//  this.$node.removeClass("dancer");
//  this.$node.addClass("thirdDancer");
//  this.$node.css('display','inline');
//  //this.$node.toggle();
// };
var makeThirdDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeThirdDancer.prototype = Object.create(makeDancer.prototype);
makeThirdDancer.prototype.constructor = makeThirdDancer;

makeThirdDancer.prototype.step = function () {
 
 makeDancer.prototype.step.apply(this);
  this.$node.removeClass("dancer");
  this.$node.addClass("thirdDancer");
  this.$node.toggle();

};
