const mysql = require('mysql2')
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'u5790065',
    password: '020280202069',
    database: 'u5790065_csc350'
})