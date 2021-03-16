const talkedRecently = new Set();
module.exports = {
    name: 'soup',
    description: "soup",
    async run (client, message, args) {
        if(!talkedRecently.has(message.author.id))
            message.channel.send('soup\nhttps://cdn.discordapp.com/attachments/500326922509615105/821165696112656384/soop.mp4');
        else message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`)
    }
}