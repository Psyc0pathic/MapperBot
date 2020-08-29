const talkedRecently = new Set();
module.exports = {
    name: 'audio',
    description: "Give audio help",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('Timing, volume levels, and song editing you can find here! - https://bsmg.wiki/mapping/#audio-editing-resources');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}
