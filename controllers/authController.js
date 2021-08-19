const AuthService = require("../services/authService")
const { createToken } = require("../utils/createToken")
const errorHandler = require("../utils/errorHandler")

const maxAge = 3 * 24 * 60 * 60

module.exports = class AuthController {
  static async signUp(req, res) {
    try {
      let user = await AuthService.signUp(req.body)
      const token = createToken(user._id, maxAge)
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 })
      return res.status(201).json({
        success: true,
        statusCode: 201,
        data: { user: user._id, token },
      })
    } catch (err) {
      let errors = errorHandler(err)
      res.status(400).json({ success: false, statusCode: 400, error: errors })
    }
  }

  static async login(req, res) {
    try {
      const user = await AuthService.login(req.body)
      const token = createToken(user._id, maxAge)
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 })
      res
        .status(200)
        .json({
          success: true,
          statusCode: 200,
          data: { user: user._id, token },
        })
    } catch (err) {
      let errors = errorHandler(err)
      res.status(400).json({ success: false, statusCode: 400, error: errors })
    }
  }
}
