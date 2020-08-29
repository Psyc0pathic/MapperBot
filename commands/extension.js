const talkedRecently = new Set();
module.exports = {
    name: 'extension',
    description: "Gives technical mapping help",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('.DAT and .JSON, Mapping Extensions, Noodle Extensions, and other relating topics are offered here! - https://bsmg.wiki/mapping/extended-mapping.html');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}