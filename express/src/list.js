const express = require('express');

const router = express.Router();

router.post('/a', (req, res) => {
    res.send('a')
})

router.post('/b', (req, res) => {
    res.send('b')
})

module.exports = router;