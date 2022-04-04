const { UserGameBiodata, UserGameHistory } = require("../models");
const sequelize = require("sequelize");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  // USER AUTH

  register: (req, res) => {
    UserGameBiodata.register(req.body)
      .then((usergamebiodata) => {
        res.status(201).json(usergamebiodata);
      })
      .catch((err) => {
        res.status(422).json("Can't create register data");
      });
  },

  login: (req, res) => {
    UserGameBiodata.authenticate(req.body)
      .then((user) => {
        res.json(format(user));
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },

  logout: (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.json("jwt removed");
  },

  // USER PROFILE

  readProfileList: (req, res) => {
    UserGameBiodata.findAll().then((usergamebiodata) => {
      res.status(200).json(usergamebiodata);
    });
  },

  readProfile: (req, res) => {
    const currentUser = req.user;
    console.log("req", req);
    res.json(currentUser);
  },

  readScore: (req, res) => {
    UserGameHistory.findAll({
      attributes: [
        "userID",
        [sequelize.fn("sum", sequelize.col("score")), "total_score"],
      ],
      group: ["userID"],
      where: { userID: req.user.id },
    }).then((data) => {
      res.status(200).json(data);
    });
  },

  updateProfile: (req, res) => {
    UserGameBiodata.update(
      {
        fullName: req.body.fullName,
        gender: req.body.gender,
        email: req.body.email,
        username: req.body.username,
      },
      {
        where: { id: req.user.id },
      }
    )
      .then((usergamebiodata) => {
        res.status(201).json(usergamebiodata);
      })
      .catch((err) => {
        res.status(404).json("error", err);
      });
  },
  isplayed: (req, res) => {
    UserGameHistory.findOne({
      where: { userID: req.user.id },
    }).then((data) => {
      res.status(200).json(data);
    });
  },
};
