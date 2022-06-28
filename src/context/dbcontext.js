import {openDb} from './configdb.js'


export async function CreateTables() {
    openDb().then(db => {
        db.exec(scriptTableCustomer);
        db.exec(scriptTableCategory);
        db.exec(scriptTableProduct);
        db.exec(scriptTablePharmacist);
        db.exec(scriptTableSupplier);
    })
}

//Tabela costumer
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

// Tabela category
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