const { UserGameHistory } = require("../models");

module.exports = {
  getPoint: (req, res) => {
    UserGameHistory.create({
      userID: req.user.id,
      win: req.body.win,
      score: req.body.score
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
    
  }
};
