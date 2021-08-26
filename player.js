class Player {
    constructor(){
        this.index=null
        this.distance=0
        this.name=null

    }
    getCount(){
        var playercountref = db.ref("playerCount")
        playercountref.on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        db.ref("/").update({playerCount:count})
    }
    update(){
        var playerindex="players/player"+this.index
        db.ref(playerindex).set({name:this.name,distance:this.distance})
    }
    static getplayerinfo(){
        var playerinforef=db.ref("players")
        playerinforef.on("value",(data)=>{
            allplayers=data.val()
        })
    }
}
 