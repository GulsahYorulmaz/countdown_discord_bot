const {MessageAttachment, MessageEmbed} = require('discord.js');

module.exports = {
  name: 'linkstart',
  description: "Link Start!",

  execute(message, args){
    message.delete();

    const exampleEmbed = new MessageEmbed()
	    .setColor('#ec87c0')
	    .setTitle('Welcome to Sword Art Online!')
      .setAuthor({ name: 'Kirito', iconURL: 'https://gulsahyorulmaz.github.io/images/kirito.png'})
      .setThumbnail('https://gulsahyorulmaz.github.io/images/linkstart.gif')
      .setImage('https://gulsahyorulmaz.github.io/images/kirito.gif');
    
      message.channel.send({ embeds: [exampleEmbed]})
      .then(exampleEmbed => setTimeout(() => exampleEmbed.delete(), 10000));
  }
}
