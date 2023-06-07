import { Outlet } from "react-router";
import { Header, Menu } from "../../molecules";

const items = [
  { name: "Produits", route: "/" },
  { name: "Commandes", route: "/commandes" },
  { name: "Rapports", route: "/rapports" },
  { name: "Finances", route: "/finances" },
  { name: "Messages", route: "/messages" },
];

export default function Layout() {
  return (
    <>
      <Header title="SellerApp" caption="Bienvenu Mr" />
      <Menu items={items} />
      <Outlet />
    </>
  );
}
