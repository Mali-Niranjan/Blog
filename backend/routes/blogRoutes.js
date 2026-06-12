import express from "express";

import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchBlogs,
  exportBlogsCSV
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/", createBlog);

router.get("/", getBlogs);

router.get("/search", searchBlogs);

router.get("/export", exportBlogsCSV);

router.get("/:id", getBlogById);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export default router;