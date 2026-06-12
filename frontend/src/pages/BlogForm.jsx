// import { useForm } from "react-hook-form";
// import { Container, TextField, Button } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const {
//     register,
//     handleSubmit,
//     setValue
//   } = useForm();

//   useEffect(() => {
//     if (id) {
//       API.get(`/${id}`).then((res) => {
//         setValue("title", res.data.data.title);
//         setValue("author", res.data.data.author);
//         setValue("category", res.data.data.category);
//         setValue("content", res.data.data.content);
//       });
//     }
//   }, [id]);

//   const onSubmit = async (data) => {
//     if (id) {
//       await API.put(`/${id}`, data);
//     } else {
//       await API.post("/", data);
//     }

//     navigate("/");
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           fullWidth
//           label="Title"
//           margin="normal"
//           {...register("title")}
//         />

//         <TextField
//           fullWidth
//           label="Author"
//           margin="normal"
//           {...register("author")}
//         />

//         <TextField
//           fullWidth
//           label="Category"
//           margin="normal"
//           {...register("category")}
//         />

//         <TextField
//           fullWidth
//           multiline
//           rows={5}
//           label="Content"
//           margin="normal"
//           {...register("content")}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//         >
//           Save
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default BlogForm;



import { useState, useEffect } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/${id}`);

      setBlog({
        title: res.data.data.title || "",
        author: res.data.data.author || "",
        category: res.data.data.category || "",
        content: res.data.data.content || "",
      });
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await API.put(`/${id}`, blog);
      } else {
        await API.post("/", blog);
      }

      navigate("/");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Blog" : "Add Blog"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Author"
          name="author"
          value={blog.author}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Category"
          name="category"
          value={blog.category}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          multiline
          rows={6}
          label="Content"
          name="content"
          value={blog.content}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          {id ? "Update Blog" : "Save Blog"}
        </Button>
      </form>
    </Container>
  );
};

export default BlogForm;