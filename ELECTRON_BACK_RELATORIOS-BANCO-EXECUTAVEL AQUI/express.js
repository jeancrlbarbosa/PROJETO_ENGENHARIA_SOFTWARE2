let express = require('express');
let app  = express();
const { Pool } = require('pg');
let client = null;
const path = __dirname;
const bodyParser = require('body-parser');

let static_path = `${__dirname}\\dist\\win-app`;

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

app.use(express.static(static_path));
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

app.get('/list', async (req, res) => {
    const retorno = await this.list(await this.createConnection(), 'select * from public.rel_relatorios');
    return res.status(200).send(retorno);
});


app.post('/insert', async (req, res) => {
    const retorno = await this.insert(await this.createConnection(), `insert into public.rel_relatorios (name, altname) values ('${req.body.name}', '${req.body.altname}')`);
    return res.status(200).send(retorno);
})


app.get('/', (req, res) => {
    console.log(`${path}\\dist\\win-app\\index.html`);
    return res.status(200).sendFile(`${path}\\dist\\win-app\\index.html`);
})


app.listen(10000);




module.exports = app;