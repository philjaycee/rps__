// let admin = require('../data/admin.json');
const { AdminBiodata, UserGameBiodata, UserGameHistory } = require('../models')
const passportLocal = require('../lib/passportLocal')

module.exports = {

    // ADMIN AUTH

    registerForm: (req, res) => {
      res.render('admin/form-register', {
        title: 'Register for Admin'
      })
    },

    registerProcess: (req, res) => {
      AdminBiodata.register(req.body)
        .then(() => res.redirect('/login'))
        .catch(err => next(err))
    },

    loginForm: (req, res) => {
      res.render('admin/form-login', {
          title: 'Login for Admin'
      })
    },

    loginProcess: passportLocal.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true
    }),

    // loginProcess: (req, res) => {
    //     const { username, password } = req.body;
    //     const matchUserAdmin = admin.find(data => data.username === username);
    //     const matchPassAdmin = admin.find(data => data.password === password);
    
    //     if (!matchUserAdmin && !matchPassAdmin) {
    //         res.redirect('/admin-login')
    //         console.log('username dan password salah')
    //         console.log(req.body)
    //     } else if (matchUserAdmin) {
    //         if (matchPassAdmin) {
    //             res.redirect('/admin-dashboard')
    //             console.log('berhasil')
    //         } else {
    //             res.redirect('/admin-login')
    //             console.log('password salah')    
    //         }
    //     } else {
    //         res.redirect('/admin-login')
    //         console.log('username salah');
    //     }  
    // },

    // ADMIN DASHBOARD

    mainDashboard: (req, res) => {
        UserGameBiodata.findAll().then(biodata => {
            res.render('admin/dashboard', {
                title: 'Dashboard Admin',
                biodata
            })
        })  
    },
    
    createForm: (req, res) => {
        res.render('admin/tambah-data', {
            title: 'Tambah Data'
        })
    },

    createProcess: (req, res) => {
        UserGameBiodata.create({
            fullName: req.body.fullName,
            gender: req.body.gender,
            email: req.body.email,
            username: req.body.username
        })
        .then(() => res.redirect('/dashboard'))
    },

    updateForm: (req, res) => {
      UserGameBiodata.findOne({
        where: { id: req.params.id }
      })
        .then(biodata => {
          res.render('admin/update-data', {
              title: 'Edit Data User',
              biodata
          })
      })
    },

    updateProcess: (req, res) => {
      UserGameBiodata.update({
        fullName: req.body.fullName,
        gender: req.body.gender,
        email: req.body.email,
        username: req.body.username
      }, {
        where: { id: req.params.id }
      })
      .then(() => res.redirect('/dashboard'))
    },

    delete: (req, res) => {
      UserGameBiodata.destroy({
          where: { id: req.params.id }
      })
        .then(() => res.redirect('/dashboard'))
    }
}