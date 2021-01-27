const talkedRecently = new Set();
module.exports = {
    name: 'glossary',
    description: "Mapping Glossary",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send("**Find terms commonly used in mapping and more here!:** <https://bsmg.wiki/mapping/glossary.html#a>");
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}
