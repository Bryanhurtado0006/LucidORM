import {Client} from 'pg'

const parkingdb=new Client({
    host:'localhost',
    port:5434,
    user:'postgres',
    password:'root',
    database:'parking_db'
})

parkingdb.connect()
export default parkingdb; 