import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// components
import { MotionContainer, varBounceIn } from "../components/animate";
import Page from "../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
   display: "flex",
   minHeight: "100%",
   alignItems: "center",
   paddingTop: theme.spacing(15),
   paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page404() {
   return (
      <RootStyle title="404 Page Not Found | Minimal-UI">
         <Container>
            <MotionContainer initial="initial" open>
               <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
                  <motion.div variants={varBounceIn}>
                     <Typography variant="h3" paragraph>
                        Lo sentimos, página no encontrada!
                     </Typography>
                  </motion.div>
                  <Typography sx={{ color: "text.secondary" }}>
                     Lo sentimos, no pudimos encontrar la página que estás
                     buscando. ¿Quizás has escrito mal la URL? Asegúrese de
                     revisar su ortografía.
                  </Typography>

                  <motion.div variants={varBounceIn}>
                     <Box
                        component="img"
                        src="/static/illustrations/illustration_404.svg"
                        sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
                     />
                  </motion.div>

                  <Button
                     to="/app/dashboard"
                     size="large"
                     variant="contained"
                     component={RouterLink}
                  >
                     Página principal
                  </Button>
               </Box>
            </MotionContainer>
         </Container>
      </RootStyle>
   );
}
