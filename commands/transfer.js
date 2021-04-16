const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
    name:"transfer",
    description:"Transfers points between users",
    async run(client, message, args) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        }
    
        let balance = db.get(`money_${message.guild.id}_${message.author.id}`);
        
    
        if (!user) return message.channel.send("Please mention the user or input the user ID.");
        if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
        if (user.id === message.author.id || user === message.author) return message.channel.send("Cannot transfer pts to yourself.");
    
        let amount = parseInt(args[1]);
        if (!amount) return message.channel.send("Please input amount to transfer.");
        if (isNaN(amount)) return message.channel.send("Please input a valid number.");
        // isNaN = is Not a Number.
    
        if (!balance || balance == 0) return message.channel.send("Your wallet is empty.");
        if (amount > balance) return message.channel.send("The transfer cannot exceed your balance.");
        if (amount < 0) return message.channel.send("The transfer cannot be negative.");
        if (amount === 0) return message.channel.send("Cannot transfer nothing");
    
        await db.add(`money_${message.guild.id}_${user.id}`, amount);
        await db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
    
        return message.channel.send(`You've transferred your friends (${user.tag}) ${amount} pts!`);