const talkedRecently = new Set();
module.exports = {
    name: "fruguide",
    description: "Link to Fruhead's mapping tutorials",

    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
    } else {
        message.channel.send("**Go in depth with Beatsaber mapping with Fruhead's video guides!**\n<https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm>");
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    }   
}