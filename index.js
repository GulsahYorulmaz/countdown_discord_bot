const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const keepAlive = require("./server");
const prefix = '-';
const fs = require('fs');
const activities_list = [
    { type: 'PLAYING',  message: 'Aero Tales Online: The World'  },
    { type: 'WATCHING', message: 'an Anime' },
    { type: 'PLAYING', message: 'Aero Tales Online: The World' }
];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

        client.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
    }, 10000);
});

client.on('messageCreate', message => {

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === 'clear'){
    client.commands.get('clear').execute(message, args);
  } else if(command === 'reactionrole'){
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  } else if(command === 'anya'){
    client.commands.get('anya').execute(message, args);
  } else if(command === 'coinflip'){
    client.commands.get('coinflip').execute(message, args);
  } else if(command === 'rolldice'){
    client.commands.get('rolldice').execute(message, args);
  } else if(command === 'nguess'){
    client.commands.get('nguess').execute(message, args);
  } else if(command === 'linkstart'){
    client.commands.get('linkstart').execute(message, args);
  } else if(command === 'rps'){
    client.commands.get('rps').execute(message, args);
  } else if(command === 'countdown'){
    client.commands.get('countdown').execute(message, args);
  }

});

keepAlive();

//Define token in secrets tab
const token = process.env['token']
client.login(token)