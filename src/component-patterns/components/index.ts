import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductBottons } from "./ProductBottons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductBottons } from "./ProductBottons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Bottons: ProductBottons,
});

export default ProductCard;
