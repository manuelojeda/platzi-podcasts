// server.js
const next = require('next')
const routes = require('./routes')
const config = require('dotenv').config().parsed
const PORT = config.PORT

const app = next({
  dev: process.env.NODE_ENV !== 'production'
})
const handler = routes.getRequestHandler(app)

const { createServer } = require('http')
app.prepare().then(() => {
  createServer(handler).listen(PORT)
})