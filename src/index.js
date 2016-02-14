import * as Bot from "node-telegram-bot-api"
import * as fs from "fs"
const bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", {polling:true})

fs.readFile("cert.pem", (err, data)=> bot.setWebhook("https://www.example.com/token", data.toString()))

bot.onText(/\/(.+)/, function (msg, match) {
  if (match[1] === )
})
