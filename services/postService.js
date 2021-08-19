const Post = require("../models/postModel")
module.exports = class PostService {
  static async createPost(body) {
    const { title, description, userId } = body
    const post = new Post({ title, description, userId })
    await post.save()
    return post
  }
}
