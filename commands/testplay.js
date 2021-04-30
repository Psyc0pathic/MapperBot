const talkedRecently = new Set();
module.exports = {
    name: 'testplay',
    description: "gives testplay help",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
        } else {
            message.channel.send('Details regarding testplaying maps in any platform are given here! - https://bsmg.wiki/mapping/#playtesting');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 5000);
        }
    }
}