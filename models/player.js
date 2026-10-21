class player{
    playerId = null;
    playerName = null;
    playerTeam = null;
    playerPosition = null;
    playerImage = null;

    constructor (id, name, team, position, image){
        this.playerId = id;
        this.playerName = name;
        this.playerTeam = team;
        this.playerPosition = position;
        this.playerImage = image;
    }
}

module.exports = player;