"use strict"
//create object
var player1 = {
	name: "Fred",
	score: 10000,
	rank: 1,
};
// add property
player1.gameType = "MMORPG";
// add method
player1.logScore = function() {
	console.log(this.score)
};
//call method
player1.logScore();



function Player(n,s,r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	console.log("I am" , this.name);
}

Player.prototype.promote = function() {
	this.rank++;
	console.log("player " + this.name + " promoted to rank " + this.rank);
}

var fred = new Player("Fred",1000,2);
fred.logInfo();
fred.promote();

var bob = new Player("Bob",50,1);
bob.logInfo();
bob.promote();
