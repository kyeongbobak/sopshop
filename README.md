# SopShop 프로젝트 소개 \_FrontEnd

> 실용적인 프론트엔드 기술을 기반으로 한 브랜드 편집샵 온라인 쇼핑몰 서비스 플랫폼

## [SopShop](https://sopshop.netlify.app/)

**서비스 이용을 위한 테스트 계정** <br/>

- ID : sopshop37 <br/>
- PASSWORD : sop373737
  <br/>

## 프로젝트 목적

- React 라이브러리를 비롯한 다양한 프론트엔드 기술 스택을 경험하고 이해
- React를 사용하여 사용자가 상품을 주문하고 결제할 수 있는 기능을 구현함으로써 실무적인 프론트엔드 개발 경험
- CURD 기능을 통한 상품 관련 데이터를 관리하는 것을 경험 이해하고 실습
- 클라이언트와 서버 간의 데이터 통신을 통해 상품 정보를 실시간으로 업데이트하고 관리하는 것을 실습
- React를 활용하여 사용자가 상품을 검색하고 선택할 수 있는 사용자 친화적인 인터페이스를 구현
- 클라이언트와 서버 간의 데이터 통신과 상호 작용 방법을 익히고 실제 서비스에서의 프론트엔드-백엔드 연동을 경험
  <br/>

## 개발 기간

- 기간 : 2024년 3월 7일 ~ 2024년 4월 25일
  <br/>

## 적용기술

- <img src="https://img.shields.io/badge/LANGUAGE-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"><br/>
- <img src="https://img.shields.io/badge/LIBRARY-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
- <img src="https://img.shields.io/badge/IDE/EDITOR-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"><br/>
- <img src="https://img.shields.io/badge/VERSIONCONTROL-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"><br/>
- <img src="https://img.shields.io/badge/DESIGN -%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"><br/>
  <br/>

## 폴더구조

```
└── src
    ├── api
    ├── assets
        ├── font
        ├── img
    ├── components
        ├── Button
        ├── BuyerFooter
        ├── BuyerHeader
        ├── Modal
            ├── AdressSearchModal
            ├── AlertModal
        ├── ProductInfoHeader
        ├── ProductList
        ├── Sidebar
    ├── contexts
    ├── pages
        ├── BrandCartegoryPage
        ├── BuyerLogin
        ├── BuyerMainPage
        ├── BuyerMyPage
        ├── BuyerOrderPage
        ├── BuyerOrderSuccess
        ├── BuyerSearchPage
        ├── BuyerShoppingCart
        ├── BuyerSignUp
        ├── NotFoundPage
        ├── ProductDetail
    ├── routes
    ├── style
```

<br/>

## 컨벤션

### 커밋컨벤션 : Udacity

#### 메세지 구조

```
type : subject

body

footer
```

#### type

    - feat: 새로운 기능
    - fix: 버그 수정
    - docs: 문서 변경
    - style: EOL, 세미콜론 등 코드에 대한 변경이 아닌 컨벤션에 관련된 변경
    - refactor: 프로덕션 코드 리팩토링
    - test: 테스트 추가, 리팩토링 테스트 ( 프로덕션 코드 변경 없음 )
    - chore: 빌드, 릴리즈, 설정 등의 변경 ( 프로덕션 코드 변경 없음 )

### 코드컨벤션

- ESLint와 Prettier를 사용하여 일관된 스타일 준수
- 코드 포맷은 Prettier가 자동으로 처리

## 구현 기능

| **로그인 / 로그아웃**                             |
| :------------------------------------------------ |
| ![로그인 / 로그아웃](/public/gif/LoginLogout.gif) |

- **로그인**
  - 구매회원 로그인과 판매회원 로그인 탭 간의 전환 가능
  - 유효성 검사
    - 비밀번호가 일치하지 않았을 경우 경고 메세지 표시
    - 아이디랑 비밀번호를 입력하지 않았을 경우 경고 메세지 표시
  - 사용자의 로그인 상태를 처리
  - 로그인 성공 시 내비게이션을 통해 메인페이지로 리디렉션
    <br/>
