// import { useState, useEffect } from "react";
// import { Container, TextField, Button, Typography } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     category: "",
//     content: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await API.get(`/${id}`);

//       setBlog({
//         title: res.data.data.title || "",
//         author: res.data.data.author || "",
//         category: res.data.data.category || "",
//         content: res.data.data.content || "",
//       });
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setBlog({
//       ...blog,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (id) {
//         await API.put(`/${id}`, blog);
//       } else {
//         await API.post("/", blog);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error("Error saving blog:", error);
//       alert("Failed to save blog");
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         {id ? "Edit Blog" : "Add Blog"}
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Title"
//           name="title"
//           value={blog.title}
//           onChange={handleChange}
//           margin="normal"
//           required
//         />

//         <TextField
//           fullWidth
//           label="Author"
//           name="author"
//           value={blog.author}
//           onChange={handleChange}
//           margin="normal"
//           required
//         />

//         <TextField
//           fullWidth
//           label="Category"
//           name="category"
//           value={blog.category}
//           onChange={handleChange}
//           margin="normal"
//           required
//         />

//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           label="Content"
//           name="content"
//           value={blog.content}
//           onChange={handleChange}
//           margin="normal"
//           required
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           sx={{ mt: 2 }}
//         >
//           {id ? "Update Blog" : "Save Blog"}
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default BlogForm;




// Modern Blog form 

// import { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   MenuItem,
//   Paper,
//   Box,
// } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

// const categories = [
//   "Technology",
//   "Programming",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Web Development",
//   "Cyber Security",
//   "Business",
//   "Education",
//   "Health",
//   "Travel",
//   "Sports",
// ];

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     email: "",
//     category: "",
//     tags: "",
//     status: "Draft",
//     thumbnail: "",
//     shortDescription: "",
//     content: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await API.get(`/${id}`);

//       setBlog({
//         title: res.data.data.title || "",
//         author: res.data.data.author || "",
//         email: res.data.data.email || "",
//         category: res.data.data.category || "",
//         tags: Array.isArray(res.data.data.tags)
//           ? res.data.data.tags.join(", ")
//           : res.data.data.tags || "",
//         status: res.data.data.status || "Draft",
//         thumbnail: res.data.data.thumbnail || "",
//         shortDescription: res.data.data.shortDescription || "",
//         content: res.data.data.content || "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setBlog({
//       ...blog,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...blog,
//       tags: blog.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter((tag) => tag !== ""),
//     };

//     try {
//       if (id) {
//         await API.put(`/${id}`, payload);
//       } else {
//         await API.post("/", payload);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to save blog");
//     }
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 5 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           align="center"
//           gutterBottom
//         >
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

//         <Typography
//           align="center"
//           color="text.secondary"
//           sx={{ mb: 4 }}
//         >
//           Fill in the details to publish your blog post
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           {/* Basic Information */}

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Basic Information
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 name="title"
//                 value={blog.title}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Author Name"
//                 name="author"
//                 value={blog.author}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="email"
//                 label="Email Address"
//                 name="email"
//                 value={blog.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//           </Grid>

//           <Box mt={5} />

//           {/* Classification */}

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Classification
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 select
//                 fullWidth
//                 label="Category"
//                 name="category"
//                 value={blog.category}
//                 onChange={handleChange}
//                 required
//               >
//                 {categories.map((cat) => (
//                   <MenuItem key={cat} value={cat}>
//                     {cat}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Tags"
//                 helperText="Comma-separated tags"
//                 name="tags"
//                 value={blog.tags}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 select
//                 fullWidth
//                 label="Status"
//                 name="status"
//                 value={blog.status}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="Draft">Draft</MenuItem>
//                 <MenuItem value="Published">Published</MenuItem>
//               </TextField>
//             </Grid>
//           </Grid>

//           <Box mt={5} />

//           {/* Media */}

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Media
//           </Typography>

//           <TextField
//             fullWidth
//             label="Thumbnail URL"
//             placeholder="https://example.com/image.jpg"
//             name="thumbnail"
//             value={blog.thumbnail}
//             onChange={handleChange}
//           />

//           <Box mt={5} />

//           {/* Content */}

//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Content
//           </Typography>

//           <TextField
//             fullWidth
//             multiline
//             rows={3}
//             label="Short Description"
//             name="shortDescription"
//             value={blog.shortDescription}
//             onChange={handleChange}
//             sx={{ mb: 3 }}
//             required
//           />

//           <TextField
//             fullWidth
//             multiline
//             rows={10}
//             label="Post Content"
//             name="content"
//             value={blog.content}
//             onChange={handleChange}
//             required
//           />

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: 2,
//               mt: 4,
//             }}
//           >
//             <Button
//               variant="outlined"
//               color="inherit"
//               onClick={() => navigate("/")}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//             >
//               {id ? "Update Blog" : "Publish Blog"}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default BlogForm;


//by G


// import { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   MenuItem,
//   Paper,
//   Box,
//   Divider,
//   FormHelperText,
// } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

// const categories = [
//   "Technology",
//   "Programming",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Web Development",
//   "Cyber Security",
//   "Business",
//   "Education",
//   "Health",
//   "Travel",
//   "Sports",
// ];

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     email: "",
//     category: "",
//     tags: "",
//     status: "Draft",
//     thumbnail: "",
//     shortDescription: "",
//     content: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await API.get(`/${id}`);

//       setBlog({
//         title: res.data.data.title || "",
//         author: res.data.data.author || "",
//         email: res.data.data.email || "",
//         category: res.data.data.category || "",
//         tags: Array.isArray(res.data.data.tags)
//           ? res.data.data.tags.join(", ")
//           : res.data.data.tags || "",
//         status: res.data.data.status || "Draft",
//         thumbnail: res.data.data.thumbnail || "",
//         shortDescription: res.data.data.shortDescription || "",
//         content: res.data.data.content || "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setBlog({
//       ...blog,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...blog,
//       tags: blog.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter((tag) => tag !== ""),
//     };

//     try {
//       if (id) {
//         await API.put(`/${id}`, payload);
//       } else {
//         await API.post("/", payload);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to save blog");
//     }
//   };

//   // Common styling for Form Labels above inputs
//   const labelStyle = {
//     fontWeight: 600,
//     fontSize: "0.875rem",
//     color: "#2D3748",
//     mb: 0.8,
//   };

//   // Common styling for Outline Input field rounding & borders
//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "8px",
//       fontSize: "0.925rem",
//       "& fieldset": {
//         borderColor: "#E2E8F0",
//       },
//       "&:hover fieldset": {
//         borderColor: "#CBD5E0",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#635BFF",
//       },
//     },
//     "& .MuiInputBase-input": {
//       padding: "10.5px 14px",
//     },
//     "& .MuiInputBase-inputMultiline": {
//       padding: "0px",
//     },
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           p: { xs: 3, sm: 5 },
//           borderRadius: "12px",
//           border: "1px solid #E2E8F0",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           {/* Blog Information */}
//           <Typography variant="h6" sx={{ fontWeight: 700, color: "#2D3748", fontSize: "1.1rem" }}>
//             Blog Information
//           </Typography>
//           <Divider sx={{ my: 2, borderColor: "#EDF2F7" }} />

//           <Grid container spacing={2.5}>
//             <Grid item xs={12} sm={6}>
//               <Typography sx={labelStyle}>Title</Typography>
//               <TextField
//                 fullWidth
//                 name="title"
//                 value={blog.title}
//                 onChange={handleChange}
//                 placeholder="Enter post title"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <Typography sx={labelStyle}>Author Name</Typography>
//               <TextField
//                 fullWidth
//                 name="author"
//                 value={blog.author}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Typography sx={labelStyle}>Email Address</Typography>
//               <TextField
//                 fullWidth
//                 type="email"
//                 name="email"
//                 value={blog.email}
//                 onChange={handleChange}
//                 placeholder="author@example.com"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>
//           </Grid>

//           {/* Classification */}
//           <Typography variant="h6" sx={{ fontWeight: 700, color: "#2D3748", fontSize: "1.1rem", mt: 4 }}>
//             Classification
//           </Typography>
//           <Divider sx={{ my: 2, borderColor: "#EDF2F7" }} />

//           <Grid container spacing={2.5}>
//             <Grid item xs={12} sm={6}>
//               <Typography sx={labelStyle}>Category</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="category"
//                 value={blog.category}
//                 onChange={handleChange}
//                 sx={inputStyle}
//                 required
//               >
//                 {categories.map((cat) => (
//                   <MenuItem key={cat} value={cat}>
//                     {cat}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               {/* <Typography sx={labelStyle}>Tags</Typography>
//               <TextField
//                 fullWidth
//                 name="tags"
//                 value={blog.tags}
//                 onChange={handleChange}
//                 placeholder="Comma-separated tags"
//                 sx={inputStyle}
//               /> */}
//               <FormHelperText sx={{ ml: 0, mt: 0.5, color: "#718096" }}>
//                 Separate tags with commas
//               </FormHelperText>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography sx={labelStyle}>Status</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="status"
//                 value={blog.status}
//                 onChange={handleChange}
//                 sx={inputStyle}
//               >
//                 <MenuItem value="Draft">Draft</MenuItem>
//                 <MenuItem value="Published">Published</MenuItem>
//               </TextField>
//             </Grid>
//           </Grid>

//           {/* Media */}
//           <Typography variant="h6" sx={{ fontWeight: 700, color: "#2D3748", fontSize: "1.1rem", mt: 4 }}>
//             Media
//           </Typography>
//           <Divider sx={{ my: 2, borderColor: "#EDF2F7" }} />

//           <Box>
//             <Typography sx={labelStyle}>Thumbnail URL</Typography>
//             <TextField
//               fullWidth
//               name="thumbnail"
//               value={blog.thumbnail}
//               onChange={handleChange}
//               placeholder="https://example.com/image.jpg"
//               sx={inputStyle}
//             />
//           </Box>

//           {/* Content */}
//           <Typography variant="h6" sx={{ fontWeight: 700, color: "#2D3748", fontSize: "1.1rem", mt: 4 }}>
//             Content
//           </Typography>
//           <Divider sx={{ my: 2, borderColor: "#EDF2F7" }} />

//           <Box sx={{ mb: 3 }}>
//             <Typography sx={labelStyle}>Short Description</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               name="shortDescription"
//               value={blog.shortDescription}
//               onChange={handleChange}
//               placeholder="Brief summary of the post"
//               sx={inputStyle}
//               required
//             />
//           </Box>

//           <Box sx={{ mb: 1 }}>
//             <Typography sx={labelStyle}>Post Content</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={10}
//               name="content"
//               value={blog.content}
//               onChange={handleChange}
//               placeholder="Write your full blog post content here"
//               sx={inputStyle}
//               required
//             />
//             <FormHelperText sx={{ ml: 0, mt: 0.5, color: "#718096" }}>
//               Write your full blog post content here
//             </FormHelperText>
//           </Box>

//           {/* Footer Actions */}
//           <Divider sx={{ my: 3, borderColor: "#EDF2F7" }} />

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: 1.5,
//             }}
//           >
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/")}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 borderColor: "#E2E8F0",
//                 color: "#2D3748",
//                 "&:hover": {
//                   backgroundColor: "#F7FAFC",
//                   borderColor: "#CBD5E0",
//                 },
//               }}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               disableElevation
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 backgroundColor: "#635BFF",
//                 "&:hover": {
//                   backgroundColor: "#5248FF",
//                 },
//               }}
//             >
//               {id ? "Update Post" : "Publish Post"}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default BlogForm;

// import { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   MenuItem,
//   Paper,
//   Box,
//   Divider,
// } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

// const categories = [
//   "Technology",
//   "Programming",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Web Development",
//   "Cyber Security",
//   "Business",
//   "Education",
//   "Health",
//   "Travel",
//   "Sports",
// ];

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     email: "",
//     category: "",
//     tags: "",
//     status: "Draft",
//     thumbnail: "",
//     shortDescription: "",
//     content: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await API.get(`/${id}`);

//       setBlog({
//         title: res.data.data.title || "",
//         author: res.data.data.author || "",
//         email: res.data.data.email || "",
//         category: res.data.data.category || "",
//         tags: Array.isArray(res.data.data.tags)
//           ? res.data.data.tags.join(", ")
//           : res.data.data.tags || "",
//         status: res.data.data.status || "Draft",
//         thumbnail: res.data.data.thumbnail || "",
//         shortDescription: res.data.data.shortDescription || "",
//         content: res.data.data.content || "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setBlog({
//       ...blog,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...blog,
//       tags: blog.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter((tag) => tag !== ""),
//     };

//     try {
//       if (id) {
//         await API.put(`/${id}`, payload);
//       } else {
//         await API.post("/", payload);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to save blog");
//     }
//   };

//   // Common styling for Form Labels above inputs
//   const labelStyle = {
//     fontWeight: 600,
//     fontSize: "0.875rem",
//     color: "#2D3748",
//     mb: 0.8,
//   };

//   // Common styling for Section Titles above fields
//   const sectionTitleStyle = {
//     fontWeight: 700,
//     color: "#2D3748",
//     fontSize: "1.1rem",
//   };

//   // Common styling for Outline Input field rounding & borders
//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "8px",
//       fontSize: "0.925rem",
//       "& fieldset": {
//         borderColor: "#E2E8F0",
//       },
//       "&:hover fieldset": {
//         borderColor: "#CBD5E0",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#635BFF",
//       },
//     },
//     "& .MuiInputBase-input": {
//       padding: "10.5px 14px",
//     },
//     "& .MuiInputBase-inputMultiline": {
//       padding: "0px",
//     },
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           p: { xs: 3, sm: 5 },
//           borderRadius: "12px",
//           border: "1px solid #E2E8F0",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           {/* Basic Information - Header Centered */}
//           <Typography
//             variant="h6"
//             align="center"
//             sx={sectionTitleStyle}
//           >
//             Basic Information
//           </Typography>
//           <Divider sx={{ my: 2.5, borderColor: "#EDF2F7" }} />

//           <Grid container spacing={2.5}>
//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Title</Typography>
//               <TextField
//                 fullWidth
//                 name="title"
//                 value={blog.title}
//                 onChange={handleChange}
//                 placeholder="Enter post title"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Author Name</Typography>
//               <TextField
//                 fullWidth
//                 name="author"
//                 value={blog.author}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Email Address</Typography>
//               <TextField
//                 fullWidth
//                 type="email"
//                 name="email"
//                 value={blog.email}
//                 onChange={handleChange}
//                 placeholder="author@example.com"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           {/* Classification - Header Above Fields */}
//           <Typography sx={sectionTitleStyle}>
//             Classification
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />
          
//           <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Category</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="category"
//                 value={blog.category}
//                 onChange={handleChange}
//                 placeholder="Select a category"
//                 sx={inputStyle}
//                 required
//               >
//                 {categories.map((cat) => (
//                   <MenuItem key={cat} value={cat}>
//                     {cat}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Tags</Typography>
//               <TextField
//                 fullWidth
//                 name="tags"
//                 value={blog.tags}
//                 onChange={handleChange}
//                 placeholder="Comma-separated tags"
//                 sx={inputStyle}
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Status</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="status"
//                 value={blog.status}
//                 onChange={handleChange}
//                 sx={inputStyle}
//               >
//                 <MenuItem value="Draft">Draft</MenuItem>
//                 <MenuItem value="Published">Published</MenuItem>
//               </TextField>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />



//           {/* Media - Header Above Field */}
//           <Typography sx={sectionTitleStyle}>
//             Media
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

//           <Box sx={{ mt: 2 }}>
//             <Grid container spacing={2.5}>
//               <Grid item xs={12} sm={6}>
//                 <Typography sx={labelStyle}>Thumbnail URL</Typography>
//                 <TextField
//                   fullWidth
//                   name="thumbnail"
//                   value={blog.thumbnail}
//                   onChange={handleChange}
//                   placeholder="https://example.com/image.jpg"
//                   sx={inputStyle}
//                 />
//               </Grid>
//             </Grid>
//           </Box>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           {/* Content - Header Above Fields */}
//           <Typography sx={sectionTitleStyle}>
//             Content
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

//           <Box sx={{ mt: 2 }}>
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={labelStyle}>Short Description</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={3}
//                 name="shortDescription"
//                 value={blog.shortDescription}
//                 onChange={handleChange}
//                 placeholder="Brief summary of the post"
//                 sx={inputStyle}
//                 required
//               />
//             </Box>

//             <Box>
//               <Typography sx={labelStyle}>Post Content</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={10}
//                 name="content"
//                 value={blog.content}
//                 onChange={handleChange}
//                 placeholder="Write your full blog post content here"
//                 sx={inputStyle}
//                 required
//               />
//             </Box>
//           </Box>

//           {/* Footer Actions */}
//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: 1.5,
//             }}
//           >
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/")}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 borderColor: "#E2E8F0",
//                 color: "#2D3748",
//                 "&:hover": {
//                   backgroundColor: "#F7FAFC",
//                   borderColor: "#CBD5E0",
//                 },
//               }}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               disableElevation
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 backgroundColor: "#635BFF",
//                 "&:hover": {
//                   backgroundColor: "#5248FF",
//                 },
//               }}
//             >
//               {id ? "Update Post" : "Publish Post"}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default BlogForm;

// import { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   MenuItem,
//   Paper,
//   Box,
//   Divider,
// } from "@mui/material";
// import API from "../services/api";
// import { useNavigate, useParams } from "react-router-dom";

// const categories = [
//   "Technology",
//   "Programming",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Web Development",
//   "Cyber Security",
//   "Business",
//   "Education",
//   "Health",
//   "Travel",
//   "Sports",
// ];

// const BlogForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     email: "",
//     category: "",
//     tags: "",
//     status: "Draft",
//     thumbnail: "",
//     shortDescription: "",
//     content: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await API.get(`/${id}`);

//       setBlog({
//         title: res.data.data.title || "",
//         author: res.data.data.author || "",
//         email: res.data.data.email || "",
//         category: res.data.data.category || "",
//         tags: Array.isArray(res.data.data.tags)
//           ? res.data.data.tags.join(", ")
//           : res.data.data.tags || "",
//         status: res.data.data.status || "Draft",
//         thumbnail: res.data.data.thumbnail || "",
//         shortDescription: res.data.data.shortDescription || "",
//         content: res.data.data.content || "",
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setBlog({
//       ...blog,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...blog,
//       tags: blog.tags
//         ? blog.tags
//             .split(",")
//             .map((tag) => tag.trim())
//             .filter((tag) => tag !== "")
//         : [],
//     };

//     try {
//       if (id) {
//         await API.put(`/${id}`, payload);
//       } else {
//         await API.post("/", payload);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to save blog");
//     }
//   };

//   // Common styling for Form Labels above inputs
//   const labelStyle = {
//     fontWeight: 600,
//     fontSize: "0.875rem",
//     color: "#2D3748",
//     mb: 0.8,
//   };

//   // Common styling for Section Titles above fields
//   const sectionTitleStyle = {
//     fontWeight: 700,
//     color: "#2D3748",
//     fontSize: "1.1rem",
//   };

//   // Common styling for Outline Input field rounding & borders
//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "8px",
//       fontSize: "0.925rem",
//       "& fieldset": {
//         borderColor: "#E2E8F0",
//       },
//       "&:hover fieldset": {
//         borderColor: "#CBD5E0",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#635BFF",
//       },
//     },
//     "& .MuiInputBase-input": {
//       padding: "10.5px 14px",
//     },
//     "& .MuiInputBase-inputMultiline": {
//       padding: "0px",
//     },
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Paper
//         elevation={0}
//         sx={{
//           p: { xs: 3, sm: 5 },
//           borderRadius: "12px",
//           border: "1px solid #E2E8F0",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           {/* Basic Information - Header Centered */}
//           <Typography
//             variant="h6"
//             align="center"
//             sx={sectionTitleStyle}
//           >
//             Basic Information
//           </Typography>
//           <Divider sx={{ my: 2.5, borderColor: "#EDF2F7" }} />

//           <Grid container spacing={2.5}>
//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Title</Typography>
//               <TextField
//                 fullWidth
//                 name="title"
//                 value={blog.title}
//                 onChange={handleChange}
//                 placeholder="Enter post title"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Author Name</Typography>
//               <TextField
//                 fullWidth
//                 name="author"
//                 value={blog.author}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Email Address</Typography>
//               <TextField
//                 fullWidth
//                 type="email"
//                 name="email"
//                 value={blog.email}
//                 onChange={handleChange}
//                 placeholder="author@example.com"
//                 sx={inputStyle}
//                 required
//               />
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           {/* Classification - Header Above Fields */}
//           <Typography sx={sectionTitleStyle}>
//             Classification
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />
          
//           <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Category</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="category"
//                 value={blog.category}
//                 onChange={handleChange}
//                 placeholder="Select a category"
//                 sx={inputStyle}
//                 required
//               >
//                 {categories.map((cat) => (
//                   <MenuItem key={cat} value={cat}>
//                     {cat}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Tags</Typography>
//               <TextField
//                 fullWidth
//                 name="tags"
//                 value={blog.tags}
//                 onChange={handleChange}
//                 placeholder="Comma-separated tags"
//                 sx={inputStyle}
//               />
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Typography sx={labelStyle}>Status</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 name="status"
//                 value={blog.status}
//                 onChange={handleChange}
//                 sx={inputStyle}
//               >
//                 <MenuItem value="Draft">Draft</MenuItem>
//                 <MenuItem value="Published">Published</MenuItem>
//               </TextField>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           {/* Media Section */}
//           <Typography sx={sectionTitleStyle}>
//             Media
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

//           <Box sx={{ mt: 2 }}>
//             <Grid container spacing={2.5}>
//               <Grid item xs={12}>
//                 <Typography sx={labelStyle}>Thumbnail URL</Typography>
//                 <TextField
//                   fullWidth
//                   name="thumbnail"
//                   value={blog.thumbnail}
//                   onChange={handleChange}
//                   placeholder="https://example.com/image.jpg"
//                   sx={inputStyle}
//                 />
//               </Grid>

//               {/* Image Preview Box */}
//               {blog.thumbnail && (
//                 <Grid item xs={12}>
//                   <Typography sx={labelStyle}>Image Preview</Typography>
//                   <Box
//                     component="img"
//                     src={blog.thumbnail}
//                     alt="Thumbnail Preview"
//                     onError={(e) => {
//                       e.target.style.display = "none";
//                     }}
//                     sx={{
//                       maxHeight: 200,
//                       maxWidth: "100%",
//                       borderRadius: "8px",
//                       border: "1px solid #E2E8F0",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Grid>
//               )}
//             </Grid>
//           </Box>

//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           {/* Content Section */}
//           <Typography sx={sectionTitleStyle}>
//             Content
//           </Typography>
//           <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

//           <Box sx={{ mt: 2 }}>
//             <Box sx={{ mb: 3 }}>
//               <Typography sx={labelStyle}>Short Description</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={3}
//                 name="shortDescription"
//                 value={blog.shortDescription}
//                 onChange={handleChange}
//                 placeholder="Brief summary of the post"
//                 sx={inputStyle}
//                 required
//               />
//             </Box>

//             <Box>
//               <Typography sx={labelStyle}>Post Content</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={10}
//                 name="content"
//                 value={blog.content}
//                 onChange={handleChange}
//                 placeholder="Write your full blog post content here"
//                 sx={inputStyle}
//                 required
//               />
//             </Box>
//           </Box>

//           {/* Footer Actions */}
//           <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: 1.5,
//             }}
//           >
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/")}
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 borderColor: "#E2E8F0",
//                 color: "#2D3748",
//                 "&:hover": {
//                   backgroundColor: "#F7FAFC",
//                   borderColor: "#CBD5E0",
//                 },
//               }}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               disableElevation
//               sx={{
//                 textTransform: "none",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 px: 3,
//                 py: 1,
//                 backgroundColor: "#635BFF",
//                 "&:hover": {
//                   backgroundColor: "#5248FF",
//                 },
//               }}
//             >
//               {id ? "Update Post" : "Publish Post"}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default BlogForm;

import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const categories = [
  "Technology",
  "Programming",
  "Artificial Intelligence",
  "Machine Learning",
  "Web Development",
  "Cyber Security",
  "Business",
  "Education",
  "Health",
  "Travel",
  "Sports",
];

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    email: "",
    category: "",
    tags: "",
    status: "Draft",
    thumbnail: "",
    shortDescription: "",
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
      const data = res.data.data || res.data;

      setBlog({
        title: data.title || "",
        author: data.author || "",
        email: data.email || "",
        category: data.category || "",
        tags: Array.isArray(data.tags)
          ? data.tags.join(", ")
          : data.tags || "",
        status: data.status || "Draft",
        thumbnail: data.thumbnail || "",
        shortDescription: data.shortDescription || "",
        content: data.content || "",
      });
    } catch (err) {
      console.error("Error fetching blog:", err);
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

    const payload = {
      ...blog,
      tags: blog.tags
        ? blog.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "")
        : [],
    };

    try {
      if (id) {
        await API.put(`/${id}`, payload);
      } else {
        await API.post("/", payload);
      }

      navigate("/");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog. Please check all required fields.");
    }
  };

  const labelStyle = {
    fontWeight: 600,
    fontSize: "0.875rem",
    color: "#2D3748",
    mb: 0.8,
  };

  const sectionTitleStyle = {
    fontWeight: 700,
    color: "#2D3748",
    fontSize: "1.1rem",
  };

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      fontSize: "0.925rem",
      "& fieldset": {
        borderColor: "#E2E8F0",
      },
      "&:hover fieldset": {
        borderColor: "#CBD5E0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#635BFF",
      },
    },
    "& .MuiInputBase-input": {
      padding: "10.5px 14px",
    },
    "& .MuiInputBase-inputMultiline": {
      padding: "0px",
    },
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <Typography
            variant="h6"
            align="center"
            sx={sectionTitleStyle}
          >
            Basic Information
          </Typography>
          <Divider sx={{ my: 2.5, borderColor: "#EDF2F7" }} />

          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Title</Typography>
              <TextField
                fullWidth
                name="title"
                value={blog.title}
                onChange={handleChange}
                placeholder="Enter post title"
                sx={inputStyle}
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Author Name</Typography>
              <TextField
                fullWidth
                name="author"
                value={blog.author}
                onChange={handleChange}
                placeholder="Enter author name"
                sx={inputStyle}
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Email Address</Typography>
              <TextField
                fullWidth
                type="email"
                name="email"
                value={blog.email}
                onChange={handleChange}
                placeholder="author@example.com"
                sx={inputStyle}
                required
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

          {/* Classification */}
          <Typography sx={sectionTitleStyle}>
            Classification
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

          <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Category</Typography>
              <TextField
                select
                fullWidth
                name="category"
                value={blog.category}
                onChange={handleChange}
                placeholder="Select a category"
                sx={inputStyle}
                required
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Tags</Typography>
              <TextField
                fullWidth
                name="tags"
                value={blog.tags}
                onChange={handleChange}
                placeholder="Comma-separated tags"
                sx={inputStyle}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography sx={labelStyle}>Status</Typography>
              <TextField
                select
                fullWidth
                name="status"
                value={blog.status}
                onChange={handleChange}
                sx={inputStyle}
              >
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Published">Published</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

          {/* Media Section */}
          <Typography sx={sectionTitleStyle}>
            Media
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <Typography sx={labelStyle}>Thumbnail URL</Typography>
                <TextField
                  fullWidth
                  name="thumbnail"
                  value={blog.thumbnail}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  sx={inputStyle}
                />
              </Grid>

              {blog.thumbnail && (
                <Grid item xs={12}>
                  <Typography sx={labelStyle}>Image Preview</Typography>
                  <Box
                    component="img"
                    src={blog.thumbnail}
                    alt="Thumbnail Preview"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                    sx={{
                      maxHeight: 200,
                      maxWidth: "100%",
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Box>

          <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

          {/* Content Section */}
          <Typography sx={sectionTitleStyle}>
            Content
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: "#EDF2F7" }} />

          <Box sx={{ mt: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelStyle}>Short Description</Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="shortDescription"
                value={blog.shortDescription}
                onChange={handleChange}
                placeholder="Brief summary of the post"
                sx={inputStyle}
                required
              />
            </Box>

            <Box>
              <Typography sx={labelStyle}>Post Content</Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                name="content"
                value={blog.content}
                onChange={handleChange}
                placeholder="Write your full blog post content here"
                sx={inputStyle}
                required
              />
            </Box>
          </Box>

          {/* Footer Actions */}
          <Divider sx={{ my: 3.5, borderColor: "#EDF2F7" }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1.5,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                px: 3,
                py: 1,
                borderColor: "#E2E8F0",
                color: "#2D3748",
                "&:hover": {
                  backgroundColor: "#F7FAFC",
                  borderColor: "#CBD5E0",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                px: 3,
                py: 1,
                backgroundColor: "#635BFF",
                "&:hover": {
                  backgroundColor: "#5248FF",
                },
              }}
            >
              {id ? "Update Post" : "Publish Post"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default BlogForm;