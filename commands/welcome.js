module.exports = {
    name: 'welcome',
    description: "welcome text provided",
    async run (client, message, args) {

        if(message.member.roles.cache.has('484910757746835457') || message.member.roles.cache.has('506134989524434974')) {
            message.delete();
            message.channel.send(`**Welcome Mappers!** Review everything in <#734093338336034876> then check <#734103996125544458> for our role request form when ready to gain access to additional channels. Just starting out? Take a tour through the resources linked in <#734079874612068443> and feel free to ask questions in <#734240448314474527>. We\'re glad to have you!`);
        }
        else {
            message.channel.send('You do not have that command');
        }
    }
}