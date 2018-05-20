// fswatch program.js | xargs -n1 -I{} node program.js

var _ = require('underscore');

function move(rover, instructions) {
  rover.instructions = instructions.split('');
  _.each(rover.instructions, function(c) {
    if (c == 'F' && rover.direction == 'N') {
      rover.y += 1;
    } else if (c == 'B' && rover.direction == 'N') {
      rover.y -= 1;
    }
  });
}

var rover = {
  x: 0,
  y: 0,
  direction: 'N',
  instructions: []
};

move(rover, 'FFB');

console.log(rover);
