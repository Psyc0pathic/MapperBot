const talkedRecently = new Set();
module.exports = {
    name: 'metadata',
    description: "offers metadata help",
    async run (client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 10 seconds.`);
    } else {
        message.channel.send('Sort and format cover names and other miscellaneous titles\nhttps://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit\n*Maps attempting rank **must** follow metadata rules on correct namings.*');
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
    }
}