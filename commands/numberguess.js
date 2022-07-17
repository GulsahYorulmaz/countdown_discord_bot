const {MessageAttachment, MessageEmbed} = require('discord.js');
var guessedRight = false;
var trueValue = Math.floor(100 * Math.random()) + 1;

module.exports = {
  name: 'nguess',
  description: "Can You Guess The Number?",
  

  execute(message, args){
    if(guessedRight) {
      trueValue = Math.floor(100 * Math.random()) + 1;
    }
    const guess = args[0];
    
    if(trueValue > guess) {
      var result = "The Number is Higher!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/up.png";
      guessedRight = false;
    } else if(trueValue < guess) {
      var result = "The Number is Lower!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/down.png";
      guessedRight = false;
    } else if(trueValue == guess) {
      var result = "Congratulations!";
      var imageURL = "https://gulsahyorulmaz.github.io/images/congrats.png";
      guessedRight = true;
    }
    const exampleEmbed = new MessageEmbed()
	      .setColor('#ec87c0')
	      .setTitle('Guess The Number!')
        .setThumbnail(imageURL)
        .setDescription(result);
    
      message.channel.send({ embeds: [exampleEmbed]});
  }
}