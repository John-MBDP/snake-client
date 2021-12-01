const connect = require("./client");

const setupInput = function () {
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
  }
};

module.exports = setupInput;
