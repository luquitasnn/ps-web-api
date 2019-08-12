const express = require('express');

const  router = express.Router();

const queries = require ('../db/queries');


function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next (new Error('Invalid ID'));
};

function validCase (myCase) {
    const hasNExpte = typeof myCase.n_expte == 'string' && myCase.n_expte.trim() != '';
    return hasNExpte;
};

router.get('/', (req, res, next) => {
    queries.getAll().then(cases => {
        res.json(cases);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getCaseByID(req.params.id).then(myCase => {
        if (myCase) {
            res.json(myCase);
        } else {
            next();
        }
    })
});

router.post ('/new', (req, res, next) => {
    if (validCase(req.body)) {
        queries.create (req.body).then(cases => {
            res.json(cases[0])
        })
    } else {
        next(new Error('Invalid case'))
    }

});

router.put('/update', (req, res, next)=> {
    if (validCase(req.body)) {
        queries.update (req.body).then(cases => {
            res.json(cases)
        })
    } else {
        next(new Error('Invalid case'))
    }   
})

router.delete('/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(myCase => {
            res.json({
                deleted: true
        });
    })
});

module.exports = router;