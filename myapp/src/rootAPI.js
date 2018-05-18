var express = require('express');
var router = express.Router();
var path = require('path');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
//including
// router.use('/dashboard', require(__app.__apis.dashboardAPI));
router.use('/main', require(path.join(__dirname, 'maincontrol')));

module.exports=router;