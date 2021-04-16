const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "lb",
    description: "Check the sever's leaderboard",

    async run (client, message, args) {
        let money = db.all().filter(item => item.ID.startsWith("money_"));
        
        let content = "";
        
        let userToGet = message.mentions.users.first() || null;

        let start = 0;
        let end = 10;
        if(userToGet != null)
        {
            
            // get user's rank
            for (let index = 0; index < money.length; index++) {
                if (money[index].ID == `money_${message.guild.id}_${userToGet.id}`){
                    start = index-5;
                    if(start < 0) start = 0;
                    else content += `...\n`;
                    break
                }
                
            }
        }
        end = start+5;
        if (end > money.length) end = money.length;
        
        money.sort(function(first, second) {
            return second.data - first.data;
           });

        for (let i = start; i < end; i++){

            let username = message.guild.members.cache.get(money[i].ID.split("_")[2]);
            if(username == undefined)
            {
                content += `${i+1}. Unknown Player - ${money[i].data} \n`;
                continue;

            }
            let doBold = false;
            if (userToGet != null)
            {
                doBold = (username.id == userToGet.id);
                if (doBold) content += `**`
            }
            content += `${i+1}. ${username} - ${money[i].data} \n`;
            if (userToGet != null && doBold) content += `**`


        }
        if (end != money.length) content += '...';
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}'s Leaderboard`)
        .setDescription(`${content}`)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(embed);
    }
}