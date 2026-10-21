const playerService = require("../services/playerService.js");

async function getPlayerListAPI(req, res){
    const playerList = await playerService.getPlayerList();
    res.json(playerList)
}

function getPlayerAPI(req, res){
    const playerId = req.params.id;
    const playerObj = playerService.getPlayer(playerId);
    if(playerObj ==null){
        res.status(404).send("Can't find player.")
    }
    else{
        res.json(playerObj)
    }
}

async function createPlayerAPI(req, res){
    const newPlayer = await playerService.createPlayer(req.body.playerName, req.body.playerTeam, req.body.playerPosition, req.body.playerImage);
    res.json(newPlayer);
}

function updatePlayerAPI(req, res){
    const updatedPlayer = playerService.updatePlayer(req.params.id, req.body.playerName, req.body.playerTeam, req.body.playerPosition, req.body.playerImage);
    res.json(updatedPlayer);
}

function deletePlayerAPI(req, res){
    const deletedPlayerId = playerService.deletePlayer(req.params.id);
    if (deletedPlayerId){
        res.json(deletedPlayerId);
    }
    else{
        res.status(404).json({ message: 'Player not found' });
    }
}

module.exports = {
    getPlayerListAPI,
    getPlayerAPI,
    createPlayerAPI,
    updatePlayerAPI,
    deletePlayerAPI
}