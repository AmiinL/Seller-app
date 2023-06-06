import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header, Menu } from "../ds/molecules";
import theme from "./theme";

const items = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/products" },
  { name: "Rapports", route: "/products" },
  { name: "Finances", route: "/Finances" },
  { name: "Messages", route: "/Messages" },
];
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="SellerApp" caption="Bienvenu Mr" />
      <Menu items={items} />
      Main
    </ThemeProvider>
  );
}
