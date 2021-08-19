const express = require("express")
const PostController = require("../controllers/postController")
const router = express.Router()
const validateToken = require('../utils/validateToken')

router.post("/create-post", validateToken, PostController.createPost)

module.exports = router
