const express = require("express");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog } = require("../controller/blogCtrl");
const router = express.Router();

router.post("/", createBlog);
router.put("/likes", likeBlog);
router.put("/dislikes", dislikeBlog);
router.put("/:id", updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;