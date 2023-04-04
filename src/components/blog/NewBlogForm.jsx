import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { object, string } from "yup"
import useBlogCalls from "../../hooks/useBlogCalls"

export const registerSchema = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required(),

  email: string().email().required(),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
})


const status =[{
    id:1,
    value: "d",
    type: "Draft",
},
{
    id:2,
    value: "p",
    type: "Published",

}]
const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const NewBlogForm = ({ values, handleChange, errors, touched, handleBlur }) => {
      const {getCategories} = useBlogCalls()
      const {blogs,categories} = useSelector((state) => state.blog)
    
       useEffect(() => {
         // getFirms()
         getCategories()
        }, []) 
        console.log(blogs)
        console.log(categories)
        
//   {categories.map((category)=>categorieNames.push(category))}

 
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Title"
            name="title"
            id="title"
            type="text"
            variant="outlined"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
            error={touched.title && Boolean(errors.title)}
          />
          <TextField
            label="Image"
            name="image"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />
        <FormControl fullWidth>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          name="category"   
          value={values.category}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              value={category.name} 
            >
              {category.name}
            </MenuItem>
          ))}
        </Select>
        </FormControl> 
         <FormControl fullWidth>

        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          name="status"
          value={values.status}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {status.map((statu) => (
            <MenuItem
              key={statu.id}
              value={statu.value} 
            >
              {statu.type}
            </MenuItem>
          ))}
        </Select>
         </FormControl>

      
        <TextField
            label="Content"
            name="content"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.content && errors.content}
            error={touched.content && Boolean(errors.content)}
          />

          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  )
}

export default NewBlogForm
