const { UserGameBiodata } = require("../models");

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
    UserGameBiodata.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },

  logout: (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.json("jwt removed");
  },

  // USER PROFILE

  readProfileList: (req, res) => {
    UserGameBiodata.findAll()
      .then(usergamebiodata => {
        res.status(200).json(usergamebiodata)
      })
  },

  readProfile: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },

  updateProfile: (req, res) => {
    UserGameBiodata.update({
      fullName: req.body.fullName,
      gender: req.body.gender,
      email: req.body.email,
      username: req.body.username
    }, {
      where: { id: req.user.id }
    })
      .then((usergamebiodata) => {
        res.status(201).json(usergamebiodata);
      })
      .catch((err) => {
        res.status(404).json("error", err);
      });
  }
};
