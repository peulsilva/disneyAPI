const express = require('express')
const setRoutes = require('./setRoutes')
const app = express()
const port = 1500

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const main = app=>{
    setRoutes(app);
}

main(app)