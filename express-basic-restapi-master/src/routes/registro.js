const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const registro = require('../sample.json');

router.get('/', (req, res) => {
    res.json(registro);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(registro, (regis, i) => {
            if (regis.id == id) {
                registro.splice(i, 1);
            }
        });
        res.json(registro);
    }
});

module.exports = router;