const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Well Hello there! I have been created by hypixej.');
  	}
});

client.on("message", (message) => {
  if(message.content === "alert") {
    message.channel.send("**[BOT UPDATE]** \nAll the bot updates will be made by the bot now! ( @here )");

  }
});
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'joinleave');
  if (!channel) return;
 channel.send(` **[Joined]** ${member} Welcome to ROBLOX OFFICIAL Discord server!`);
});

client.on('guildMemberRemove' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'joinleave');
  if (!channel) return;
 channel.send(` **[Left]** ${member} Hope we see you soon! ;)`);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
