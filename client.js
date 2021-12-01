const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //When connected to the server
  conn.on("connect", () => {
    console.log(`Sucessfully connected to game server`);
    conn.write("Name: Jon");

    //Key strokes for moving the snake
    // conn.write("Move: up");
  });
  //handles incoming data from the server
  conn.on("data", function (message) {
    console.log("server sent:", message);
  });
  return conn;
};

module.exports = connect;
