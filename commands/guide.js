const talkedRecently = new Set();
module.exports = {
    name: 'guide',
    description: "Offer guide link",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
        } else {
            message.channel.send('Get started on your career in mapping! - https://bsmg.wiki/mapping/#mapping-quick-start');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 5000);
        }
    }
}