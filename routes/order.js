var express = require('express');
var router = express.Router();

// GET order listing
router.get('/',
    function (req, res, next)
    {
        res.send('respond from order get');
    });

router.get('/:id',
    function (req, res, next)
    {
        res.send(`respond from order get with id=${req.params.id}`);
    });

router.post('/',
    function (req, res, next)
    {
        // save to the database
        res.send('respond from order post');
    });

router.post('/bluebox/add/',
    function (req, res, next)
    {
        console.log();
        console.log("--------------------------------------------------------");
        console.log( req.body );
        console.log("--------------------------------------------------------");

        res.writeHead(200, {"Content-Type": "application/json"});

        var JsonObj = { MyTestRes: "Tested-Ok"};
        res.write(JSON.stringify(JsonObj));
        res.send();
    });


router.post('/bluebox/status_update/',
    function (req, res, next)
    {
        console.log();
        console.log("--------------------------------------------------------");
        console.log( req.body );
        console.log("--------------------------------------------------------");

        res.writeHead(200, {"Content-Type": "application/json"});

        var JsonObj = { MyTestRes: "Tested-Ok"};
        res.write(JSON.stringify(JsonObj));
        res.send();
    });


router.delete('/:id',
    function (req, res, next)
    {
        // delete from the database
        res.send('respond from order delete');
    });

module.exports = router;
