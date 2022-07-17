const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'anya',
  description: "Waku Waku!",

  execute(message, args){
    const exampleEmbed = new MessageEmbed()
	    .setColor('#ec87c0')
	    .setTitle('𓁹‿𓁹')
	    .setAuthor({ name: 'Anya'})
      .setThumbnail('https://i.imgur.com/PpdzwQV.png')
	    .setDescription('Anya peanuts ga daisuki!');

    
    message.channel.send({ embeds: [exampleEmbed] });
  }
}
