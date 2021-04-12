const talkedRecently = new Set();
module.exports = {
    name: 'helenguide',
    description: "HelenCarnate's Beatsaber mapping tutorial",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('**A 17 minute video guide for Beat Saber mapping from Helen Carnate**\nWatch here!: <https://www.youtube.com/watch?v=6O3sXmh-kAA>');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}
