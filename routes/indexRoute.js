const authRoute = require("./authRoute")
const postRoute = require("./postRoute")
const router = app => {
  app.use("/auth", authRoute)
  app.use("/", postRoute)
}

module.exports = router
