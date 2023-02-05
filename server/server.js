const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({
        msg: `Bismillah`
    })
})

app.listen(8080, () => {
    console.log('Server up and running')
})