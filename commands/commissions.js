const talkedRecently = new Set();
module.exports = {
    name: 'commissions',
    description: "description and link of commissions",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 20 seconds.`);
        } else {
            message.channel.send('Contact mappers, modelers and other modders for monetary requests here!\nhttps://discord.gg/h8VMkhn');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 20000);
        }
    }
}