- **로그아웃**
  - 사용자의 로그아웃 상태를 처리

| **회원가입**                        |
| :---------------------------------- |
| ![회원가입](/public/gif/SignUp.gif) |

- 구매회원 회원가입과 판매회원 회원가입 탭 간의 전환 가능
- 유효성 검사
  - 아아디 중복 확인
  - 비밀번호를 지정된 형식, 문자 이외로 작성한 경우 경고 메세지 표시
  - 휴대폰 번호를 지정된 형식 이외로 작성한 경우와 이미 가입된 전화번호일 경우 경고 메세지 표시
- 사용자의 회원가입 상태를 처리
- 회원가입 성공 시 성공메세지 표시와 함께 내비게이션을 통해 로그인 페이지로 리디렉션

| **상품검색**                                |
| :------------------------------------------ |
| ![상품 검색](/public/gif/ProductSearch.gif) |

- 검색어 기반 상품 검색
- 검색 결과 표시
  - 검색된 상품의 개수를 화면에 표시
  - 각 검색 결과 항목에는 상품이미지, 브랜드명, 상품 이름, 가격 표시
  - 상품명 클릭시 상품 상세페이지로 이동

| **브랜드별 상품 보기**                                    |
| :-------------------------------------------------------- |
| ![브랜드별 상품 보기](/public/gif/ViewProductBybrand.gif) |

- 메인페이지의 카테고리 중 하나의 브랜드 명을 클릭시 선택된 브랜드 이름에 해당하는 상품들만 필터링하여 브랜드 상품 목록을 표시
- 선택된 브랜드의 상품 목록 표시
  - 각 상품 항목에는 상품이미지, 브랜드명, 상품 이름, 가격 표시

| **로그아웃 시 상품 바로 구매 / 상품 장바구니 담기**                    |
| :--------------------------------------------------------------------- |
| ![상품 바로 구매/장바구니 담기](/public/gif/LogoutBuyShoppingCart.gif) |

- 상품상세 정보 표시
  - 선택된 상품의 이미지, 브랜드명, 상품 이름, 가격, 배송정보, 재고 상태 등을 화면에 표시
- 상품 수량 조절
  - 사용자가 구매할 상품의 수량을 증가 또는 감소 시킬 수 있음
  - 수량 변경 시 재고 수량을 초과하지 않도록 제한
- 로그아웃 상태에서의 동작
  - 사용자가 로그인 되어 있지 않은 상태에서 `BuyNow` 또는 `Add To Cart` 클릭하면 로그인이 필요한
    서비스임을 알리는 모달이 표시
- 탭 메뉴를 통한 추가적인 정보 제공
  - 사용자가 탭 클릭 시 해당 탭의 내용 표시

| **로그인 시 상품 바로 구매**                      |
| :------------------------------------------------ |
| ![상품 바로 구매](/public/gif/LoginDirectBuy.gif) |

- 사용자가 로그인 되어 있는 상태에서 `Buy Now` 버튼을 클릭하면 장바구니에 상품이 담기고 주문페이지로 이동

| **로그인 시 장바구니 담기**                         |
| :-------------------------------------------------- |
| ![장바구니 담기](/public/gif/LoginShoppingCart.gif) |

- 사용자가 로그인 되어 있는 상태에서 `Add To Cart` 버튼을 클릭하면 장바구니에 상품이 담기고, 만약 이미 장바구니에 있는 경우, 모달이 나타나고 사용자가 장바구니 페이지로 이동 가능

| **상품 품절 시 상세페이지**                         |
| :-------------------------------------------------- |
| ![상품 품절 시 상세페이지](/public/gif/Soldout.gif) |

| **상품 수량 수정 / 삭제**                                            |
| :------------------------------------------------------------------- |
| ![상품 수량 수정/삭제](/public/gif/ShoppingCartListModifyDelete.gif) |

| **상품 모두 삭제 시 장바구니 페이지**                    |
| :------------------------------------------------------- |
| ![빈 장바구니 페이지](/public/gif/EmptyShoppingCart.gif) |

| **상품 개별 구매**                              |
| :---------------------------------------------- |
| ![상품 개별 구매](/public/gif/CartOneOrder.gif) |

