const jwt = require("jsonwebtoken")

module.exports.createToken = (id, maxAge) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  })
}
