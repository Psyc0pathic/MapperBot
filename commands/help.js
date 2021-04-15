const talkedRecently = new Set();
module.exports = {
    name: "help",
    description: "The help command",

    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send('**Commands:** !audio, !avatar, !chroma, !commissions, !daily, !extension, !guide, !help, !lb, !light, !mapping, !metadata, !mma2, !pts, !rank, !say, !scoresaber, !testplay\n**DiscordServers:** !commissions, !scoresaber\n*The bot updates from time to time. When that happens, points taken from !daily will be reset for everyone.*');
        // "When that happens, points taken from !daily will be reset for everyone."
        // I see you Psy, giving yourself 1k points when the bot restarts 
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }   
}