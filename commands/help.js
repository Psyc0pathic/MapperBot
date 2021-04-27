const talkedRecently = new Set();
module.exports = {
    name: "help",
    description: "The help command",

    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('**Commands:** !guide, !audio, !extension, !light, !testplay, !metadata, !avatar, !mapping, !mma2, !chroma, !commissions, !scoresaber, !helenguide, !fruguide, !njs, !parity, !errorchecker\n**DiscordServers:** !commissions, !scoresaber\n*The bot updates from time to time.*');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }   
}