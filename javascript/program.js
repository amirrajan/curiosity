// fswatch program.js | xargs -n1 -I{} node program.js

var _ = require('underscore');

function move(rover, instructions) {
  rover.instructions = instructions.split('');
  rover.startingDirection = rover.direction;

  var movementDefinitions = {
    N: { F: { y:  1, x:  0 },
	 B: { y: -1, x:  0 } },
    S: { F: { y: -1, x:  0 },
	 B: { y:  1, x:  0 } },
    E: { F: { y:  0, x:  1 },
	 B: { y:  0, x: -1 } },
    W: { F: { y:  0, x: -1 },
	 B: { y:  0, x:  1 } }
  };

  _.each(rover.instructions, function(moveInstruction) {
    rover.x += movementDefinitions[rover.direction][moveInstruction].x;
    rover.y += movementDefinitions[rover.direction][moveInstruction].y;
  });
}

var rover = { };

rover = { x: 0, y: 0, direction: 'N', instructions: [] };
move(rover, 'FFB');
console.log(rover);

rover = { x: 0, y: 0, direction: 'S', instructions: [] };
move(rover, 'FFB');
console.log(rover);

rover = { x: 0, y: 0, direction: 'E', instructions: [] };
move(rover, 'FFB');
console.log(rover);

rover = { x: 0, y: 0, direction: 'W', instructions: [] };
move(rover, 'FFB');
console.log(rover);
