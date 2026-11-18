  const path = require('path');
  const expresss = require('express');
  const pool = require('./config/database');

  const app = express();
  app.use(express.urlencoded({ extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', async (req, res)=> {
    const [linhas] = await pool.query('SELECT COUNT(*) AS total FROM tarefas_db.categoria');
    res.send('Conectado ao MYsql: ' + linhas[0].total + ' categorias cadastradas');
  });

  module.exports = app;
  
