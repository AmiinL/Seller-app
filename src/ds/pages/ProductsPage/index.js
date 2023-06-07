import { DataGrid } from "@mui/x-data-grid";
import { ConditionProductChip, Price, ProductImage } from "../../atoms";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
  },
  {
    field: "name",
    headerName: "Produit",
    width: 250,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 100,
    renderCell: ConditionProductChip,
  },
  {
    field: "price",
    headerName: "Prix (EUR)",
    renderCell: Price,
  },
  {
    field: "stock",
    headerName: "Stock",
  },
];

const rows = [
  {
    id: "1209c3dc-c9df-4346-8ede-ff012400254b",
    name: "Intelligent Granit Poulet",
    imageUrl: "https://picsum.photos/seed/dYPXbc7r/640/640",
    price: 90.54,
    condition: "used",
    stock: 4,
  },
  {
    id: "27d5f371-d6e9-4d63-b7f4-7561cc1694b5",
    name: "Incroyable Frais Lard",
    imageUrl: "https://picsum.photos/seed/YP5l0q/640/640",
    price: 78.97,
    condition: "new",
    stock: 9,
  },
];

export default function ProductsPage() {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      disableRowSelectionOnClick
    ></DataGrid>
  );
}
