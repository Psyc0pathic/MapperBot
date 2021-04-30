const talkedRecently = new Set();
module.exports = {
    name: 'avatar',
    description: "sends png link of user avatar",
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`);
        } else {
            if (!message.mentions.users.size) {
                return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({format: "png", dynamic: true})}?size=1024>`);
            }

            const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL({format: "png", dynamic: false})}?size=1024>`;
            });
            message.channel.send(avatarList);
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 5000);
        }
    }
}

