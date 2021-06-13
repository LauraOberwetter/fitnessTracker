//link express
const router = require('express').Router();
//link routes
//const apiRoutes = require('./api/index.js');
const homeRoutes = require('./homeRoute');



router.use('/', homeRoutes);
//router.use('/api', apiRoutes);



module.exports = router;