// import { useEffect, useState } from "react";
// import API from "../services/api";
// import {
//   Button,
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [search, setSearch] = useState("");

//   const navigate = useNavigate();

//   const fetchBlogs = async () => {
//     try {
//       const res = await API.get("/");
//       setBlogs(res.data.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const deleteBlog = async (id) => {
//     try {
//       await API.delete(`/${id}`);
//       fetchBlogs();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   const searchBlog = async () => {
//     try {
//       const res = await API.get(`/search?keyword=${search}`);
//       setBlogs(res.data.data);
//     } catch (error) {
//       console.error("Error searching blog:", error);
//     }
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Button
//         variant="contained"
//         onClick={() => navigate("/add")}
//       >
//         Add Blog
//       </Button>

//       <TextField
//         label="Search"
//         sx={{ ml: 2 }}
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Button
//         sx={{ ml: 2 }}
//         variant="outlined"
//         onClick={searchBlog}
//       >
//         Search
//       </Button>

//       <Table sx={{ mt: 3 }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Title</TableCell>
//             <TableCell>Author</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {blogs.map((blog) => (
//             <TableRow key={blog._id}>
//               <TableCell>{blog.title}</TableCell>
//               <TableCell>{blog.author}</TableCell>
//               <TableCell>{blog.category}</TableCell>

//               <TableCell>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#2196f3",
//                     color: "#fff",
//                     mr: 1,
//                     "&:hover": {
//                       backgroundColor: "#1976d2",
//                     },
//                   }}
//                   onClick={() => navigate(`/view/${blog._id}`)}
//                 >
//                   View
//                 </Button>

//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#ffc107",
//                     color: "#000",
//                     mr: 1,
//                     "&:hover": {
//                       backgroundColor: "#ffb300",
//                     },
//                   }}
//                   onClick={() => navigate(`/edit/${blog._id}`)}
//                 >
//                   Edit
//                 </Button>

//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#f44336",
//                     color: "#fff",
//                     "&:hover": {
//                       backgroundColor: "#d32f2f",
//                     },
//                   }}
//                   onClick={() => deleteBlog(blog._id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// };

// export default BlogList;




//Mpdern table 

import { useEffect, useState } from "react";
import API from "../services/api";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [categories, setCategories] = useState([]);
const [statuses, setStatuses] = useState([]);

  const navigate = useNavigate();

  // const fetchBlogs = async () => {
  //   try {
  //     const res = await API.get("/");
  //     setBlogs(res.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchBlogs = async () => {
  try {
    const res = await API.get("/");
    const blogData = res.data.data;

    setBlogs(blogData);

    // Create unique category list
    const uniqueCategories = [
      ...new Set(
        blogData
          .map((blog) => blog.category)
          .filter((cat) => cat && cat.trim() !== "")
      ),
    ];

    setCategories(uniqueCategories);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await API.delete(`/${id}`);
      fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  const searchBlog = async () => {
    try {
      const res = await API.get(`/search?keyword=${search}`);
      setBlogs(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>

      {/* Header */}

      <Card
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* Left */}
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Blog Post Manager
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Manage and organize your blog posts
            </Typography>
          </Box>

          {/* Right */}
          <Box
            display="flex"
            gap={2}
            mt={{ xs: 2, md: 0 }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                px: 3,
                py: 1,
                fontWeight: "bold",
              }}
            >
              Export CSV
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/add")}
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                px: 3,
                py: 1,
                fontWeight: "bold",
              }}
            >
              + Add Post
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Search */}
        <Card
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          {/* <Box
            display="flex"
            alignItems="center"
            gap={2}
            flexWrap="nowrap"
          > */}
          <Box
  sx={{
    display: "flex",
    justifyContent: "flex-end", // Move everything to the right
    alignItems: "center",
    gap: 2,
    width: "100%",
  }}
>
            Search Bar
            <TextField
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            {/* Search Button */}
            <Button
              variant="contained"
              onClick={searchBlog}
              sx={{
                minWidth: "50px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                padding: 0,
              }}
            >
              🔍
            </Button>

            {/* Category */}
            {/* <TextField
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                width: 180,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem value="All">All Categories</MenuItem>
            </TextField> */}

            <TextField
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                width: 180,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem value="All">All Categories</MenuItem>

              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>

            {/* Status */}
            <TextField
              select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{
                width: 160,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            >
              <MenuItem value="All">All Status</MenuItem>
            </TextField>
          </Box>
        </Card>


      {/* Table */}

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Table>

          <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Author</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Created</b></TableCell>
              <TableCell align="center"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {blogs.map((blog, index) => ( */}
            {blogs
  .filter((blog) => {
    if (category === "All") return true;
    return blog.category === category;
  })
  .map((blog, index) => (
              <TableRow key={blog._id} hover>

                <TableCell>{index + 1}</TableCell>

                <TableCell>{blog.title}</TableCell>

                <TableCell>{blog.author}</TableCell>

                <TableCell>{blog.category}</TableCell>

                <TableCell>
                  <Chip
                    label="Published"
                    color="success"
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : "-"}
                </TableCell>

                <TableCell align="center">

                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mr: 1,
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                    onClick={() => navigate(`/view/${blog._id}`)}
                  >
                    View
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    sx={{
                      mr: 1,
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                    onClick={() => navigate(`/edit/${blog._id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </Button>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <Typography
        align="center"
        sx={{
          mt: 2,
          color: "gray",
        }}
      >
        Showing {blogs.length} record{blogs.length !== 1 ? "s" : ""}
      </Typography>

    </Container>
  );
};

export default BlogList;