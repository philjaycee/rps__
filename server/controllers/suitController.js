const { UserGameHistory, GameList } = require("../models");

module.exports = {
  getPoint: (req, res) => {
    UserGameHistory.create({
      userID: req.user.id,
      win: req.body.win,
      score: req.body.score,
      gameID: req.params.gameid
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(422).json(err);
      });    
  },

  // sementara ini hanya untuk demo dan pelengkap
  createGameList: (req, res) => {
    GameList.create({
      title: req.body.title
    })
      .then(data => res.status(201).json(data))
      .catch(err => res.status(422).json(err))
  }
};
