const talkedRecently = new Set();
module.exports = {
    name: 'errorchecker',
    description: "Help on MMA2's error checker and Parity Checker",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
        } else {
            message.channel.send("MMA2's Error checker is a great tool to help you catch errors in your map that you might miss, know how to correctly use it here: <https://bsmg.wiki/mapping/mediocre-map-assistant.html#error-checker>\nAlternatively, if you can't use MMA2 for any reason, or just want to double down on making sure everything plays nicely, you can use GalaxyMaster's Parity Checker here!: <https://galaxymaster2.github.io/bs-parity/>");
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 5000);
        }
    }
}