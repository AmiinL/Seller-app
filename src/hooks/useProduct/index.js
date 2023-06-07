import { useQuery } from "react-query";
import api from "../../api";

export default function useProducts() {
  const queryResult = useQuery(
    ["products"],
    async () => await api.get("products").json()
  );

  return { ...queryResult, products: queryResult.data };
}

/*const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("http://localhost:3004/products");
        const productItems = await response.json();
        setProducts(productItems);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, [setProducts]);

  return products;*/
