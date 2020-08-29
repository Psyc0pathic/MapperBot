const talkedRecently = new Set();
module.exports = {
    name: 'light',
    description: "Gives lighting help",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('Find lighting practices, both basic and intermediate here! - https://bsmg.wiki/mapping/#lighting-practices');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}