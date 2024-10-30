const { Composer, InputMediaBuilder} = require("grammy");
const { Menu, MenuRange } = require("@grammyjs/menu");
const { I18n, hears } = require("@grammyjs/i18n");
const instagramGetUrl = require("instagram-url-direct")
const composer = new Composer();
const axios = require('axios')
const repl = require("node:repl");

const bot = composer.chatType("private")







bot.on('message', async (ctx)=>{
    const isVideo = ['mp4']
    const url = ctx.message.text
    const {message_id} = await ctx.reply('⏳')
    try{
        const { source, results_number} = await instagramGetUrl(url);
        const mediaGroup = source.map((v)=> isVideo.includes(v.extension)? InputMediaBuilder.video(v.url) : InputMediaBuilder.photo(v.url))
        await ctx.api.deleteMessage(ctx.chat.id, message_id)
        await ctx.replyWithMediaGroup(mediaGroup)


    }catch (error){
        console.log(error)
        await ctx.reply(`😔 Yuklashli iloji bo'lmadi...`)
    }
})







































module.exports =  bot