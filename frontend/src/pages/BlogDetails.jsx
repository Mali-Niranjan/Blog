// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { useParams } from "react-router-dom";
// import { Card, CardContent, Typography } from "@mui/material";

// const BlogDetails = () => {
//   const { id } = useParams();

//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     API.get(`/${id}`).then((res) => {
//       setBlog(res.data.data);
//     });
//   }, []);

//   if (!blog) return <h2>Loading...</h2>;

//   return (
//     <Card sx={{ m: 4 }}>
//       <CardContent>
//         <Typography variant="h4">
//           {blog.title}
//         </Typography>

//         <Typography>
//           Author: {blog.author}
//         </Typography>

//         <Typography>
//           Category: {blog.category}
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           {blog.content}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default BlogDetails;


// By G

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { useParams } from "react-router-dom";
// import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     API.get(`/${id}`).then((res) => {
//       setBlog(res.data.data);
//     });
//   }, [id]);

//   if (!blog) return <h2>Loading...</h2>;

//   // Make sure 'thumbnail' matches the field name coming from your API response
//   // e.g., blog.thumbnail, blog.media, or blog.image
//   const imageSrc = blog.thumbnail || blog.media || blog.image;

//   return (
//     <Card sx={{ m: 4, textAlign: "center" }}>
//       {/* 1. Show Thumbnail on top if present */}
//       {imageSrc && (
//         <CardMedia
//           component="img"
//           image={
//             // Handles both full URL links and local server upload paths
//             imageSrc.startsWith("http")
//               ? imageSrc
//               : `http://localhost:5000/${imageSrc}`
//           }
//           alt={blog.title}
//           sx={{
//             maxHeight: 400,
//             objectFit: "cover",
//             width: "100%",
//           }}
//         />
//       )}

//       {/* 2. Blog Title and Details */}
//       <CardContent>
//         <Typography variant="h4" sx={{ mt: 2 }}>
//           {blog.title}
//         </Typography>

//         <Typography color="text.secondary">
//           Author: {blog.author}
//         </Typography>

//         <Typography color="text.secondary">
//           Category: {blog.category}
//         </Typography>

//         <Typography sx={{ mt: 2, textAlign: "left" }}>
//           {blog.content}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default BlogDetails;

//by G
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import API from "../services/api";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/${id}`);
        // Adjust depending on whether backend wraps data inside res.data.data or res.data
        setBlog(res.data.data || res.data);
      } catch (err) {
        console.error("Error loading blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!blog) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6">Blog post not found.</Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate("/")}>
          Back to Posts
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Back Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            textTransform: "none",
            color: "#4A5568",
            borderColor: "#E2E8F0",
            borderRadius: "6px",
            px: 2,
            "&:hover": {
              backgroundColor: "#F7FAFC",
              borderColor: "#CBD5E0",
            },
          }}
        >
          ← Back to Posts
        </Button>
      </Box>

      {/* Main Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {/* Category Chip */}
        {blog.category && (
          <Chip
            label={blog.category}
            size="small"
            sx={{
              backgroundColor: "#EBF8FF",
              color: "#2B6CB0",
              fontWeight: 600,
              fontSize: "0.75rem",
              mb: 1.5,
            }}
          />
        )}

        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 800,
            color: "#1A202C",
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2.25rem" },
          }}
        >
          {blog.title}
        </Typography>

        {/* Author */}
        <Typography
          variant="body2"
          sx={{ color: "#4A5568", mb: 2, fontSize: "0.95rem" }}
        >
          Author: <strong>{blog.author}</strong>
        </Typography>

        <Divider sx={{ my: 3, borderColor: "#EDF2F7" }} />

        {/* --- THUMBNAIL IMAGE COMPONENT --- */}
        {blog.thumbnail && (
          <Box sx={{ mb: 3.5, width: "100%", overflow: "hidden" }}>
            <Box
              component="img"
              src={blog.thumbnail}
              alt={blog.title}
              onError={(e) => {
                // Hides image if the URL is broken/invalid
                e.target.style.display = "none";
              }}
              sx={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            />
          </Box>
        )}

        {/* Short Description or Main Content */}
        <Typography
          variant="body1"
          sx={{
            color: "#2D3748",
            lineHeight: 1.7,
            fontSize: "1rem",
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content || blog.shortDescription}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogDetail;