const {MessageAttachment, MessageEmbed} = require('discord.js');

module.exports = {
  name: 'coinflip',
  description: "Heads or Tails?",

  execute(message, args){
    const n = Math.random();
    var m = 0.5;
    if(n > m) {
      var result = "Heads!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/1.png";
    } else {
      var result = "Tails!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/2.png";
    }
    const exampleEmbed = new MessageEmbed()
	      .setColor('#ec87c0')
	      .setTitle('Heads or Tails?')
        .setThumbnail(imageURL)
        .setDescription(result);
    
      message.channel.send({ embeds: [exampleEmbed]});
  }
}