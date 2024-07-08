import { Instance } from "./instance/Instance";

// 상품 전체 불러오기
export const getProducts = async () => {
  try {
    const promises = [];

    promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
    promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=6"));
    promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=7"));

    const res = await Promise.all(promises);

    const data = await Promise.all(res.map((response) => response.json()));
    const mergedData = data.flatMap((result) => result.results);
    const newArray = mergedData.filter((item) => item.store_name === "FLOPS" || item.store_name === "Ditto" || item.store_name === "Too_much_shop");

    return newArray;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 디테일
export const getProductContents = async (productId) => {
  try {
    const res = await Instance.get(`/products/${productId}/`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 검색하기
export const search = async (setSearchedProductCount, setSearchResults, searchKeyword) => {
  try {
    const res = await Instance.get(`/products/?search=${searchKeyword}`);
    const data = await res.json();
    setSearchedProductCount(data.count);
    setSearchResults(data.results);
  } catch (error) {
    console.error(error);
  }
};
