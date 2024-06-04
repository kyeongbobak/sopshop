// 로그인
const login = async (body) => {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/accounts/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
  } catch (error) {
    console.log("error");
  }
};

export default login;
