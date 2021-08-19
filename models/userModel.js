const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: [6, "password length must be at least 6 characters"],
    },
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10)
  const hash = await bcrypt.hashSync(this.password, salt)
  this.password = hash
  next()
})

const User = mongoose.model("user", userSchema)

module.exports = User
