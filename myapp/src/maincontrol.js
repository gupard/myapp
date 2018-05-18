var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
var success = {
    "msg": "ok",
    "code": 0,
}
router.get('/getTest1', function (req, res) {
    res.json(success);  
});

router.post('/postTest', function (req, res) {
    res.json(success);
});
module.exports = router;