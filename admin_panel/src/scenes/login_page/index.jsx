// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";

// const Login_Form = () => {
    
//     const isNonMobile = useMediaQuery("(min-width:600px)");
  
//     const handleFormSubmit = (values) => {

//       console.log(values);
//     };
  
//     return (
//       <Box m="20px">
//         <Header title="LOGIN" subtitle="If you don't have an account, sign up" />
  
//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleBlur,
//             handleChange,
//             handleSubmit,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <Box
//                 display="grid"
//                 gap="30px"
//                 gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                 sx={{
//                   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                 }}
//               >
                
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Email"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.email}
//                   name="email"
//                   error={!!touched.email && !!errors.email}
//                   helperText={touched.email && errors.email}
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 {/* <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Username"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.username}
//                   name="username"
//                   error={!!touched.username && !!errors.username}
//                   helperText={touched.username && errors.username}
//                   sx={{ gridColumn: "span 2" }}
//                 /> */}

//                 {/* username veya email istenecek */}

                
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="password"
//                   label="Password"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.password}
//                   name="password"
//                   error={!!touched.password && !!errors.password}
//                   helperText={touched.password && errors.password}
//                   sx={{ gridColumn: "span 2" }}
//                 />
                
//               </Box>
//               <Box display="flex" justifyContent="end" mt="20px">
//                 <Button type="submit" color="secondary" variant="contained">
//                   Login
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     );
//   };

//   const checkoutSchema = yup.object().shape({

//     firstName: yup.string().required("required"),
//     lastName: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     password: yup.string().required("required"),
//     username: yup.string().required("required")
//   });

    
//   const initialValues = {

//     email: "",
//     password: "",
//     username: "",
//   };
  
//   export default Login_Form;


import { Box, Button, IconButton, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login_Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box m="20px">
      <Header
        title="LOGIN"
        subtitle="If you don't have an account, sign up"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type={showPassword ? "text" : "password"}
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default Login_Form;
