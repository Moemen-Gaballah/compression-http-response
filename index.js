const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const payload = "Faster app which uses less bandwidth too...";
    res.send(payload.repeat(100000))
})

app.listen(3000, () => console.log('server running on port 3000'));