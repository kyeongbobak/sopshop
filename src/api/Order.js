import { Instance } from "./instance/Instance";

// 주문 목록 가져오기
export const getOrderList = async (token) => {
  try {
    const res = await Instance.get(`/order/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 주문생성하기, 카트 주문생성하기
export const order = async (directOrder, cartOrder, token, orderList) => {
  try {
    const res =
      orderList.length === 1
        ? await Instance.post(`/order/`, directOrder, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          })
        : await Instance.post(`/order/`, cartOrder, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
