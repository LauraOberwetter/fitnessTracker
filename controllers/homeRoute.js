const router = require("express").Router();
const path = require("path");

//GET /
//res.sendFile express docs and hot restaurant
router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  });

//GET /exercise
router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  });

//GET /stats
router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  });

  module.exports = router;








