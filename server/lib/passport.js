const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { UserGameBiodata, UserGameHistory } = require('../models');
const options = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'Aplikasi platinum kelompok 2'
};

passport.use(new JwtStrategy(
  options, async (payload, done) => {
    UserGameBiodata.findByPk(payload.id)
      .then(user => done(null, user))
      .catch(err => done(err, false))
  }
));

module.exports = passport;