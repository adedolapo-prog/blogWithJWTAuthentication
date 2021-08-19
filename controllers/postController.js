const PostService = require("../services/postService")
const errorHandler = require("../utils/errorHandler")

module.exports = class PostController {
  static async createPost(req, res) {
    try {
      const post = await PostService.createPost(req.body)
      res.status(201).json({ success: true, statusCode: 201, post: post._id })
    } catch (err) {
      let errors = errorHandler(err)
      res.status(400).json({ success: false, statusCode: 400, error: errors })
    }
  }
}
