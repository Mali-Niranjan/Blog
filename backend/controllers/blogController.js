// import Blog from "../models/Blog.js";
// import { Parser } from "json2csv";


// // CREATE BLOG
// export const createBlog = async (req, res) => {
//   try {
//     const { title, author, category, content } = req.body;

//     if (!title || !author || !category || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required"
//       });
//     }

//     const blog = await Blog.create({
//       title,
//       author,
//       category,
//       content
//     });

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully",
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // GET ALL BLOGS WITH PAGINATION
// export const getBlogs = async (req, res) => {
//   try {
//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 5;

//     const skip = (page - 1) * limit;

//     const blogs = await Blog.find()
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Blog.countDocuments();

//     res.status(200).json({
//       success: true,
//       total,
//       page,
//       totalPages: Math.ceil(total / limit),
//       data: blogs
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // GET SINGLE BLOG
// export const getBlogById = async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // UPDATE BLOG
// export const updateBlog = async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Blog updated successfully",
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // DELETE BLOG
// export const deleteBlog = async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Blog deleted successfully"
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // SEARCH BLOGS
// export const searchBlogs = async (req, res) => {
//   try {
//     const keyword = req.query.keyword || "";

//     const blogs = await Blog.find({
//       $or: [
//         { title: { $regex: keyword, $options: "i" } },
//         { author: { $regex: keyword, $options: "i" } },
//         { category: { $regex: keyword, $options: "i" } }
//       ]
//     });

//     res.status(200).json({
//       success: true,
//       count: blogs.length,
//       data: blogs
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// // EXPORT CSV
// export const exportBlogsCSV = async (req, res) => {
//   try {
//     const blogs = await Blog.find();

//     const fields = [
//       "title",
//       "author",
//       "category",
//       "content",
//       "createdAt"
//     ];

//     const parser = new Parser({ fields });

//     const csv = parser.parse(blogs);

//     res.header("Content-Type", "text/csv");

//     res.attachment("blogs.csv");

//     return res.send(csv);

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


//by G

//import Blog from "../models/Blog.js";
//import { Parser } from "json2csv";

// CREATE BLOG
// export const createBlog = async (req, res) => {
//   try {
//     const { title, author, category, content } = req.body;

//     if (!title || !author || !category || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required"
//       });
//     }

//     // Get uploaded thumbnail path if available
//     const thumbnail = req.file ? `/uploads/${req.file.filename}` : "";

//     const blog = await Blog.create({
//       title,
//       author,
//       category,
//       content,
//       thumbnail
//     });

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully",
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };



// export const createBlog = async (req, res) => {
//   try {
//     const {
//       title,
//       author,
//       email,
//       category,
//       tags,
//       status,
//       thumbnail,
//       shortDescription,
//       content,
//     } = req.body;

//     if (
//       !title ||
//       !author ||
//       !email ||
//       !category ||
//       !shortDescription ||
//       !content
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields",
//       });
//     }

//     const blog = await Blog.create({
//       title,
//       author,
//       email,
//       category,
//       tags,
//       status,
//       thumbnail: req.file
//         ? `/uploads/${req.file.filename}`
//         : thumbnail || "",
//       shortDescription,
//       content,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully",
//       data: blog,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // GET ALL BLOGS WITH PAGINATION
// export const getBlogs = async (req, res) => {
//   try {
//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 5;

//     const skip = (page - 1) * limit;

//     const blogs = await Blog.find()
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Blog.countDocuments();

//     res.status(200).json({
//       success: true,
//       total,
//       page,
//       totalPages: Math.ceil(total / limit),
//       data: blogs
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // GET SINGLE BLOG
// export const getBlogById = async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // UPDATE BLOG
// export const updateBlog = async (req, res) => {
//   try {
//     const updateData = { ...req.body };

//     // If new thumbnail is uploaded, update thumbnail path
//     if (req.file) {
//       updateData.thumbnail = `/uploads/${req.file.filename}`;
//     }

//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Blog updated successfully",
//       data: blog
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // DELETE BLOG
// export const deleteBlog = async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Blog deleted successfully"
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // SEARCH BLOGS
// export const searchBlogs = async (req, res) => {
//   try {
//     const keyword = req.query.keyword || "";

//     const blogs = await Blog.find({
//       $or: [
//         { title: { $regex: keyword, $options: "i" } },
//         { author: { $regex: keyword, $options: "i" } },
//         { category: { $regex: keyword, $options: "i" } }
//       ]
//     });

//     res.status(200).json({
//       success: true,
//       count: blogs.length,
//       data: blogs
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // EXPORT CSV
// export const exportBlogsCSV = async (req, res) => {
//   try {
//     const blogs = await Blog.find();

//     // const fields = [
//     //   "title",
//     //   "author",
//     //   "category",
//     //   "content",
//     //   "thumbnail",
//     //   "createdAt"
//     // ];

//     const fields = [
//   "title",
//   "author",
//   "email",
//   "category",
//   "tags",
//   "status",
//   "thumbnail",
//   "shortDescription",
//   "content",
//   "createdAt",
// ];

//     const parser = new Parser({ fields });

//     const csv = parser.parse(blogs);

//     res.header("Content-Type", "text/csv");

//     res.attachment("blogs.csv");

//     return res.send(csv);

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

import Blog from "../models/Blog.js";
import { Parser } from "json2csv";

// CREATE A NEW BLOG
export const createBlog = async (req, res) => {
  try {
    console.log("=== NEW CREATE BLOG CONTROLLER HIT ===");
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const {
      title,
      author,
      email,
      category,
      tags,
      status,
      thumbnail,
      shortDescription,
      content,
    } = req.body;

    // Validation
    if (
      !title ||
      !author ||
      !email ||
      !category ||
      !shortDescription ||
      !content
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill all required fields (title, author, email, category, shortDescription, content)",
      });
    }

    // Handle tags format (Array or String from FormData)
    let parsedTags = tags;
    if (typeof tags === "string") {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(",").map((t) => t.trim());
      }
    }

    const Blog = await Blog.create({
      title,
      author,
      email,
      category,
      tags: parsedTags || [],
      status: status || "Draft",
      thumbnail: req.file
        ? `/uploads/${req.file.filename}`
        : thumbnail || "",
      shortDescription,
      content,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: error.message,
  //   });
  // }
  catch (error) {

  console.log("CREATE BLOG ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

// GET ALL BLOGS WITH PAGINATION
export const getBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Blog.countDocuments();

    res.status(200).json({
      success: true,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE BLOG
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.thumbnail = `/uploads/${req.file.filename}`;
    }

    if (typeof updateData.tags === "string") {
      try {
        updateData.tags = JSON.parse(updateData.tags);
      } catch (e) {
        updateData.tags = updateData.tags.split(",").map((t) => t.trim());
      }
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// SEARCH BLOGS
export const searchBlogs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const blogs = await Blog.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { author: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// EXPORT CSV
export const exportBlogsCSV = async (req, res) => {
  try {
    const blogs = await Blog.find();

    const fields = [
      "title",
      "author",
      "email",
      "category",
      "tags",
      "status",
      "thumbnail",
      "shortDescription",
      "content",
      "createdAt",
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(blogs);

    res.header("Content-Type", "text/csv");
    res.attachment("blogs.csv");
    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};