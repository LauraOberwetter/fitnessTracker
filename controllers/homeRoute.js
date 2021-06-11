//const router = require("express").Router();
const path = require("path");

module.exports = (app) => {

//GET /
//res.sendFile express docs and hot restaurant
app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  });

//GET /exercise
app.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  });

//GET /stats
app.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
    
  })
};