- 사용자가 상품 목록에서 `Order` 버튼을 클릭 시, 특정 상품만 구매 가능하도록 처리
- 선택된 상품 이미지, 브랜드명, 상품명, 수량, 배송비, 주문금액 표시
- 상품의 총 금액과 배송비를 합산하여 최종 결제 금액 계산
- 주소 검색 모달을 통해 우편번호 검색 가능, 주소 검색 결과 저장
- 결제 수단 선택 가능
- 사용자가 입력한 주문정보와 결제 정보를 처리
- 주문 성공 시 주문이 성공적으로 완료 메세지와 주문정보(주문 일자, 받는 사람, 배송지, 결제 금액, 결제 수단 등의 정보)를 표시

| **상품 모두 구매**                              |
| :---------------------------------------------- |
| ![상품 모두 구매](/public/gif/CartAllOrder.gif) |

- 사용자가 하단의 `Order` 버튼을 클릭 시, 모든 상품을 한 번에 구매 가능
- 장바구니에 담긴 모든 상품의 정보를 화면에 표시
- 상품의 총 금액과 배송비를 합산하여 최종 결제 금액 계산
- 주소 검색 모달을 통해 우편번호 검색 가능, 주소 검색 결과 저장
- 결제 수단 선택 가능
- 사용자가 입력한 주문정보와 결제 정보를 처리
- 주문 성공 시 주문이 성공적으로 완료 메세지와 주문정보(주문 일자, 받는 사람, 배송지, 결제 금액, 결제 수단 등의 정보)를 표시

| **주문 내역 확인가능한 마이페이지**      |
| :--------------------------------------- |
| ![주문내역 확인](/public/gif/MyPage.gif) |

- 최근 3개의 주문 기록을 표시
- 각 주문 항목의 주문날짜, 상품 이미지, 상품명, 브랜드명, 수량, 상품 구매 금액, 주문처리 상태, 배송구분 내용 표시

<br/>

## 트러블 슈팅

### API요청 최적화

#### 문제 상황

서버에서 불러온 상품 정보 중 특정 브랜드의 상품만 필요했지만,페이지당 항목 수가 15개로 제한되었습니다. 페이지 당 항목 수를 제한하는 것이 일반적인 RESTFUL API의 동작방식이기 때문에 상품 정보 요청하는 API 엔드포인트로 보내게 되면 가장 첫번째 페이지의 상품 정보만 응답하여 상품 API 응답 데이터 중 사용하고 싶은 특정 브랜드의 상품정보를 사용하기 어려웠습니다. 한 번의 API 호출로는 원하는 데이터를 가져올 수 없었고, 여러 번의 API 호출을 통해 특정 브랜드 상품 데이터를 수집하면 시스템의 복잡성이 증가했습니다.

#### 해결 방법

1. 필요한 특정 브랜드의 상품 정보가 담긴 페이지 수를 확인합니다.
2. 한 번에 3개의 요청을 처리하는 경우, 일반적으로 서버에 큰 부하 증가 없이 잘 처리될 수 있을 것으로 판단하였습니다. 따라서 원하는 특정 브랜드의 상품 정보가 담겨있는 세 개의 페이지를 `Promise.all`을 사용하여 병렬로 API를 호출하여 여러번의 API 호출을 간소화하였습니다.
3. 각 페이지별 응답 데이터를 중첩된 배열로 처리할 필요 없이 하나의 배열로 합칩니다.
4. 특정 브랜드의 상품을 필터링합니다.

```javascript
import { Instance } from "./instance/Instance";

export const getProducts = async (token) => {
  try {
    const promises = [];
    if (token) {
      promises.push(
        Instance.get("/products/?page=5", {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
      );
      promises.push(
        Instance.get("/products/?page=6", {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
      );
      promises.push(
        Instance.get("/products/?page=7", {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
      );
    } else {
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=6"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=7"));
    }

    const res = await Promise.all(promises);

    const data = await Promise.all(res.map((response) => (token ? response.data : response.json())));
    const mergedData = data.flatMap((result) => result.results);
    const newArray = mergedData.filter((item) => item.store_name === "FLOPS" || item.store_name === "Ditto" || item.store_name === "Too_much_shop");

    return newArray;
  } catch (error) {
    console.log("error", error);
  }
};
```

