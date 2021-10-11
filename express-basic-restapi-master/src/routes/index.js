const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Ejemplo API REST DAW ',
        website: 'udb.com'
    };  
    res.json(data);
});  

module.exports = router;
