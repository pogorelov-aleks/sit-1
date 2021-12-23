var http = require("http");
const url = require("url");
const reqUrl = "https://test.codesandbox.io/?name=John";
const urlObject = url.parse(reqUrl, true);
const queryData = urlObject.query;
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDate = new Date();
const getDate = currentDate.getDay();
//create a server object:
http
  .createServer(function (req, res) {
    res.write(`Hello ${queryData.name} today is ${day[getDate]}`);
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
