class Game {
    constructor(){}
    getState(){
        var gamestateref = db.ref("gamestate")
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        db.ref("/").update({gamestate:state})
    }
   async start(){
        if(gamestate===0){
            player=new Player()
            var playercountref=await db.ref("playerCount").once("value")
            if(playercountref.exists()){
                playerCount=playercountref.val()
                player.getCount()
            }
      
            form=new Form()
            form.display()
        }
    }
}
 