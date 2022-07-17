const {MessageAttachment, MessageEmbed} = require('discord.js');

module.exports = {
  name: 'rolldice',
  description: "Which Number Will It Be?",

  execute(message, args){
    const n = 6 * Math.random();
    if(n >= 0.0 && n < 1.0) {
      var result = "It's 1!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice1.png";
    } else if(n >= 1.0 && n < 2.0) {
      var result = "It's 2!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice2.png";
    } else if(n >= 2.0 && n < 3.0) {
      var result = "It's 3!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice3.png";
    } else if(n >= 3.0 && n < 4.0) {
      var result = "It's 4!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice4.png";
    } else if(n >= 4.0 && n < 5.0) {
      var result = "It's 5!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice5.png";
    } else if(n >= 5.0 && n < 6.0) {
      var result = "It's 6!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/dice6.png";
    }
    const exampleEmbed = new MessageEmbed()
	      .setColor('#ec87c0')
	      .setTitle('Roll Dice!')
        .setThumbnail(imageURL)
        .setDescription(result);
    
      message.channel.send({ embeds: [exampleEmbed]});
  }
}