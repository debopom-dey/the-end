var canvas, backgroundImage,boy,track;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var student1, student2, student3
var students
function preload() {
 boy=loadImage("race.png") 
track=loadImage("raceTrack.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(34,177,76)
 
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
  
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
