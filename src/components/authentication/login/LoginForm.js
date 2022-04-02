import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
   Link,
   Stack,
   Checkbox,
   TextField,
   IconButton,
   InputAdornment,
   FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

export default function LoginForm() {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const LoginSchema = Yup.object().shape({
      email: Yup.string()
         .email("Email must be a valid email address")
         .required("Email is required"),
      password: Yup.string().required("Password is required"),
   });

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
         remember: true,
      },
      validationSchema: LoginSchema,
      onSubmit: () => {
         navigate("/dashboard", { replace: true });
      },
   });

   const {
      errors,
      touched,
      values,
      isSubmitting,
      handleSubmit,
      getFieldProps,
   } = formik;

   const handleShowPassword = () => {
      setShowPassword((show) => !show);
   };

   return (
      <FormikProvider value={formik}>
         <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
               <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Correo electrónico"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
               />

               <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  label="Contraseña"
                  {...getFieldProps("password")}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={handleShowPassword} edge="end">
                              <Icon
                                 icon={showPassword ? eyeFill : eyeOffFill}
                              />
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
               />
            </Stack>

            <Stack
               direction="row"
               alignItems="center"
               justifyContent="space-between"
               sx={{ my: 2 }}
            >
               <FormControlLabel
                  control={
                     <Checkbox
                        {...getFieldProps("remember")}
                        checked={values.remember}
                     />
                  }
                  label="Recuérdame"
               />

               <Link component={RouterLink} variant="subtitle2" to="#">
                  ¿Se te olvidó tu contraseña?
               </Link>
            </Stack>

            <LoadingButton
               fullWidth
               size="large"
               type="submit"
               variant="contained"
               loading={isSubmitting}
            >
               Iniciar sesión
            </LoadingButton>
         </Form>
      </FormikProvider>
   );
}
