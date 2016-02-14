import * as Bot from "node-telegram-bot-api"
import * as fs from "fs"
import * as ht from "http"

const bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", {polling:true})

fs.readFile("cert.pem", (err, data)=> bot.setWebhook("https://localhost:8009/", data.toString()))

ht.createServer((req)=> console.log(req)).listen(8009);

bot.onText(/\/(.+)/, function (msg, match) {
})
