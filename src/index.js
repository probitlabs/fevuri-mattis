import Bot from "node-telegram-bot-api"
import * as fs from "fs"
import * as ht from "http"

console.log(Bot)
const bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", {polling:true, webHook:true})

fs.readFile("crt.pem", (err, data)=> {
  if (err) throw err
  bot.setWebHook("https://localhost:8009/", data.toString())
})


ht.createServer((req)=> console.log(req)).listen(8009);

/*bot.onText(/\/(.+)/, function (msg, match) {
})*/
