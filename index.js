const express = require('express')
const compression = require('compression');

const app = express()

app.use(compression({
    level: 6,
    threshold: 100*1024, // 0 meaning all data will be compressed (100*1024) is less than 100kB not compress response
    // filter: (req, res) => { // filter request we be compressed or not
    //     if(req.headers[x-no-compression]) {
    //         return false
    //     }
    //     return compression.filter(req, res)
    // },
}))

app.get('/', (req, res) => {
    const payload = "Faster app which uses less bandwidth too...";
    res.status(200).send(payload.repeat(100000))
})

app.listen(3000, () => console.log('server running on port 3000 ...'));