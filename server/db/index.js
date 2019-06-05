const Sequelize = require('sequelize')
require('./models')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/quotesProject`,//change to your database name
  {
    logging: false
  }
)

module.exports = db
