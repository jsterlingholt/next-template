let express = require('express')
let ejs = require('ejs')
let app = express()
let port = 80
let path = require('path')


app.set('view engine', 'ejs')
app.use(express.static("public"))

//  endpoints
//  ----

app.use('/', require('./endpoints'))
app.use('/pdf',require('./endpoints/pdf'))

//  port and startup message
//  ----

app.listen(port, () => {
    console.log(`server started on ${ port }`)
})