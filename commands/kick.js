module.exports = {
    name: 'kick',
    cooldown: 1,
    description: "this is a kicking command!",
    async run(client, message) {
        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);

            if (message.member.hasPermission("KICK_MEMBERS")) {

                member
                    .kick('Probably for spamming or being toxic. I am an automated msg.')
                    .then(() => {

                        message.reply(`Successfully booted ${user.tag}`);
                    })
                    .catch(err => {

                        message.reply('Unable to boot the member, try again.');

                        console.error(err);
                    });
            } else {

                message.reply("You do not have that permission.");
            }

        } else {
            message.reply("Mention the user to boot.");
        }
    }
}