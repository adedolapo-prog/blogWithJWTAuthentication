const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please put in a title"],
  },
  description: {
    type: String,
    required: [true, "please put in a description"],
    maxlength: [180, "exceeds maximum length"],
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Post = mongoose.model("post", postSchema)

module.exports = Post
