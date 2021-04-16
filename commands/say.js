module.exports = {
    name: 'say',
    cooldown: 1,
    description: "say something thorugh bot",
    async run(client, message, args) {

        if (message.member.roles.cache.has('484910757746835457') || message.member.roles.cache.has('506134989524434974')) {
            let announcement = message.content.substring(4);
            if (announcement.length == 0)
                message.channel.send('Cannot send empty msg');
            else {
                message.delete();
                message.channel.send(announcement);
            }
        } else {
            message.channel.send('You do not have that command');
        }
    }
}