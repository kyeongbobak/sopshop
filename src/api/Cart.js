import { Instance } from "./instance/Instance";

// 장바구니 목록 보기
export const getCartList = async (token) => {
  try {
    const res = await Instance.get(`/cart/`, {
      headers: { Authorization: `JWT ${token}` },
    });
    const data = await res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 물건 넣기
export const addToCart = async (token, body) => {
  try {
    const res = await Instance.post(`/cart/`, body, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 수량 수정하기
export const modifyCartQuantity = async (token, body, modifiedCartItemId) => {
  try {
    const res = await Instance.put(`/cart/${modifiedCartItemId}/`, body, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 전부 삭제하기
export const deleteAllCartItem = async (token) => {
  try {
    const res = await Instance.delete(`/cart/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 개별 삭제하기
export const deleteCartItem = async (token, cartItemId) => {
  try {
    const res = await Instance.delete(`/cart/${cartItemId}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
