const talkedRecently = new Set();
module.exports = {
    name: 'njs',
    description: "Help for NJS related info",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send("**Don't know what NJS, HJD, JD, and all that jazz is?**\nWatch this video made by Bullet! https://streamable.com/2l7fz9\nRead up more about it here: <https://bsmg.wiki/mapping/basic-mapping.html#note-jump-speed>");
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}
