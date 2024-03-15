import { Product, ProductImage, ProductName, ProductPrice } from "./ProductListStyle";

export default function ProductList({ product_id, product_name, price }) {
  return (
    <Product>
      <ProductImage to={`/products/${product_id}/`}>
        <img src="" alt="" />
      </ProductImage>
      <ProductName>{product_name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Product>
  );
}
