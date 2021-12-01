// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log(`Successfully connected to game server`);
//     // conn.write("Name:Jon");
//   });

//   //handles incoming data
//   conn.on("data", function (message) {
//     console.log("server sent:", message);
//   });

//   conn.on();
//   return conn;
// };

// console.log("Connecting ...");
// connect();

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //When connected to the server
  conn.on("connect", () => {
    console.log(`Sucessfully connected to game server`);
    conn.write("Name: Jon");

    //Key strokes for moving the snake
    conn.write("Name:Jon");
  });
  //handles incoming data from the server
  conn.on("data", function (message) {
    console.log("server sent:", message);
  });
  return conn;
};

module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
