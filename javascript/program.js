// fswatch program.js | xargs -n1 -I{} node program.js

var _ = require('underscore');

function move(rover, instructions) {
  rover.instructions = instructions.split('');
  _.each(rover.instructions, function(c) {
    if (rover.direction == 'N') {
      if (c == 'F') {
	rover.y += 1;
      } else if (c == 'B') {
	rover.y -= 1;
      }
    } else if (rover.direction == 'S') {
      if (c == 'F') {
	rover.y -= 1;
      } else if (c == 'B') {
	rover.y += 1;
      }
    }
  });
}

var rover = {
  x: 0,
  y: 0,
  direction: 'S',
  instructions: []
};

move(rover, 'FFB');

console.log(rover);
