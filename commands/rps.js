const {MessageAttachment, MessageEmbed} = require('discord.js');
var userScore = 0.0;
var botScore = 0.0;

module.exports = {
  name: 'rps',
  description: "Rock, Paper, Scissors!",

  execute(message, args){

    var value = Math.floor(3 * Math.random()) + 1;
    const userChoice = args[0];

    if(userChoice.toLowerCase() == 'rock' || userChoice == 1.0) {
      if(value == 1.0) { // rock
        var result = "It's a Tie!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/rr.png";
      } else if(value == 2.0) { // paper
        botScore++;
        var result = "You Lose!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/rp.png";
      } else if(value == 3.0) { // scissors
        userScore++;
        var result = "You Win!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/rs.png";
      }
    } else if(userChoice.toLowerCase() == 'paper' || userChoice == 2.0) {
      if(value == 1.0) { // rock
        userScore++;
        var result = "You Win!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/pr.png";
      } else if(value == 2.0) { // paper
        var result = "It's a Tie!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/pp.png";
      } else if(value == 3.0) { // scissors
        botScore++;
        var result = "You Lose!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/ps.png";
      }
    } else if(userChoice.toLowerCase() == 'scissors' || userChoice == 3.0) {
      if(value == 1.0) { // rock
        botScore++;
        var result = "You Lose!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/sr.png";
      } else if(value == 2.0) { // paper
        userScore++;
        var result = "You Win!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/sp.png";
      } else if(value == 3.0) { // scissors
        var result = "It's a Tie!";
        var imageURL = "https://gulsahyorulmaz.github.io/images/ss.png";
      }
    }
    
    if(userScore == 0) {
      if(botScore == 0) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/00.png";
      } else if(botScore == 1) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/01.png";
      } else if(botScore == 2) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/02.png";
      } else if(botScore == 3) {
        var result = `${message.author}, You Lose The Game!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/03.png";
      }
    } else if(userScore == 1) {
      if(botScore == 0) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/10.png";
      } else if(botScore == 1) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/11.png";
      } else if(botScore == 2) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/12.png";
      } else if(botScore == 3) {
        var result = `${message.author}, You Lose The Game!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/13.png";
      }
    } else if(userScore == 2) {
      if(botScore == 0) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/20.png";
      } else if(botScore == 1) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/21.png";
      } else if(botScore == 2) {
        var scoreURL = "https://gulsahyorulmaz.github.io/images/22.png";
      } else if(botScore == 3) {
        var result = `${message.author}, You Lose The Game!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/23.png";
      }
    } else if(userScore == 3) {
      if(botScore == 0) {
        var result = `Congratulations, ${message.author}! You Win!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/30.png";
      } else if(botScore == 1) {
        var result = `Congratulations, ${message.author}! You Win!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/31.png";
      } else if(botScore == 2) {
        var result = `Congratulations, ${message.author}! You Win The Game!`;
        var scoreURL = "https://gulsahyorulmaz.github.io/images/32.png";
      }
    }

    
    const exampleEmbed = new MessageEmbed()
	      .setColor('#ec87c0')
	      .setTitle('Rock, Paper, Scissors!')
        .setThumbnail(imageURL)
        .setDescription(result)
        .setImage(scoreURL);
    
      message.channel.send({ embeds: [exampleEmbed]});
  }
}