const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  moveUp,
  moveDown,
  moveRight,
  moveLeft,
} = require("./constants");

let connection;

const movement = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = (data) => {
  if (data === "\u0003") {
    process.exit();
  } else if (data === moveUp) {
    connection.write("Say: MOVE");
    connection.write("Move: up");
  } else if (data === moveDown) {
    connection.write("Say: OUT");
    connection.write("Move: down");
  } else if (data === moveRight) {
    connection.write("Say: OF");
    connection.write("Move: right");
  } else if (data === moveLeft) {
    connection.write("Say: WAY");
    connection.write("Move: left");
  }
};

module.exports = setupInput;
