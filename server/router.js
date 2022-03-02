const router = require('express').Router();
const adm = require('./controllers/admController')

// AUTH ADMIN
router.get('/register', adm.registerForm)
router.post('/register', adm.registerProcess)
router.get('/login', adm.loginForm)
router.post('/login', adm.loginProcess)

// DASHBOARD ADMIN
router.get('/dashboard', adm.mainDashboard)
router.get('/create', adm.createForm)
router.post('/create', adm.createProcess)
router.get('/update/:id', adm.updateForm)
router.post('/update/:id', adm.updateProcess)
router.get('/delete/:id', adm.delete)

module.exports = router;