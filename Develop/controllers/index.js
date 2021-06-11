//link express
const router = require('express').Router();
//link routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);



module.exports = router;