import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then((res) => {
      setBlog(res.data.data);
    });
  }, []);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <Card sx={{ m: 4 }}>
      <CardContent>
        <Typography variant="h4">
          {blog.title}
        </Typography>

        <Typography>
          Author: {blog.author}
        </Typography>

        <Typography>
          Category: {blog.category}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {blog.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogDetails;