const talkedRecently = new Set();
module.exports = {
    name: "help",
    description: "The help command",

    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);

    } else {
        message.channel.send('**Commands:** !audio, !avatar, !chroma, !daily, !errorchecker, !extension, !fruguide, !guide, !helenguide, ~~!help~~, !lb, !light, !mapping, !metadata, !mma2, !njs, !rank, !parity, !pts, !rpattern, !scoresaber, !testplay, !transfer\n**DiscordServers:** !commissions, !scoresaber\n*The bot updates from time to time.* When that happens, all points gained through the !daily command will be reset.');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }   
}

