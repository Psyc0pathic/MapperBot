const talkedRecently = new Set();
module.exports = {
    name: 'scoresaber',
    description: "description and link of scoresaber",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 20 seconds.`);
        } else {
            message.channel.send('Rank your maps here!\nhttps://discord.gg/WpuDMwU');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 20000);
        }
    }
}