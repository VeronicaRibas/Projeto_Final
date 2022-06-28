//importar sqlite no node
const sqlite = require('sqlite3').verbose();

//definicao dos scripts das entidades
const scriptTableCustomer = `CREATE TABLE IF NOT EXISTS customer(
    id INTEGER NOT NULL,
    name TEXT,
    cpf TEXT,
    phone TEXT,
    adress TEXT,
    birth_date TEXT,
    genre TEXT,
    email TEXT,
    PRIMARY KEY (ID)
    );`
const scriptTableCategory = `CREATE TABLE IF NOT EXISTS category(
    id INTEGER NOT NULL,
    name TEXT,
    type TEXT,
    PRIMARY KEY (ID)
    );`

const scriptTableProduct = `CREATE TABLE IF NOT EXISTS product(
    id INTEGER NOT NULL,
    name TEXT,
    brand TEXT,
    quantity int,
    value TEXT,
    BlackBand INTEGER,
    RedBand INTEGER,
    YellowBand INTEGER,
    Category_id INTEGER,
    PRIMARY KEY (ID),
    FOREIGN KEY (Category_id) REFERENCES category(id)
    );`

const scriptTablePharmacist = `CREATE TABLE IF NOT EXISTS pharmacist(
    id INTEGER NOT NULL,
    name TEXT,
    cpf TEXT,
    crf TEXT,
    phone TEXT,
    adress TEXT,
    birth_date TEXT,
    genre TEXT,
    salary TEXT,
    comission TEXT,
    working_hours TEXT,
    email TEXT,
    PRIMARY KEY (ID)
    );`
 const scriptTableSupplier = `CREATE TABLE IF NOT EXISTS supplier(
    id INTEGER NOT NULL,
    name TEXT,
    cnpj TEXT,
    type TEXT,
    phone TEXT,
    adress TEXT,
    email TEXT,
    PRIMARY KEY (ID)
    );`
   

//função para criar as tabelas de maneira otimizada
function createTable(database, script){
    database.run(script, function(err){
        if(err){
            console.error('Erro ao criar tabela');
            console.log(err)
        } else {
            console.log('Tabela criada com sucesso.')
        }
    });
}

//função que inicializa um banco com as tabelas
function createDatabase(name){
    let database = new sqlite.Database(name);
    createTable(database, scriptTableCustomer)
    createTable(database, scriptTableCategory)
    createTable(database, scriptTableProduct)
    createTable(database, scriptTablePharmacist)
    createTable(database, scriptTableSupplier)
}

//chamada da função para a criação do database
createDatabase('banco_farmacia')

//exportar banco
exports.createDatabase = createDatabase;


