const mongoose = require("mongoose")

const MONGOURI = process.env.MONGOURI

const PORT = process.env.PORT || 5000

const dbConnect = async app => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
    console.log("DB connected")
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = dbConnect
