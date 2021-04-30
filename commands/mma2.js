const talkedRecently = new Set();
module.exports = {
    name: 'mma2',
    description: "gives mma2 link",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 10 seconds.`);
        } else {
            message.channel.send('Link to MediocreMapAssistant2 - https://git.bsmg.dev/Top_Cat/MediocreMapAssistant2/releases/latest');
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 10000);
        }
    }
}