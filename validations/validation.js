const validator = require("validator")

module.exports.signUp = body => {
  let errors = {}

  if (!validator.isAlpha(body["name"])) {
    errors.message = "name can only be alphabets"
  }

  if (
    validator.isBoolean(
      body["name"] ||
        validator.isBoolean(body["password"]) ||
        validator.isBoolean(body["email"])
    )
  ) {
    errors.message = "fields cannot be boolean"
  }

  return {
    errors,
    isValid: Object.values(errors) == 0,
  }
}

module.exports.login = body => {
  let errors = {}

  if (
    validator.isBoolean(body["password"]) ||
    validator.isBoolean(body["email"])
  ) {
    errors.message = "fields cannot be boolean"
  }

  return {
    errors,
    isValid: Object.values(errors) == 0,
  }
}
