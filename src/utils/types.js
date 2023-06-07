import { shape, string } from "prop-types";

export const productType = shape({
  imageUrl: string,
  name: string,
});
