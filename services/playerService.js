const player = require('../models/player.js');

let playerList = [];

function createPlayer(playerName, playerTeam, playerPosition, playerImage){
    const newPlayerId = playerList.length + 1;
    const newPlayer = new player(newPlayerId, playerName, playerTeam, playerPosition, playerImage);
    playerList.push(newPlayer);
    return newPlayer;
}

function getPlayerList(){
    return playerList;
}

function getPlayer(playerId){
    const matchingPlayerList = playerList.filter(player => player.playerId == playerId);
    const playerObj = (matchingPlayerList.length === 1) ? matchingPlayerList[0] : null;
    return playerObj;
}

function updatePlayer(id, name, team, position, img){
    let player = getPlayer(id);
    if(player){
        player.playerName = name;
        player.playerTeam = team;
        player.playerPosition = position;
        player.playerImage = img;
    }
    return player;
}

function deletePlayer(id){
    let index = playerList.findIndex(player => player.playerId == id);
    if (index !== -1){
        playerList.splice(index, 1)
        return id;
    }
    return undefined;
}

module.exports = {
    playerList,
    createPlayer,
    getPlayerList,
    getPlayer,
    updatePlayer,
    deletePlayer
};