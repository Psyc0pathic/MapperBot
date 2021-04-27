const talkedRecently = new Set();
const maxIndex = 4; // x
const maxLayer = 3; // y
const emojiNote = {
    0: {
        0: '<:noteRU:555448463987441674>',
        1: '<:noteRD:555448463920332811>',
        2: '<:noteRR:555448463626600459>',
        3: '<:noteRL:555448463454633986>',
        4: '<:noteRUL:555448463714811911>',
        5: '<:noteRUR:555448796507799557>',
        6: '<:noteRDL:555448463471673357>',
        7: '<:noteRDR:555448463928721420>',
        8: '<:noteRND:555448463568142339>',
    },
    1: {
        0: '<:noteBU:555448464696279083>',
        1: '<:noteBD:555448463479799818>',
        2: '<:noteBR:555448463354232834>',
        3: '<:noteBL:555448463471411217>',
        4: '<:noteBUL:555448463878389770>',
        5: '<:noteBUR:555448463970664448>',
        6: '<:noteBDL:555448463303770136>',
        7: '<:noteBDR:555448463383330827>',
        8: '<:noteBND:555448463517548555>',
    },
    2: { 0: '<:bomb:555448464016801792>' },
};
const blank = '<:anone:623604035907354654>';
module.exports = {
    name: 'rpattern',
    description: 'Random pattern commands.',
    async run(client, message, args) {
        if (talkedRecently.has(message.author.id)) {
            return message.channel.send(`**${message.author.tag}**, Wait 3 seconds.`);
        }
        if (args.length > 4) {
            return message.channel.send(`no.`);
        }
        let unset = true;
        let totalSet = false;
        let total = 2;
        let totali = Number.MAX_SAFE_INTEGER;
        const note = [0, 0, 0];
        args.forEach((arg) => {
            if (/^\d{1,2}[BbRrXx]?$/.test(arg)) {
                if (/[Rr]$/.test(arg)) {
                    note[0] = parseInt(arg.replace(/^[Rr]?$/, ''));
                    unset = false;
                }
                if (/[Bb]$/.test(arg)) {
                    note[1] = parseInt(arg.replace(/^[Bb]?$/, ''));
                    unset = false;
                }
                if (/[Xx]$/.test(arg)) {
                    note[2] = parseInt(arg.replace(/^[Xx]?$/, ''));
                    unset = false;
                }
            }
            if (/^\d{1,2}$/.test(arg)) {
                totali = parseInt(arg);
                totalSet = true;
            }
        });
        // deal with total
        if (!totalSet) {
            total = 2;
        }
        if (totalSet) {
            total = Math.min(totali, maxIndex * maxLayer);
        }
        if (!unset && !totalSet) {
            total = Math.min(note[0] + note[1] + note[2], maxIndex * maxLayer);
        }
        if (!unset && totalSet) {
            total = Math.min(totali, note[0] + note[1] + note[2], maxIndex * maxLayer);
        }

        // if unset, distribute evenly
        if (unset) {
            note[0] = Math.floor(total / 2);
            note[1] = total - note[0];
        }

        if (total === 0 || (note[0] === 0 && note[1] === 0 && note[2] === 0)) {
            return message.channel.send('There is no note.');
        }
        const grid = new Array(maxIndex * maxLayer).fill(null);
        for (let i = 0; i < total; ) {
            let randomIL = Math.floor(Math.random() * maxIndex * maxLayer);
            let randomDir = Math.floor(Math.random() * 9);
            let randomNote = Math.floor(Math.random() * 3);
            for (let j = 0; j < 3; j++) {
                if (note[randomNote] === 0) {
                    randomNote = (randomNote + 1) % 3;
                }
            }
            if (note[randomNote] === 0) {
                break;
            }
            for (let j = 0; j < maxIndex * maxLayer; j++) {
                let pos = (randomIL + j) % (maxIndex * maxLayer);
                if (grid[pos] === null) {
                    if (randomNote === 2) {
                        randomDir = 0;
                    }
                    grid[pos] = emojiNote[randomNote][randomDir];
                    note[randomNote]--;
                    i++;
                    break;
                }
            }
        }
        let msg = '';
        for (let l = 0; l < maxLayer; l++) {
            for (let i = 0; i < maxIndex; i++) {
                if (grid[l * maxIndex + i] !== null) {
                    msg += grid[l * maxIndex + i];
                } else {
                    msg += blank;
                }
            }
            msg += '\n';
        }
        message.channel.send(msg);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 3000);
    },
};
