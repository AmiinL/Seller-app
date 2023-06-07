import { DataGrid } from "@mui/x-data-grid";
import { ConditionProductChip, Price, ProductImage } from "../../atoms";
import { Box } from "@mui/system";
import { useProducts } from "../../../hooks";
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

export default function ProductsPage() {
  const { isLoading, products } = useProducts();
  return (
    <Box style={{ width: "100%", height: 400 }}>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={products || []}
        disableRowSelectionOnClick
      ></DataGrid>
    </Box>
  );
}
