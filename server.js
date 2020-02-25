const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        console.log(`Server ready on port ${PORT}...`)
    })
})
.catch((err) => {
    console.err(err.stack)
    process.exit(1)
})
