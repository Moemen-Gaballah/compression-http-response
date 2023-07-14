const express = require('express')
const compression = require('compression');

const app = express()

app.use(compression({}))

app.get('/', (req, res) => {
    const payload = "Faster app which uses less bandwidth too...";
    res.status(200).send(payload.repeat(100000))
})

app.listen(3000, () => console.log('server running on port 3000 ...'));