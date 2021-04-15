const talkedRecently = new Set();
module.exports = {
    name: 'parity',
    description: "Help with parity",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('Parity is the idea that all notes have a preferred backhand/forehand swing, and that all patterns should go from backhand -> forehand -> backhand etc. It is important to have a good understanding of parity as a beginner');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }
}
