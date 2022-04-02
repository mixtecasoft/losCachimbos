import React from "react";

// material
import { Grid, Box, CircularProgress } from "@mui/material";

const Loading = () => {
   return (
      <Grid
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
         style={{ minHeight: "100vh" }}
      >
         <Grid item xs={3}>
            <Box sx={{ display: "flex center" }}>
               <CircularProgress />
            </Box>
         </Grid>
      </Grid>
   );
};

export default Loading;
