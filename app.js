const express = require('express')
const nextApp = require('next')
const helmet = require('helmet')
require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV || 'local'
const app = nextApp({ dev: NODE_ENV !== 'production' && NODE_ENV !== 'development' })
const handle = app.getRequestHandler()

// Server config variables
const port = process.env.PORT || 3000

app.prepare().then(() => {
  // Initialize express server
  const app = express()

  /**
   * Mount middleware.
   */
  app.use(helmet())

  /**
   * All other routes should be returned as react pages.
   */
  app.get('*', (req, res) => {
    return handle(req, res) // Handles all the react server side rendering
  })

  // Start server
  app.listen((port), () => {
    console.log(`Express and NextJS server is running on port: ${port}`)
  })
})
