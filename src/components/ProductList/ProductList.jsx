import { Product, ProductImage, ProductName, ProductPrice, ProductStoreName } from "./ProductListStyle";

export default function ProductList({ product_id, product_store_name, product_img, product_name, product_price }) {
  return (
    <Product>
      <ProductImage to={`/products/${product_id}`}>
        <img src={product_img} alt="" />
      </ProductImage>
      <ProductStoreName>{product_store_name}</ProductStoreName>
      <ProductName>{product_name}</ProductName>
      <ProductPrice>{product_price.toLocaleString()} 원</ProductPrice>
    </Product>
  );
}
