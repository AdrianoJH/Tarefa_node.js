const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const usersRoutes = require('./servers');

// ler o body

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// arquivos estáticos

app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/servers', usersRoutes);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

