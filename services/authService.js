const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const validate = require("../validations/validation")

module.exports = class AuthService {
  static async signUp(body) {
    const { errors, isValid } = await validate.signUp(body)

    if (!isValid) {
      throw Error(errors.message)
    }

    const { name, email, password } = body
    const user = new User({ name, email, password })
    await user.save()
    user.password = undefined

    return user
  }

  static async login(body) {
    const { errors, isValid } = await validate.login(body)

    if (!isValid) {
      throw Error(errors.message)
    }

    const { email, password } = body
    const user = await User.findOne({ email })

    if (!user) {
      throw Error("incorrect email")
    }

    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      throw Error("incorrect password")
    }

    return user
  }
}
