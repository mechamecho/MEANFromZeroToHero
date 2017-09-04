require("./instantHello");
var goodbye = require('./talk/goodbye');
var talk = require("./talk");//don't have to specify index.js
var question= require('./talk/question');

talk.intro();
talk.hello("Nafissa")

var answer= question.ask("What is the meaning of life?");
console.log(answer);

goodbye();
