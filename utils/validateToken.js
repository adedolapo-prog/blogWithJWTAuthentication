const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
  const token = req.cookies.jwt

  if (!token) {
    return res
      .status(401)
      .json({ success: false, statusCode: 401, error: "please sign in" })
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, statusCode: 401, error: err })
    }

    req.body.userId = decodedToken.id
    next()
  })
}

module.exports = validateToken
