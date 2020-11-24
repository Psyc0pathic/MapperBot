const { MessageAttachment } = require('discord.js');

const Discord = require('discord.js');

const client = new Discord.Client();

const { prefix } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');

const config = require('./config.json');
client.config = config;

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`nothing`)
});

client.on("message", async message => {

	let blacklisted = ['anal','anus', 'beatsage', 'beat sage', 'ballsack','bastard', 'biatch','blowjob','boner','buttplug','clitoris','cunt','dick','dildo','fag','fellatio','fellate','fuck','fucking','nigger','nigga','penis','pussy','queer','retard','sex','slut','tits','twat','vagina','whore','wank']
    let foundInText = false;
	
	for (var i in blacklisted) {
	if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
		}
	if (foundInText) {
		message.delete();
    }

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
	}
	
	if (!message.content.startsWith(prefix)){
		
		if ((message.attachments.size > 0) && (message.content.startsWith('**Map:**') || message.content.startsWith('Map:'))) {
			let file = message.attachments.first().url;
			if (file.endsWith('.zip')){

				let fileName = file.split("/")[file.split("/").length - 1];
				fileName = file.split("/")[file.split("/").length - 1];
				fileName = file.split("/")[file.split("/").length - 1];
				fileName = file.split("/")[file.split("/").length - 1];

				const embed = new Discord.MessageEmbed()
				.setColor('#fdcb5a')
				.setTitle('3D Preview')
				.setURL('https://skystudioapps.com/bs-viewer/?url='+file)
				.setDescription('Zip Name: **'+fileName.replace('.zip', '')+'**')
				.setFooter('BS Viewer by +1 Rabbit')

			message.channel.send(embed);
			}
			else (message.channel.send('There is an error, please try again.'));
		}
		else if (message.content.toLowerCase().startsWith('wait, it\'s all') || message.content.toLowerCase().startsWith('wait, its all')){
			message.channel.send('Always has been.');
		}
		else if (message.content.toLowerCase().startsWith('rabbit')){
			message.channel.send('Peko.');
		}
		else if (message.content.toLowerCase().includes('the parity line')){
			const attachment = new MessageAttachment('https://i.imgur.com/yOVDset.png')
			message.channel.send('Common mapping practices suggest following the parity line when placing notes down.\nEach note is placed alternatingly from one side of the line to the other.\nThis ideal is unnecessary to follow because of creativity restrictions, but it is mainly for minimizing uncomfortable wrist movement.', attachment);
		}
		else if (message.content.toLowerCase().includes('my birthday') && message.content.toLowerCase().includes('today')){
			message.channel.send('Happy Birthday!');
		}
		else if ((message.content.toLowerCase().includes('i\'m') || message.content.toLowerCase().includes('im') || message.content.toLowerCase().includes('i am')) && message.content.toLowerCase().includes('hungry')){
			message.channel.send('Don\'t map with an empty stomach!');	
		}
		else if ((message.content.toLowerCase().includes('i\'m') || message.content.toLowerCase().includes('im') || message.content.toLowerCase().includes('i am')) && message.content.toLowerCase().includes('thirsty')){
			message.channel.send('Remember to stay hydrated, always.');	
		}
		else if (message.content.toLowerCase().includes('convert to ogg') || message.content.toLowerCase().includes('export to ogg')){
			message.channel.send('Convert all song files into .ogg files for mapping!\nhttps://bsmg.wiki/mapping/basic-audio.html#exporting\n*Always keep your maps\' audio files as .ogg since MMA2 converts all maps into .egg after zipping*');
		}
		else return;
	}

})


client.login(config.token);