### 불필요한 재렌더링 방지

#### 문제 상황

useEffect 내부에서 사용되는 함수를 의존성 배열에 추가하지 않음으로 인해 불필요한 재렌더링이 발생하고 성능 저하가 일어났습니다.

#### 해결 방법

1. 함수가 불필요하게 재성성되지 않도록 useCallback을 사용하여 메모제이션합니다. 이를 통해 useEffect가 다시 실행되지 않도록 합니다.
2. useEffect의 의존성 배열에 필요한 함수를 추가하여, 함수가 변경될 때만 useEffect가 다시 실행되도록 합니다.

```javascript
// BuyerShoppingCart.jsx

const getShoppingCartList = useCallback(async () => {
  try {
    const data = await getCartList(token);
    setIsEmpty(false);
    const cartItem = data;
    setCartList(cartItem);

    if (cartItem.length === 0) {
      return setIsEmpty(true);
    }

    const productInfos = cartItem.map((item) => getProductInfo(item.product_id));
    const productInfoPromises = await Promise.all(productInfos);
    setCartProductInfo(productInfoPromises);

    Promise.all(productInfoPromises).then((product) => {
      const totalProductPrice = product.map((v, i) => v.price * cartItem[i].quantity);
      const cartTotalPrice = totalProductPrice.reduce((acc, cur) => acc + cur, 0);
      const totalProductShippingFee = product.map((i) => i.shipping_fee).reduce((acc, cur) => acc + cur, 0);
      setShippingFee(totalProductShippingFee);
      setTotalProuctPrice(cartTotalPrice);
      setTotalPrice(cartTotalPrice + totalProductShippingFee);
    });
  } catch (error) {
    console.log(error);
  }
}, [token, getProductInfo]);
```

### 상품 삭제 API를 통한 개별 구매 처리

#### 문제 상황

개별 구매를 직접 처리할 수 있는 API가 없어, 장바구니에서 개별 상품을 구매하는 기능을 구현하기 어려웠습니다.

#### 해결 방법

1. 기존에 있는 상품 삭제 API 함수를 사용하여 장바구니를 비웁니다.
2. 장바구니를 비운 후, 선택한 상품만 다시 장바구니에 추가하고 주문을 처리하는 API 함수를 추가합니다.

```javascript
const cartOneOrder = async (selectedId, selectedQuantity) => {
  deleteAllCartList();
  try {
    const body = {
      product_id: selectedId,
      quantity: selectedQuantity,
      check: selected,
    };

    const data = await addToCart(token, body);
    console.log(data);
    getShoppingCartList(selectedId);
  } catch (error) {
    console.log(error);
  }
};
```

<br/>

## 기술적 선택 사항

### Context API

#### 선택 이유

프로젝트에서 사용자가 로그인 후 인증 토큰을 유지하고, API 요청시마다 이 토큰을 포함시켜야 했습니다. 이를 위해 모든 컴포넌트가 인증 토큰에 쉽게 접근할 수 있는 방법이 필요했고, 그 중에서도 Context API를 선택한 이유는 Recoil이나 다른 상태 관리 라이브러리는 강력한 기능을 제공하지만 다음 프로젝트의 간단한 상태 관리에는 과할 수 있다고 생각되어 비교적 단순한 전역 상태 관리가 가능한 Context API를 선택했습니다.

#### 구현 방법

- `AuthContext`와 `AuthProvider` 생성하여 애플리케이션 전체에서 인증 토큰을 관리할 수 있도록 설정합니다.
- `token, setToken, isLoggedIn, setIsLoggedIn` 상태를 관리합니다.

```javascript
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AuthContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggiedIn }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
```

### react-daum-postcode

#### 선택 이유

주문 시 배송지 주소가 자동으로 입력될 수 있도록 주소 검색 기능을 구현하기 위해 `react-daum-postcode` 라이브러리를 사용했습니다.
Daum 주소 검색 서비스를 간단하게 사용할 수 있고, 사용자가 직접 주소를 입력하는 것보다 주소 검색 서비스를 통해 빠르고 정확하게 주소를 입력할 수 있어 선택했습니다.

