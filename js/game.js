class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
   
                     }  
                     
                     fill("white");
                     textSize(30);
                     text(allPlayers.player1.name +"'s Score: " + allPlayers.player1.score, 50, 50);
                     text(allPlayers.player2.name+"'s Score: " + allPlayers.player2.score, 50, 80);
                 }
          
                if (keyIsDown(RIGHT_ARROW) && player.index !== null && device === "laptop") {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null && device === "laptop") {
                    player.distance += 10
                    player.update();
                }

                if(device === "mobile"){
                    if(mouseX > 750 && mouseIsPressed){
                        player.distance -= 10;
                        player.update();
                    }

                    if(mouseX < 250 && mouseIsPressed){
                        player.distance += 10;
                        player.update();
                    }
                }

                 if (frameCount % 30 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                    //  console.log(rand);

                     switch(Math.round(random(1,6))){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                                points = 1;
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                                points = 3;
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                                points = 8;
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                                points = 4;
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                                points = 6;
                         break;
                         case 6:fruits.addImage("fruit1", fruit6_img);
                                points = -10;
                         break;
                         default:break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                    for(var i = 0; i < fruitGroup.length; i++){
                        if(fruitGroup.get(i).isTouching(players)){
                            fruitGroup.get(i).destroy();
                            player.score+=points;
                            // console.log(player.score);
                            player.update();
                        }
                    }

                    if(player.score < 0){
                        player.updateCount(0);
                        game.update(0);
                        player.delete();
                        console.log("Game Ended");
                        textSize(36);
                        text("You Lost", 200, 200);
                    }
                }
    }
    end(){
       console.log("Game Ended");
    }
}