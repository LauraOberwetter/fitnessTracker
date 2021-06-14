const router = require("express").Router();
const path = require("path");

//GET /
// //res.sendFile express docs and hot restaurant
// router.get('/', async (req, res) => {
//     try {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     } catch (err) {
//         res.status(500).json(err);
//         console.log(err)
//     }
    
//   });

  //GET /exercise
  router.get('/exercise', (req, res) => {
          res.sendFile(path.join(__dirname, '../public/exercise.html'));
      
    });
  
  //GET /stats
  router.get('/stats',(req, res) => {
          res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

  module.exports = router;








