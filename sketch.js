var db,gamestate=0
var playerCount,allplayers,distance=0
var form,player,game
function setup(){
    db=firebase.database()
    
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    if(playerCount===4)
    {game.update(1)}
    if (gamestate==1){
        clear()
        game.play()
    }
    
}