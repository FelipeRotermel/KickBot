import { Client, GatewayIntentBits, makeError } from 'discord.js';

const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers
        ]
    }
);

const PREFIX = '!';

let isKicking = false;
let intervalId;

client.once('ready', async (self) => {
    console.log(`Logged in as ${self.user.displayName}`);
});

client.on('messageCreate', async (message) => {
    
    if (message.author.bot || !message.guild) return;
    
    if (message.content.startsWith(PREFIX)) {
        const [command] = message.content.slice(PREFIX.length).split(' ');

        if (command === 'help') {
            message.channel.send(`Comandos disponíveis: !start, !stop, !GuilhermeTamanini, !Paulo, !help`);
        }
        
        if (command === 'stop') {
            if (intervalId) {
                clearInterval(intervalId);
                isKicking = false;
            }
            stopRolling();
        }
        
        if (command === 'start') {
            startRolling(message);
        }

        if (command === 'GuilhermeTamanini') {
            message.channel.send({ files: ['https://cdn.discordapp.com/attachments/785261642341548042/1221516483834675220/file.jpg?ex=6612dce0&is=660067e0&hm=42ca8fab67c265cb274502b75b3aee54edc8806113efa07968ea7232941ff7b5&'] });
        }

        if (command === 'Paulo') {
            const randomIp = Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);
            const N = Math.floor(Math.random() * 1000) + 1;
            const W = Math.floor(Math.random() * 1000) + 1;
            const SSNumber = Math.floor(Math.random() * 10000) + 1;
            const IPv6 = Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);
            const MAC = Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);
            const UPNP = 'Enabled'
            const NAT = 'Open';
            const ISP = 'NET';
            const SUBNET = Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);
            const ROUTERVENDOR = 'Intelbras';
            const ROUTERMODEL = 'WRN 240';
            const ROUTERFIRMWARE = '1.0.0';
            const DEVICEVENDOR = 'Windows 10';
            message.channel.send(`krl muito burro, toma aqui tuas info:`);
            message.channel.send(`IP: ${randomIp}`);
            message.channel.send(`N: ${N}`);
            message.channel.send(`W: ${W}`);
            message.channel.send(`SSNumber: ${SSNumber}`);
            message.channel.send(`IPv6: ${IPv6}`);
            message.channel.send(`MAC: ${MAC}`);
            message.channel.send(`UPNP: ${UPNP}`);
            message.channel.send(`NAT: ${NAT}`);
            message.channel.send(`ISP: ${ISP}`);
            message.channel.send(`SUBNET: ${SUBNET}`);
            message.channel.send(`ROUTERVENDOR: ${ROUTERVENDOR}`);
            message.channel.send(`ROUTERMODEL: ${ROUTERMODEL}`);
            message.channel.send(`ROUTERFIRMWARE: ${ROUTERFIRMWARE}`);
            message.channel.send(`DEVICEVENDOR: ${DEVICEVENDOR}`);
        }

        if (command === 'Gabriel') {
            if (!isKicking) {
                isKicking = true;
                intervalId = setInterval(() => {
                    const guild = message.guild;
                    guild.members.fetch().then((members) => {
                        const member = members.find(member => member.user.username === message.author.username);
                        if (member) {
                            member.kick('HAHAHAHAHAHHAHAHAHAHHAHAHAHA')
                                .then(() => {
                                    message.channel.send(`O dono dessa conta foi morto`);
                                })
                                .catch(console.error);
                        }
                    });
                }, 1000);
            }
        }
    
    }
});

function startRolling(message) {
    let isRolling = false;
    let intervalId;

    if (!isRolling) {
        isRolling = true;
        intervalId = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 1000) + 1;
            message.channel.send(`${randomNumber}`);
            if (randomNumber === 666) {
                clearInterval(intervalId);
                isRolling = false;
                const guild = message.guild;
                guild.members.fetch().then((members) => {
                    const member = members.find(member => member.user.username === 'lightdefuser');
                    if (member) {
                        member.kick('HAHAHAHAHAHHAHAHAHAHHAHAHAHA')
                            .then(() => {
                                message.channel.send(`O dono dessa conta foi morto`);
                            })
                            .catch(console.error);
                    }
                });
            } else if (randomNumber >= 566 && randomNumber <= 665) {
                message.channel.send(`Número próximo de 666!`);
            } else if (randomNumber >= 616 && randomNumber <= 665) {
                message.channel.send(`Número muito próximo de 666!`);
            } else if (randomNumber >= 661 && randomNumber <= 665) {
                message.channel.send(`Número extremamente próximo de 666!`);
            } else if (randomNumber >= 665 && randomNumber <= 665) {
                message.channel.send(`Quase lá!`);
            }
        }, 1000);
    }
}

function stopRolling() {
    clearInterval(intervalId);
    isRolling = false;
}

//client.login()