const talkedRecently = new Set();
module.exports = {
    name: 'soup',
    description: "soup",
    async run (client, message, args) {
        if(message.channel.id == "500326922509615105")
        {
            // untested bcz idk JS
            if(!talkedRecently.has(message.author.id)) 
            {
                message.channel.send('soup', {files:["./attachements/soop.mp4"]});
                talkedRecently.add(message.author.id);
                setTimeout(() => {
                  talkedRecently.delete(message.author.id);
                }, 5000);
            }
            else message.channel.send(`**${message.author.tag}**, Wait 5 seconds.`)
        }
    }
}