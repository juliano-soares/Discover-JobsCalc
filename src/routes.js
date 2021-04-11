const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

const profile = {
  name: "Juliano",
  avatar: "https://avatars.githubusercontent.com/u/37117169?v=4",
  "monthly-budget": 400,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", {profile}))

module.exports = routes