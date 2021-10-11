const express = require('express');
const morgan = require('morgan');
const app = express();


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// rutas
app.use(require('./routes'));
app.use('/api/registro', require('./routes/registro'));

// configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


// Iniciando Servidor
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
});

