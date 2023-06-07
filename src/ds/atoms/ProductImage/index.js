import { Image } from "mui-image";
import { productType } from "../../../utils/types";

export default function ProductImage({ row }) {
  return <Image src={row.imageUrl} width={150} alt={row.name} duration={100} />;
}

ProductImage.propTypes = {
  row: productType,
};
