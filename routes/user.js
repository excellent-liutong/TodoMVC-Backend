const express = require('express');
const router = express.Router();
const UseController = require('../controller/UserController');

router
    .get('/', async (req, res) => {
        const userList = await UseController.getAllUser();
        res.send(userList);
    });



module.exports = router;