#### 구현 방법

- `AdressSearchModal` 컴포넌트는 사용자가 주소를 검색하고 선택할 수 있는 모달을 제공합니다.
- `completeHandler` 함수는 주소 선택이 완료되었을 때 호출되며, 선택된 주소 데이터를 부모 컴포넌트로 전달하고 이를 통해 주소 데이터를 쉽게 관리하고 사용가능합니다.

```javascript
import DaumPostcode from "react-daum-postcode";
import { DaumPostcodeBack } from "./AdressSearchModalStyle";

export default function AdressSearchModal(props) {
  const completeHandler = (data) => {
    props.onComplete(data);
  };

  return (
    <>
      <DaumPostcodeBack>
        <DaumPostcode onComplete={completeHandler}></DaumPostcode>
      </DaumPostcodeBack>
    </>
  );
}
```

<br/>

## 리팩토링

### 리팩토링 진행 상황

현재 프로젝트는 **일부 리팩토링이 완료**되었으며, 아래와 같은 주요 개선 사항들을 포함하고 있습니다:

## [sopshop_refactor](https://github.com/kyeongbobak/sopshop_refactor.git)

1. **함수형 컴포넌트와 React Hook Form 도입**

   기존의 클래스 컴포넌트를 함수형 컴포넌트로 변경하고, react-hook-form을 도입하여 폼 관리를 효율적으로 개선했습니다. 이를 통해 폼 유효성 검사와 오류 처리를 간단하게 할 수 있습니다.
   <br/>

2. **React Query를 이용한 API 호출 관리**

   @tanstack/react-query를 사용하여 데이터 가져오기와 상태 관리를 간소화했습니다. API 호출의 성공 및 실패 처리를 쉽게 구현하고, 데이터 캐싱과 자동 재요청 기능을 활용하여 성능을 최적화했습니다.
   <br/>

3. **CSS-in-JS를 활용한 UI 간소화**

   styled-components를 채택하여 각 컴포넌트의 스타일을 정의하고 모듈화하여 UI를 간소화하고 재사용성을 높였습니다. 이는 코드의 가독성과 유지보수성을 개선하는 데 기여했습니다.
   <br/>

4. **Recoil을 통한 지역 상태 관리**

   전역 상태 관리보다 필요한 컴포넌트 내에서만 관리할 수 있도록 Recoil을 도입했습니다. 예를 들어, 로그인 상태 관리에 useRecoilState를 사용하여 상태를 로컬하게 관리했습니다.
   <br/>

5. **useMutation을 이용한 API 처리 간소화**

   useMutation Hook을 사용하여 API 호출을 간소화하고, 성공 및 실패 시 처리 로직을 명확하게 구현했습니다. onSuccess와 onError 콜백을 이용하여 데이터 처리와 오류 관리를 효율적으로 처리했습니다.
   <br/>

6. **중복되는 인스턴스 헤더 분리**

   API 호출 시 반복적으로 사용되는 인스턴스 헤더를 별도의 파일로 분리하여 코드 중복을 최소화했습니다. 이는 axios의 create 메서드를 활용하여 공통 헤더를 설정하는 방식으로 구현했습니다.
   <br/>

7. **폴더 구조 및 파일 재분리**

   각 기능별로 컴포넌트, API 호출 함수, 스타일, 상태 관리 등을 모듈화하여 폴더 구조를 재구성했습니다. 이는 코드의 구조화와 관리를 용이하게 하여 개발자들이 프로젝트를 더 쉽게 이해하고 확장할 수 있도록 돕습니다.
   <br/>

8. **커스텀 훅을 통한 코드 중복 최소화**

   여러 컴포넌트에서 반복되는 로직을 추출하여 커스텀 훅으로 작성하여 코드 중복을 최소화했습니다. 예를 들어, 로그인 폼 처리 로직을 useLoginForm이라는 커스텀 훅으로 만들어서 재사용 가능하게 구현했습니다.
