const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*

Metodos HTTPS
       Get: buscar uma informação do back
''     Post: Criar uma informação do back
""     Put: Alterando uma informação do back
       Delete: deleta uma informação no back 

*/

/*
    Tipos de parâmetros:

    Query params: Parametros nomeados na Rota apos o simbolo de ? ( filtros , paginação)
    Route Params: Parametros utilizados para identificar recursos
    Request Body: corpo da requisição , utilizado para criar ou alterar recursos

*/

/*
SQL, MySQL, SQLite
NoSQL: MongoDB
*/

/*
    Driver : Select * From users
    Query Builder: table('users').select('*').where()
*/





