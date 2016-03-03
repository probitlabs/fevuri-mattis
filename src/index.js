import Bot from "node-telegram-bot-api"
import * as fs from "fs"
import * as https from "https"

console.log(Bot)
  const bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", {webHook:true})

fs.readFile("crt.pem", (err, data)=> {
  if (err) throw err
  //bot.setWebHook("https://fevuri.us.to:8443/", data.toString())
  bot.setWebHook("https://80.110.108.196:8443/", data.toString())
})

//TODO BUG Make https server
ht.createServer((req)=> console.log('==NEWS: ', req)).listen(8009);

/*bot.onText(/\/(.+)/, function (msg, match) {
})*/
