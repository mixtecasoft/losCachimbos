import { Icon } from "@iconify/react";
import shoppingCartFill from "@iconify/icons-eva/shopping-cart-fill";
// material
import { styled } from "@mui/material/styles";
import { Badge, Button } from "@mui/material";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
   zIndex: 999,
   right: 0,
   display: "flex",
   cursor: "pointer",
   position: "fixed",
   alignItems: "center",
   top: theme.spacing(8),
   height: theme.spacing(5),
   paddingLeft: theme.spacing(2),
   paddingRight: theme.spacing(2),
   paddingTop: theme.spacing(1.25),
   boxShadow: theme.customShadows.z20,
   color: theme.palette.text.primary,
   backgroundColor: theme.palette.background.paper,
   borderTopLeftRadius: theme.shape.borderRadiusMd,
   borderBottomLeftRadius: theme.shape.borderRadiusMd,
   transition: theme.transitions.create("opacity"),
   "&:hover": { opacity: 0.4 },
}));
const ButonStyle = styled("div")(({ theme }) => ({
   zIndex: 999,
   right: 0,
   display: "flex",
   cursor: "pointer",
   position: "fixed",
   alignItems: "center",
   top: theme.spacing(14),
   boxShadow: theme.customShadows.z20,
   color: theme.palette.text.primary,
   backgroundColor: theme.palette.background.paper,
   borderTopLeftRadius: theme.shape.borderRadiusMd,
   borderBottomLeftRadius: theme.shape.borderRadiusMd,
   transition: theme.transitions.create("opacity"),
   "&:hover": { opacity: 0.6 },
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
   return (
      <>
         <RootStyle>
            <Badge showZero badgeContent={0} color="error" max={99}>
               <Icon icon={shoppingCartFill} width={24} height={24} />
            </Badge>
         </RootStyle>
         <ButonStyle>
            <Button
               variant="contained"
               component={RouterLink}
               to="#"
               startIcon={<Icon icon={plusFill} />}
            >
               Nuevo Producto
            </Button>
         </ButonStyle>
      </>
   );
}
