const express = require('express');
const router = express.Router();
const path = require('path');


const basePath = path.join(__dirname, '../templates');



router.get('/:id', (req, res) => {
    const id = req.params.id;


    res.sendFile(`${basePath}/serve.html`);

    
});

module.exports = router;