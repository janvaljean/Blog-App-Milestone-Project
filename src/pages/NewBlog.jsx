import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import blogImage from "../assets/blogImage.jpg"
import useBlogCalls from "../hooks/useBlogCalls";
import NewBlogForm, { registerSchema } from "../components/blog/NewBlogForm";


const NewBlog = () => {
  const { postBlogData } = useBlogCalls();
  

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
           
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 200,
              height: 200,
            }}
          >
            <img 
              src={blogImage}
              width="150"
            />
            
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            New Blog Create
          </Typography>

          <Formik
            initialValues={{
              title: "",
              content: "",
              image: "",
              category: "",
              slug: "",
              status: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values});
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <NewBlogForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            
          </Box>
        </Grid>

        
      </Grid>
    </Container>
  );
};

export default NewBlog;
