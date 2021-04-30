const talkedRecently = new Set();
module.exports = {
    name: 'chroma',
    description: "description and link of chroma",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 20 seconds.`);
        } else {
            message.channel.send('Add multi-colored lighting and other multi-colored designs here!\nhttps://discord.gg/BBntx2e');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 20000);
        }
    }
}
