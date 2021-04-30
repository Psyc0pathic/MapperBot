const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "lb",
    description: "Check the sever's leaderboard",

    async run(client, message, args) {
        let money = db.startsWith(`money_${message.guild.id}`, {sort: '.data'})


        let start = 0;
        let end = 10;
        if(userToGet != null)
        {
            
            // get user's rank
            for (let index = 0; index < money.length; index++) {
                if(money[index].ID == `money_${message.guild.id}_${userToGet.id}`) {
                    start = index-5;
                    if(start < 0) start = 0;
                    else content += `...\n`;
                    break
                }
            }
        }
        end = start+5;
        if (end > money.length) end = money.length;
        
        money.sort(function(first, second){
            return second.data - first.data;
        });

        for (let i = 0; i < money.length; i++) {
            let user = client.users.cache.get(money[i].ID.split('_')[2]).username

            content += `${i + 1}. ${user} - ${money[i].data} \n`;

            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name}'s Leaderboard`)
                .setDescription(`${content}`)
                .setColor("RANDOM")
                .setTimestamp()

            message.channel.send(embed);
        }
    }
}