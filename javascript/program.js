// fswatch program.js | xargs -n1 -I{} node program.js

var _ = require('underscore');

function move(rover, instructions) {

}

var rover = {
  x: 0,
  y: 0
};

move({ }, 'FFB');

console.log(rover);
