import { Instance } from "./instance/Instance";

// 로그인
export const login = async (body) => {
  try {
    const res = await Instance.post(`/accounts/login/`, body);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};

// 로그아웃
export const logout = async (token) => {
  try {
    const res = await Instance.post(`accounts/logout/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
