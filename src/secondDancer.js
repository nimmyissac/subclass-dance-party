var makeSecondDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeSecondDancer.prototype = Object.create(makeDancer.prototype);
makeSecondDancer.prototype.constructor = makeSecondDancer;

makeSecondDancer.prototype.step = function () {
 
 makeDancer.prototype.step.apply(this);
  //console.log(this.$node);
  // this.$node.animate({left: '+=20'}).removeClass( "dancer" ).addClass( "secondDancer" );
  this.$node.animate({"left": "-100px"}, 1000, function() { 
        $(this).animate({"left": "100px"}, 1000); 
    }).removeClass( "dancer" ).addClass( "secondDancer" );
  // this.$node.animate({right: '-=20'},100)
};

// makeSecondDancer.prototype.setPosition = function (top, left) {
//   top += 30; left+= 30;
//   makeDancer.prototype.setPosition.call(this,top,left);

//   var styleSettings = {
//     top: top,
//     left: left
//   };

//   this.$node.css(styleSettings);
// };
