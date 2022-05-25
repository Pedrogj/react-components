import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);

  const titleName = title ? title : product.title;

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {titleName}
    </span>
  );
};
