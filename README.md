# 🐶 WePet 😸 RESTful API 🔗

</br>

## Introduction / 소개 👋

Our project, the WePet RESTful API, was developed with the aim of creating an e-commerce platform that offers a carefully curated selection of unique and safe pet products for our beloved "dogs and cats." We recognized the need to cater to pet owners who view their furry companions as integral members of their families, rather than mere animals. Our goal was to address the specific challenges faced by these owners, such as the overwhelming variety of products available on the market and the trial-and-error process of finding the right ones. Extensive research revealed that our target audience primarily consisted of females in the 20s-40s age range who sought such a service. We believed that our platform would stand out by offering a thoughtfully curated collection of tested and high-quality products. To design our user interface and user experience, we drew inspiration from the simplicity and whimsical approach of [Baemin Stationary](https://brandstore.baemin.com/), which specializes in stationery, books, and gifts.

WePet RESTful API 프로젝트는 사랑하는 "개와 고양이"를 위한 독특하고 안전한 애완동물 제품을 주목적으로 하는 플랫폼을 개발하는 데에 초점을 맞추었습니다. 우리는 애완동물 주인들이 단순히 동물이 아닌 가족 구성원으로 보는 보는 경향이 있다는 사실을 알게되었습니다. 우리의 목표는 시장에서 제공되는 다양한 제품들과 제품 선택에 따른 시행착오 과정과 같은 특정 도전에 대응하는 것이었습니다. 철저한 조사 결과, 우리의 주요 대상 고객은 20대에서 40대 여성들로 구성되었으며 이러한 서비스를 요구했습니다. 우리는 검증되고 고품질의 제품을 신중하게 선별하는 플랫폼을 제공함으로써 차별화될 수 있다고 믿었습니다. UI와 UX 디자인은 [배민문방구](https://brandstore.baemin.com/)의 간결하고 귀여운 접근 방식에서 영감을 받았습니다.

</br>

## Description / 설명 🥓

Our backend API serves as the central point for handling CRUD (Create, Read, Update, Delete) operations for our frontend application. The API's endpoints are primarily categorized into the following:

우리의 백엔드 API는 프론트엔드 애플리케이션의 CRUD(Create, Read, Update, Delete) 작업을 처리하는 지점으로 작동합니다. API의 엔드포인트는 다음과 같이 주로 분류됩니다:

- **/users**
- **/products**
- **/shopping-carts**
- **/orders**

The **users** endpoints enable users to create accounts, log in, and manage their personal information. The **products** endpoint allows users to view product listings, access detailed information about individual products, and make purchases. Additionally, we have implemented a sub-endpoint for administrators to add new products to the database. The **shopping-carts** and **orders** endpoints facilitate operations related to shopping carts, order management, and payment processing.

**users** 엔드포인트는 사용자 계정 생성, 로그인, 개인 정보 관리를 위한 기능을 제공합니다. **products** 엔드포인트는 제품 목록을 표시하고 개별 제품에 대한 자세한 정보를 액세스하며 구매를 진행할 수 있는 기능을 제공합니다. 추가로, 관리자가 데이터베이스에 새로운 제품을 추가하기 위한 하위 엔드포인트를 구현하였습니다. **shopping-carts**와 **orders** 엔드포인트는 쇼핑 카트 작업, 주문 관리 및 결제 처리와 관련된 기능을 지원합니다.

</br>

## Tech / 기술 🧠

For this project, we selected a technology stack consisting of **Node.js, Express, TypeORM, and MySQL**. We chose these technologies based on their familiarity within our team, the simplicity it offers, and the rich ecosystem of packages and libraries available for it. Moreover, we recognized that our e-commerce site would heavily rely on real-time user interactions and event-driven processes, which made Node.js an ideal choice. Another advantage of this stack is the seamless handling of JSON data for communication with the frontend through the use of Express middleware. Our development team also adhered to Node.js best practices and adopted a layered pattern to organize our codebase and API structure effectively.

이 프로젝트에서는 \*\*Node.js, Express, TypeORM, MySQL\*\*로 구성된 기술 스택을 선택했습니다. 이 선택은 팀 내에서의 익숙함, 간결성, 그리고 풍부한 패키지와 라이브러리 생태계로 인해 이루어졌습니다. 또한, 실시간 사용자 상호작용 및 이벤트 기반 프로세스에 대한 의존성이 높은 전자상거래 사이트에 Node.js가 이상적인 선택이라고 판단했습니다. 이 스택의 또 다른 이점은 Express 미들웨어를 통한 프론트엔드와의 JSON 데이터 통신의 원활한 처리입니다. 개발 팀은 Node.js의 최적 관행을 준수하고 코드 구조와 API 설계를 래이어드 패턴으로 조직화했습니다.

</br>

## Responsibilities / 책임부분 🍱

### **관용님:**

WePet 백엔드 API구현 내용회원의 CRUD 에 해당하는 부분을 담당하였습니다회원의 접근이 수월할수 있도록 email과 password만으로 회원가입이 이루어질수있게 구현이메일 중복체크를 통하여 같은 email로 가입을 할 수 없도록 만들었습니다비밀번호는 8자리이상 문자와 숫자,특수문자를 포함하도록 구현했습니다 bcrypt로 비밀번호를 암호화 jwt토큰 발급을 통하여 로그인시 토큰이 생성되어 비밀번호가 databases상에 노출되지 않아 개인정보를 보호주문시, jwt를 통해 해당 유저만 주문 할 수 있도록 확인 절차로그인이 유지되는동안 토큰또한 유효하며 상품을 장바구니에 담고 결제 또한 가능하게 구현

포인트로 결제를 하기위해 회원가입시 자동으로 포인트를 지급장바구니에서 유저가 상품을 주문시 이름,주소,상세주소,전화번호,배송시메모 를 받을 수 있는 API를 구현회원의 정보수정이 가능한 API를 구현

회원가입시 작성한 email주소와 비밀번호 이름 을 변경할 수 있습니다회원정보삭제 API를 제작하여 원하지않는 회원은 언제든 회원탈퇴 가능

한번이라도 주문을 했던 회원은 추가로 저장한 주소와 이름 전화번호도 같이 삭제되도록 구현

I was responsible for the CRUD operations related to user membership. To facilitate user access, I implemented a registration process where users can sign up using only their email and password. I implemented email duplication check to prevent multiple sign-ups with the same email. The password requirement includes a minimum of 8 characters, including letters, numbers, and special characters. The passwords are encrypted using bcrypt. During login, a JWT token is generated to protect personal information and ensure that only the authenticated user can place orders. The token remains valid while the user is logged in, allowing them to add products to the shopping cart and make payments.

To enable payment with points, I implemented an API that automatically awards points to users upon registration. When users place an order, they can provide their name, address, detailed address, phone number, and delivery memo through the shopping cart API. I also created an API for users to modify their information.

During the registration process, users can change their email address, password, and name. Additionally, I developed a Member Information Deletion API, allowing users to easily withdraw from the service.

For members who have placed at least one order, I implemented a feature to delete their additional saved addresses, names, and phone numbers along with their account.

### **팀님:**

What I aimed to achieve in my backend API service...

Firstly, I implemented a "PRODUCTS" endpoint for the frontend team to utilize. This endpoint is accessible to all users of the service.

1. Created a GET endpoint where users can retrieve all products.
2. Developed a GET parameter endpoint to fetch products by their respective categories.
3. Implemented a GET query endpoint to retrieve products based on criteria such as newest, recommended, highest price, and lowest price.
4. Additionally, I designed an endpoint in the "products" section that allows administrators to insert new products through a frontend page I created.

Secondly, I established a "SHOPPING CARTS" endpoint that can only be accessed by registered members.

1. Implemented a GET endpoint where users can view all the products they have added to their shopping carts.
2. Developed a POST endpoint where users can add products to their carts. Furthermore, I added logic to update the quantity if the user clicks the "add" button again.
3. Created a PUT endpoint that allows users to insert a custom quantity for a specific item.
4. Implemented a PATCH endpoint that enables users to increase or decrease the item quantity by one.
5. Established a DELETE endpoint that allows users to remove individual products or clear the entire cart.

Lastly, I created an "ORDERS" endpoint that works in conjunction with the payment service.

1. Designed a POST endpoint where the shopping cart data is copied based on the user ID and inserted into the "orders_items" table. The total cost is calculated for each item based on their price and quantity.
2. Developed a GET endpoint where the details of "order_items" are presented based on the user ID in the "orders" table.
3. Implemented a POST endpoint called "order-total" that receives the order total calculation from the frontend and inserts it into the "order_total" column in the "order" table.

One of the challenges and learning experiences during this project was understanding the user flow in utilizing the service and providing consistent JSON data to the frontend team for efficient usage. Additionally, optimizing SQL queries for the database was also a crucial aspect of the project.

WePet 백엔드 API 서비스에서 시도한 구현은 다음과 같습니다...

첫째로, 프론트엔드 팀이 사용할 수 있는 "제품(PRODUCTS)" 엔드포인트를 생성했습니다. 이는 서비스의 모든 사용자에게 보이도록 설정되었습니다.

1. 모든 제품을 얻을 수 있는 GET 엔드포인트.
2. 각각의 카테고리에 따라 제품을 얻을 수 있는 GET 파라미터 엔드포인트.
3. 가장 최신, 추천, 가장 높은 가격 및 가장 낮은 가격을 기준으로 제품을 보낼 수 있는 GET 쿼리 엔드포인트.
4. 또한, 제품 엔드포인트 관리자 프론트엔드 페이지를 통해 새로운 제품을 삽입할 수 있는 엔드포인트 그리고 프론트엔드 패이지를 생성했습니다.

둘째로, "장바구니(SHOPPING CARTS)" 엔드포인트를 만들었는데, 이는 등록된 회원만 볼 수 있습니다.

1. GET 엔드포인트는 사용자가 장바구니에 추가한 모든 제품을 볼 수 있는 곳입니다.
2. 사용자가 장바구니에 추가하려는 제품을 추가할 수 있는 POST 엔드포인트. 더 나아가, 사용자가 추가 버튼을 다시 클릭하면 수량이 변경되도록 로직을 추가했습니다.
3. 사용자가 정의한 수량을 삽입할 수 있는 PUT 엔드포인트.
4. 사용자가 항목 수량을 1씩 추가 및 빼기할 수 있는 PATCH 엔드포인트.
5. 사용자가 각 제품 또는 모든 제품을 삭제할 수 있는 DELETE 엔드포인트.

셋째로, 결제 서비스와 연동된 "주문(ORDERS)" 엔드포인트를 만들었습니다.

1. POST 엔드포인트는 쇼핑 카트 데이터가 "주문(orders)" 테이블에서 사용자 ID로 연결되고, 제품 ID 그리고 가격과 수량에 따라 각 항목의 총액이 계산되어 "주문\_항목(order_items)" 테이블에 삽입됩니다.
2. 사용자 ID에 따라 "주문(orders)" 테이블에서 "주문\_항목(order_items)" 세부정보를 기반으로 하는 GET 엔드포인트.
3. 프론트엔드로부터 주문 총액 계산을 받아 "주문(order)" 테이블의 "주문\_총액(order_total)" 열에 삽입하는 "주문-총액(order-total)"라는 POST 엔드포인트.

이 프로젝트에서 저에게 있어서 학습 과정 중 하나는 서비스 사용자의 흐름을 이해하고, 일관된 JSON 데이터를 프론트엔드 팀에게 효율적으로 제공하는 것이었습니다. 마지막으로 데이터베이스에 대해 효율적인 SQL 쿼리 작성하기였습니다.

</br>

## Learning points / 배운 점 🫀

Throughout the course of this project, we encountered several challenges that provided valuable learning opportunities. One notable challenge was understanding the user flow and ensuring consistent JSON key data and response messages for efficient utilization by the frontend team. Additionally, we honed our skills in writing efficient SQL queries to optimize database performance.

이 프로젝트를 통해 우리는 가치있는 학습 기회를 제공하는 여러 가지 도전에 직면했습니다. 특히, 사용자 플로우를 이해하고 프론트엔드 팀이 효율적으로 활용할 수 있는 일관된 JSON 키 데이터와 응답 메시지를 보장하는 것이 주요 도전이었습니다. 또한, 데이터베이스 성능 최적화를 위해 효율적인 SQL 쿼리 작성 기술을 향상시켰습니다.

</br>

## How to run our project / 프로젝트 실행 방법 🧩

**_To run our project, follow these steps:_**

1. Clone the project repository.
2. Run `npm install` to install the required npm packages.
3. Ensure that you have a local MySQL server running and import the provided SQL dump file.
4. Once you have completed the above steps, type `npm start` to start the server.
5. For detailed information about the API endpoints, please refer to our WePet API Postman documentation provided below.

**_프로젝트를 실행하려면 다음 단계를 따르세요:_**

1. 프로젝트 저장소를 클론합니다.
2. `npm install` 명령을 실행하여 필요한 npm 패키지를 설치합니다.
3. 로컬 MySQL 서버가 실행 중이며 제공된 SQL 덤프 파일을 가져왔는지 확인합니다.
4. 위의 단계를 완료한 후 `npm start`를 입력하여 서버를 시작합니다.
5. API 엔드포인트에 대한 자세한 정보는 아래 제공된 WePet API Postman 문서를 참조하십시오.

- [WePet POSTMAN API DOCUMENTATION](https://documenter.getpostman.com/view/20495360/2s93sXbZk7) 🎯

</br>

## Team Members 팀 구성원 👫

### Front End / 프론트엔드 💅

**[Front-End Team Github Project Link](https://github.com/wecode-bootcamp-korea/46-1st-WePet-frontend)**

- [AGNESBAEK](https://github.com/AGNESBAEK)
- [zozusin](https://github.com/AGNESBAEK)
- [sstaar91](https://github.com/sstaar91)

### Back End / 백엔드 🎒

**[Back-End Team Github Project Link ](https://github.com/wecode-bootcamp-korea/46-1st-WePet-backend)**

- [lee-kwanyong](https://github.com/lee-kwanyong)
- [ts-oh](https://github.com/ts-oh)
