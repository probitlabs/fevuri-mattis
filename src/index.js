import * as Bot from "node-telegram-bot-api"

const bot = new Bot("198751085:AAE4MuyxQ3PcBiIF6sAu68EQTl6H08r6wDc", {polling:true})

bot.onText()
