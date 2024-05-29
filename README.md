# SopShop 프로젝트 소개 \_FrontEnd

실용적인 프론트엔드 기술을 기반으로 한 브랜드 편집샵 온라인 쇼핑몰 서비스 플랫폼
<br/>

## [SopShop](https://sopshop.netlify.app/)

- 서비스 이용을 위한 테스트 계정
  ID : sopshop37 <br/>
  PASSWORD : sop373737
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

> ### Udacity

### 메세지 구조

```
type : subject

body

footer
```

### type

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

| 구매회원 메인페이지                               |
| :------------------------------------------------ |
| **로그인 / 로그아웃**                             |
| 기능 설명                                         |
| ![로그인 / 로그아웃](/public/gif/LoginLogout.gif) |
| **회원가입**                                      |
| 기능 설명                                         |
| ![회원가입](/public/gif/SingUp.gif)               |

| 상품 검색 결과 페이지                       |
| :------------------------------------------ |
| **상품 검색**                               |
| 기능 설명                                   |
| ![상품 검색](/public/gif/ProductSearch.gif) |

| 브랜드별 상품 페이지                                      |
| :-------------------------------------------------------- |
| **브랜드별 상품 보기**                                    |
| 기능 설명                                                 |
| ![브랜드별 상품 보기](/public/gif/ViewProductBybrand.gif) |

| 상품 상세페이지                                                        |
| :--------------------------------------------------------------------- |
| **로그아웃 시 상품 바로 구매 / 상품 장바구니 담기**                    |
| 기능 설명                                                              |
| ![상품 바로 구매/장바구니 담기](./public/gif/LogoutBuyShoppinCart.gif) |
| **로그인 시 상품 바로 구매**                                           |
| 기능 설명                                                              |
| ![상품 바로 구매](/public/gif/LoginDirectBuy.gif)                      |
| **로그인 시 장바구니 담기**                                            |
| 기능 설명                                                              |
| ![장바구니 담기](/public/gif/LoginShoppingCart.gif)                    |
| **상품 품절 시 상세페이지**                                            |
| 기능 설명                                                              |
| ![상품 품절 시 상세페이지](/public/gif/Soldout.gif)                    |

| 장바구니 페이지 / 주문 페이지                                        |
| :------------------------------------------------------------------- |
| **상품 수량 수정 / 삭제**                                            |
| 기능 설명                                                            |
| ![상품 수량 수정/삭제](/public/gif/ShoppingCartListModifyDelete.gif) |
| **상품 모두 삭제 시 장바구니 페이지**                                |
| 기능 설명                                                            |
| ![빈 장바구니 페이지](/public/gif/EmptyShoppingCart.gif)             |
| **상품 개별 구매**                                                   |
| 기능 설명                                                            |
| ![상품 개별 구매](/public/gif/CartOneOrder.gif)                      |
| **상품 모두 구매**                                                   |
| 기능 설명                                                            |
| ![상품 모두 구매](/public/gif/CartAllOrder.gif)                      |

| 마이페이지                               |
| :--------------------------------------- |
| **주문 내역 확인가능한 페이지**          |
| 기능 설명                                |
| ![주문내역 확인](/public/gif/MyPage.gif) |

<br/>

## 트러블 슈팅

<br/>

## 리팩토링

<br/>
