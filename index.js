const express = require('express')
app = express();
const cors = require('cors') 
app.use(cors())
bodyparser = require('body-parser');
require('express-async-errors')

const db = require('./db')
     candidatesRoutes = require('./controllers/candidates.controller')

     
     //middleware
     app.use(bodyparser.json())
     app.use('/api/candidates', candidatesRoutes)

    app.use((err, req, res, next) => {
        console.log(err)
        res.status(err.status || 500).send('something went wrong')
    })

//make sure app connection is successful
db.query("SELECT 1")
    .then(() => {
     console.log('connection suceeded')
     app.listen(4000,
        () => console.log('server started at 4000'))
    })
    .catch(err =>console.log('db connection failed. \n'+err))
