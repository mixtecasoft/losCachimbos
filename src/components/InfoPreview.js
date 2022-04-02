// material
import { styled } from "@mui/material/styles";
// material
import { Box, Typography, Rating, Stack } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
   display: "flex",
   alignItems: "center",
   justifyContent: "flex-end",
});

// ----------------------------------------------------------------------

export default function InfoPreview({ category, range_, ...other }) {
   return (
      <RootStyle component="span" {...other}>
         <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
         >
            <Rating value={range_ ? range_ : 0} size="small" readOnly />

            <Typography variant="subtitle2">{category}</Typography>
         </Stack>
      </RootStyle>
   );
}
