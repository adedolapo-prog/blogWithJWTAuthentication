const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
  const token = req.cookies.jwt

  if (!token) {
    return res.send("Login please")
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.send("please login")
    }

    req.body.userId = decodedToken.id
    next()
  })
}

module.exports = validateToken
