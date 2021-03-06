const express = require('express');
const Auth = require('../controllers/authController');
const router = express.Router();


router.get('/login',Auth.getLogin);

router.post('/login',Auth.postLogin);

router.get('/signup',Auth.getSignup);

router.post('/signup',Auth.postSignup);

router.post('/userlogout',Auth.postLogout);

router.get('/newseller',Auth.getSellerSignUp);

router.post('/newseller',Auth.postSellerSignup);

router.get('/loginseller',Auth.getSellerLogIn); 

router.post('/loginseller',Auth.postSellerLogIn);

module.exports = router;