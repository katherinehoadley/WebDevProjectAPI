const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const playerService = require('./services/playerService.js');
const playerController = require('./controllers/playerController.js');

const myApp = express();
const port = 9008;

myApp.use(bodyParser.json());
myApp.use(cors());

playerService.createPlayer('Lamar Jackson', 'Ravens', 'Quarterback', 'https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png');
playerService.createPlayer('Jayden Daniels', 'Commanders', 'Quarterback', 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/league/vrdweg39v1ay4zoc0lgp');
playerService.createPlayer('Justin Jefferson', 'Vikings', 'Wide Receiver', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4262921.png');
playerService.createPlayer('Josh Allen', 'Bills', 'Quarterback', 'https://static.www.nfl.com/image/upload/t_headshot_desktop/league/servs1fpsynfxep4rz2z');



myApp.get("/players", playerController.getPlayerListAPI);
myApp.get("/player/:id", playerController.getPlayerAPI);
myApp.post("/player", playerController.createPlayerAPI);
myApp.put("/player/:id", playerController.updatePlayerAPI);
myApp.delete("/player/:id", playerController.deletePlayerAPI);

myApp.listen(port, () => {
    console.log(`Server Started on ${port}`);
}).on('error', (error) => {
    console.log(error);
})