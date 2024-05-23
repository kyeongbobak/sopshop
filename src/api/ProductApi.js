// getProduct.js
import axios from "axios";

const getProduct = async (token) => {
  try {
    const promises = [];
    if (token) {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=4"));
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=5"));
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=6"));
    } else {
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=4"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=6"));
    }
    const res = await Promise.all(promises);
    const data = await Promise.all(res.map((res) => (token ? res.data : res.json())));
    const mergedData = data.flatMap((result) => result.results);
    // const newArray = mergedData.filter((i) => i.store_name === "FLOPS" || i.store_name === "Ditto" || i.store_name === "Too_much_shop");
    // setProducts(newArray);
    return mergedData;
  } catch (error) {
    console.log("error");
  }
};

export default getProduct;
