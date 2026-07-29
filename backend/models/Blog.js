// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true
//     },

//     author: {
//       type: String,
//       required: [true, "Author is required"],
//       trim: true
//     },

//     category: {
//       type: String,
//       required: [true, "Category is required"],
//       trim: true
//     },

//     content: {
//       type: String,
//       required: [true, "Content is required"]
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// export default mongoose.model("Blog", blogSchema);

//by G

// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true
//     },

//     author: {
//       type: String,
//       required: [true, "Author is required"],
//       trim: true
//     },

//     category: {
//       type: String,
//       required: [true, "Category is required"],
//       trim: true
//     },

//     content: {
//       type: String,
//       required: [true, "Content is required"]
//     },

//     thumbnail: {
//       type: String,
//       default: ""
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// export default mongoose.model("Blog", blogSchema);


import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);