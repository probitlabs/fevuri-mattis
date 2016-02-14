"use strict";

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _http = require("http");

var ht = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Bot = require("node-telegram-bot-api"); // TODO hack


console.log(Bot);
var bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", { polling: true, webHook: true });

fs.readFile("crt.pem", function (err, data) {
  if (err) throw err;
  bot.setWebHook("https://localhost:8009/", data.toString());
});

ht.createServer(function (req) {
  return console.log(req);
}).listen(8009);

/*bot.onText(/\/(.+)/, function (msg, match) {
})*/