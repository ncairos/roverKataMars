let roverKata = {
  direction: "N",
  position: [5,5]
};

//--->ROVER LEFT DIRECTION
function turnLeft(rover) {
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  };
console.log(`Rover Direction: ${rover.direction}`);
}
//CALL FUNCTION LEFT
//turnLeft(roverKata);


//--->ROVER RIGHT DIRECTION
function turnRight(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  };
 console.log(`Rover Direction: ${rover.direction}`);
}
//CALL FUNCTION RIGHT
//turnRight(roverKata);


//--->ROVER MOVE FORWARD
function moveForward(rover){
  switch(rover.direction) {
    case "N":
      rover.position[0]--;
      break;
    case "E":
      rover.position[1]++;
      break;
    case "S":
      rover.position[0]++;
      break;
    case "W":
      rover.position[1]--;
      break;
  };

console.log(`Rover Position: [${rover.position[0]}, ${rover.position[1]}]`)
}
//CALL FUNCTION MOVE FORWARD
//moveForward(roverKata);


//--->MULTIPLE COMMANDS
function roverCommands(commands) {
  for (let i = 0 ; i < commands.length ; i++) {    
    switch (commands[i]){
      case "f":
        moveForward(roverKata);
        break;
      case "l":
        turnLeft(roverKata);
        break;
      case "r":
        turnRight(roverKata);
        break;
    }
  }
}
//--->USER INPUT
let userOrder = "flflffl"

roverCommands(userOrder);