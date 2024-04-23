import { ProductInfoMenu, ProductInfoMenuItem, ProductInfoCheckbox } from "./ProductInfoHeaderStyle";

const ProductInfoHeader = ({ type }) => {
  const menuItems = {
    cart: [
      { label: "Product Info", width: "600px" },
      { label: "Qty", width: "300px" },
      { label: "Price", width: "300px" },
    ],
    order: [
      { label: "상품정보", width: "500px" },
      { label: "할인", width: "180px" },
      { label: "배송비", width: "300px" },
      { label: "주문금액", width: "300px" },
    ],
  };

  return (
    <ProductInfoMenu>
      {type === "cart" && (
        <ProductInfoMenuItem>
          <ProductInfoCheckbox />
        </ProductInfoMenuItem>
      )}
      {menuItems[type].map((item, index) => (
        <ProductInfoMenuItem key={index} width={item.width}>
          {item.label}
        </ProductInfoMenuItem>
      ))}
    </ProductInfoMenu>
  );
};

export default ProductInfoHeader;
