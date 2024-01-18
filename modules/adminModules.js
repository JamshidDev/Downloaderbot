const { Composer,Keyboard } = require("grammy");
const { Menu, MenuRange } = require("@grammyjs/menu");
const { I18n, hears } = require("@grammyjs/i18n");
const {
    createConversation,
} = require("@grammyjs/conversations");
const bot = new Composer();

bot.use(createConversation(base_menu))



async function base_menu(conversation, ctx){
    const admin_buttons = new Keyboard()
        .text("🔗 Admin kanallar")
        .text("✍️ Xabar yozish")
        .row()
        .text("📈 Umumiy statistika")
        .text("📊 Kunlik statistika")
        .resized()

    await ctx.reply(`⚡️ Asosy menyu ⚡️`,{
        reply_markup:admin_buttons
    })
}











const pm = bot.chatType("private");



pm.command('start', async (ctx)=>{
    await ctx.reply("Salom admin")
    await ctx.conversation.enter("base_menu");
})


























































module.exports = bot