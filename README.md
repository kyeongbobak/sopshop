# SopShop 프로젝트 소개 \_FrontEnd

실용적인 프론트엔드 기술을 기반으로 한 브랜드 편집샵 온라인 쇼핑몰 서비스 플랫폼
<br/>

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
- <img src="https://img.shields.io/badge/LIBRARY-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"><img src="https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react"><img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
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

### 커밋컨벤션

#### - Udacity

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

<br/>

### 코드컨벤션

- ESLint와 Prettier를 사용하여 일관된 스타일 준수
- 코드 포맷은 Prettier가 자동으로 처리
  <br/>

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

<br/>

## 기술적 선택 사항

### 1. Context API

#### 선택 이유

프로젝트에서 사용자가 로그인 후 인증 토큰을 유지하고, API 요청시마다 이 토큰을 포함시켜야 했습니다. 이를 위해 모든 컴포넌트가 인증토큰에 쉽게 접근할 수 있는 방법이 필요했고, 그 중에서도 Context API를 선택한 이유는 Recoil이나 다른 상태 관리 라이브러리는 강력한 기능을 제공하지만 간단한 상태 관리에는 과할 수 있다고 생각되어 비교적 단순한 전역 상태 관리가 가능한 Context API를 선택했습니다.

#### 구현방법

- ##### AuthContext와 AuthProvider 생성
  - 애플리케이션 전체에서 인증 토큰을 관리할 수 있도록 설정
  - `token, setToken, isLoggedIn, setIsLoggedIn` 상태를 관리

```
import {createContext, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
 const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value = {{token, setToken, isLoggedIn, setIsLoggiedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
```

### 2. Promise.all

3. axios

#### 선택 이유

#### 구현방법

- 주소 검색
  리드미 개별구매 모두 구매 이부분 쇼핑카트부분

<br/>

## 리팩토링
