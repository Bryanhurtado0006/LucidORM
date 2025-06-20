import {Client} from 'pg'

const db_clubes=new Client({
    host:'localhost',
    port:5433,
    user:'postgres',
    password:'root',
    database:'db_clubes'
})

db_clubes.connect()
export default db_clubes; 