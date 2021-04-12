// gives you your position in ranks from the !pts command
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "rank",
    description: "Rank position from your point count",

    async run (client, message, args) {
        // sample usage:
        // !rank
        // "you are in 104th place with 5000 points"

        // side note: this code is horid because idk js all that well
        var ranks = db.all();
        ranks.sort(function(first, second) {
            return second.data - first.data;
           });

        let user = message.mentions.users.first() || message.author;
        
        let bal = db.get(`money_${message.guild.id}_${user.id}`);
        var position = -1;

        var subtract = 0;
        for (let index = 0; index < ranks.length; index++) {
            const element = ranks[index];
            if(!ranks[index].ID.startsWith("money")) subtract ++;
            if(ranks[index].ID == `money_${message.guild.id}_${user.id}`)
            {
                position = index-subtract;
                break;
            }
        }

        if(position == -1)
            message.channel.send(`You have not gained any points.`);
        else{
            position++;
            message.channel.send(`${user} is placed **${position.toString()}** with **${bal}** points`);
        }
    }   
    
}