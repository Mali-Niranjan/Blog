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
//     const res = await API.get("/");
//     setBlogs(res.data.data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const deleteBlog = async (id) => {
//     await API.delete(`/${id}`);
//     fetchBlogs();
//   };

//   const searchBlog = async () => {
//     const res = await API.get(`/search?keyword=${search}`);
//     setBlogs(res.data.data);
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
//                   onClick={() =>
//                     navigate(`/view/${blog._id}`)
//                   }
//                 >
//                   View
//                 </Button>

//                 <Button
//                   onClick={() =>
//                     navigate(`/edit/${blog._id}`)
//                   }
//                 >
//                   Edit
//                 </Button>

//                 <Button
//                   color="error"
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




import { useEffect, useState } from "react";
import API from "../services/api";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/");
      setBlogs(res.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const searchBlog = async () => {
    try {
      const res = await API.get(`/search?keyword=${search}`);
      setBlogs(res.data.data);
    } catch (error) {
      console.error("Error searching blog:", error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        variant="contained"
        onClick={() => navigate("/add")}
      >
        Add Blog
      </Button>

      <TextField
        label="Search"
        sx={{ ml: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        sx={{ ml: 2 }}
        variant="outlined"
        onClick={searchBlog}
      >
        Search
      </Button>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog._id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>{blog.category}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    mr: 1,
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                  onClick={() => navigate(`/view/${blog._id}`)}
                >
                  View
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffc107",
                    color: "#000",
                    mr: 1,
                    "&:hover": {
                      backgroundColor: "#ffb300",
                    },
                  }}
                  onClick={() => navigate(`/edit/${blog._id}`)}
                >
                  Edit
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f44336",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                    },
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
    </Container>
  );
};

export default BlogList;

