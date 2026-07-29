// import express from "express";

// import {
//   createBlog,
//   getBlogs,
//   getBlogById,
//   updateBlog,
//   deleteBlog,
//   searchBlogs,
//   exportBlogsCSV
// } from "../controllers/blogController.js";

// const router = express.Router();

// router.post("/", createBlog);

// router.get("/", getBlogs);

// router.get("/search", searchBlogs);

// router.get("/export", exportBlogsCSV);

// router.get("/:id", getBlogById);

// router.put("/:id", updateBlog);

// router.delete("/:id", deleteBlog);

// export default router;

//by G
import express from "express";
import multer from "multer";
import path from "path";

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

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

// Routes
//router.post("/", upload.single("thumbnail"), createBlog);
router.post("/", createBlog);

router.get("/", getBlogs);

router.get("/search", searchBlogs);

router.get("/export", exportBlogsCSV);

router.get("/:id", getBlogById);

//router.put("/:id", upload.single("thumbnail"), updateBlog);
router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export default router;