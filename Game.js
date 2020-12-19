class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   // background(46,139,87)
    student1 = createSprite(800,200);
    student2 = createSprite(800,400);
    student3 = createSprite(800,600);
    student1.addImage("boy",boy)
    student2.addImage("boy",boy)
    student3.addImage("boy",boy)
    student1.scale=0.2
    student2.scale=0.2
    student3.scale=0.2
    students=[student1,student2,student3];
  }


  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      image(track, 0,0,displayWidth-40, displayHeight-40);
      var index = 0;
      var x ;
      var y=0;

      for(var plr in allPlayers){
        index = index + 1;
     
        x = displayWidth - allPlayers[plr].distance;
        y = y + 200;
        //y=400
        //students[index-1].x = x;
        students[index-1].y = y;
        

        if(index === player.index){
          students[index-1].shapeColor = "blue";
         
          camera.position.x = students[index-1].x-40;
          camera.position.y = displayHeight/2;
        }

      }
 
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance > 3000){
      gameState = 2;
    }
    drawSprites();
  }
  
  end(){
    console.log("Game Ended");
  }
}
