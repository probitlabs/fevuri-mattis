"use strict";

var _nodeTelegramBotApi = require("node-telegram-bot-api");

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _http = require("http");

var ht = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_nodeTelegramBotApi2.default);
var bot = new _nodeTelegramBotApi2.default("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", { webHook: true });

fs.readFile("crt.pem", function (err, data) {
  if (err) throw err;
  //bot.setWebHook("https://fevuri.us.to:8443/", data.toString())
  bot.setWebHook("https://80.110.108.196:8443/", data.toString());
});

ht.createServer(function (req) {
  return console.log('==NEWS: ', req);
}).listen(8009);

/*bot.onText(/\/(.+)/, function (msg, match) {
})*/