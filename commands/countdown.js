const {MessageAttachment, MessageEmbed} = require('discord.js');

module.exports = {
  name: 'countdown',
  description: "Countdown to Launch!",

  execute(message, args){
    var currentdate = new Date(); 
    var datetime = "Date & Time: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    console.log(datetime);

    var currentYear = currentdate.getFullYear();
    var currentMonth = (currentdate.getMonth()+1);
    var currentDay = currentdate.getDate();
    var currentHour = currentdate.getHours();
    var currentMinute = currentdate.getMinutes();
    var currentSecond = currentdate.getSeconds();

    var launchYear = 2022;
    var launchMonth = 8;
    var launchDay = 2;
    var launchHour = 15;
    var launchMinute = 0;
    var launchSecond = 0;

    //
    if(launchSecond < currentSecond) {
      launchSecond += 60;
      launchMinute = launchMinute - 1;
    }
    if(launchMinute < currentMinute) {
      launchMinute += 60;
      launchHour = launchHour - 1;
    }
    if(launchHour < currentHour) {
      launchHour += 24;
      launchDay = launchDay - 1;
    }
    if(launchDay < currentDay) {
      // borrow days from february
      if (launchMonth == 3) {
        //  check whether year is a leap year
        if ((launchYear % 4 == 0 && launchYear % 100 != 0) || (launchYear % 400 == 0)) {
          launchDay += 29;
        } else {
          launchDay += 28;
        }
      }
      // borrow days from April or June or September or November
      else if (launchMonth == 5 || launchMonth == 7 || launchMonth == 10 || launchMonth == 12) {
        launchDay += 30;
      }
      // borrow days from Jan or Mar or May or July or Aug or Oct or Dec
      else {
        launchDay += 31;
      }
      launchMonth = launchMonth - 1;
    }
    
    if (launchMonth < currentMonth) {
      launchMonth += 12;
      launchYear -= 1;
    }

    var sec_diff = launchSecond - currentSecond;
    var min_diff = launchMinute - currentMinute;
    var hour_diff = launchHour - currentHour;
    var day_diff = launchDay - currentDay;
    var mon_diff = launchMonth - currentMonth;
    var year_diff = launchYear - currentYear;
    //

    const exampleEmbed = new MessageEmbed()
	    .setColor('#ec87c0')
	    .setTitle(`Last ${day_diff} days, ${hour_diff} hours, ${min_diff} minutes, ${sec_diff} seconds.`);
    
      message.channel.send({ embeds: [exampleEmbed]});
  }
}
