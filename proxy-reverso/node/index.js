const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);
const initTableSql  = `CREATE TABLE PEOPLE (NAME VARCHAR(255) NOT NULL);`;
connection.query(initTableSql);

app.get('/', (req, res) => {
    const insertSql  = `INSERT INTO PEOPLE (NAME) VALUES ('Victor')`;
    connection.query(insertSql);

    const selectSql = `SELECT NAME FROM PEOPLE;`;  
    connection.query(selectSql, function (error, results) {
        let people = "";
        results.forEach(row => {
            people += `<li>${row.NAME}</li>`;
        });

        let list = '<ul>' + people + '</ul>';
        res.send('<h1>Full Cycle Rocks!</h1><br>' + list);
    });
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})