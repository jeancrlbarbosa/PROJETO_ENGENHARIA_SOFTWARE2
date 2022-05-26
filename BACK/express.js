let express = require('express');
let app  = express();
const { Pool } = require('pg');
let client = null;
const bodyParser = require('body-parser');


exports.createConnection = () => {

    if (client === null) {

        client = new Pool({
            host: 'localhost',
            user: 'postgres',
            database: 'postgres',
            password: 'admin',
            port: '5432'
        });
        return client
    } else {

        return client
    }
}

exports.list = (client, comand) => {

    return new Promise((resolve, reject) => {

        client.query(comand, [], (error, res) => {

            if (error) {

                resolve(error);
            }
            resolve((res ? (res.rowCount > 0 ? res.rows : null): null))
        })
    })
}

exports.insert = (client, comand) => {

    return new Promise((resolve, reject) => {

        client.query(comand, [], (error, res) => {

            if (error) {

                resolve(error);
            }
            resolve(res);
        })
    })
}

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use('/*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.post('/login', async (req, res) => {
    const retorno = await this.list(await this.createConnection(), `select * from public.login where login = '${req.body.login}' AND senha = '${req.body.senha}'`);
    return res.status(200).send(retorno && retorno.length ? retorno[0] : null);
});

app.post('/usuario', async (req, res) => {
    const retorno = await this.list(await this.createConnection(), `select * from public.login where login = '${req.body.login}'`);
    return res.status(200).send(retorno && retorno.length ? retorno[0] : null);
});

app.post('/insertuser', async (req, res) => {
    const retorno = await this.insert(await this.createConnection(), `insert into public.login (login, senha, tipusu) values ('${req.body.login}', '${req.body.senha}', '${req.body.tipusu}')`);
    return res.status(200).send(retorno);
})

app.post('/insert', async (req, res) => {
    const retorno = await this.insert(await this.createConnection(), `insert into public.livros (name, base64) values ('${req.body.name}', '${req.body.base64}')`);
    return res.status(200).send(retorno);
})

app.post('/get', async (req, res) => {
    const retorno = await this.list(await this.createConnection(), `select * from public.livros where name = '${req.body.name}'`);
    return res.status(200).send(retorno && retorno.length ? retorno[0] : null);
});

app.delete('/delete/:codigo', async (req, res) => {
    const retorno = await this.insert(await this.createConnection(), `delete from public.livros where codigo = ${req.params.codigo}`);
    return res.status(200).send(retorno);
})


app.listen(10000);




module.exports = app;