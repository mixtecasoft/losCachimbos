import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import settingsFill from "@iconify/icons-eva/settings-fill";
import homeFill from "@iconify/icons-eva/home-fill";
import bookmarkFill from "@iconify/icons-eva/bookmark-fill";
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
   {
      title: "dashboard",
      path: "/app/dashboard",
      icon: getIcon(pieChart2Fill),
   },
   {
      title: "pedidos",
      path: "/app/orders",
      icon: getIcon(bookmarkFill),
   },
   {
      title: "cocina",
      path: "/app/kitchen",
      icon: getIcon(homeFill),
   },
   {
      title: "productos",
      path: "/app/products",
      icon: getIcon(shoppingBagFill),
   },
   {
      title: "clientes",
      path: "/app/clients",
      icon: getIcon(peopleFill),
   },
   {
      title: "facturas",
      path: "/app/invoices",
      icon: getIcon(fileTextFill),
   },
   {
      title: "configuración",
      path: "/app/blog",
      icon: getIcon(settingsFill),
   },
   {
      title: "login",
      path: "/login",
      icon: getIcon(lockFill),
   },
   {
      title: "register",
      path: "/register",
      icon: getIcon(personAddFill),
   },
   // {
   //   title: 'Not found',
   //   path: '/404',
   //   icon: getIcon(alertTriangleFill)
   // }
];

export default sidebarConfig;
