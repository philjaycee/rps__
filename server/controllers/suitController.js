const { UserGameHistory, GameList } = require("../models");

module.exports = { 

  // CRUD terkait score dan riwayat permainan

  createPoint: (req, res) => {
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

  readPoint: (req, res) => {
    UserGameHistory.findOne({
      where: { userID: req.user.id }
    })
      .then(data => {
        res.status(200).json(data)
      })
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
