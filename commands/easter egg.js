module.exports = {
    name: 'easteregg',
    description: "an easter egg",
    async run(client, message, args) {
        message.channel.send('Congrats! You found an Easter egg... William gey');
    }
}