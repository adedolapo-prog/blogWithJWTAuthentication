const errorHandler = err => {
  let errors = {}

  //duplicate error
  if (err.code == 11000) {
    errors.email = "that email already exists"
    return errors
  }

  //validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })

    return errors
  }

  //incorrecct email or password
  if (err.message) {
    errors.message = err.message
    return errors
  }
}

module.exports = errorHandler
