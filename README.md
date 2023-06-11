# 🐶 WePet 😸 RESTful API 🔗

## Introduction / 소개:

Our project, the WePet RESTful API, was developed with the aim of creating an e-commerce platform that offers a carefully curated selection of unique and safe pet products for our beloved "dogs and cats." We recognized the need to cater to pet owners who view their furry companions as integral members of their families, rather than mere animals. Our goal was to address the specific challenges faced by these owners, such as the overwhelming variety of products available on the market and the trial-and-error process of finding the right ones. Extensive research revealed that our target audience primarily consisted of females in the 20s-40s age range who sought such a service. We believed that our platform would stand out by offering a thoughtfully curated collection of tested and high-quality products. To design our user interface and user experience, we drew inspiration from the simplicity and whimsical approach of [Baemin Stationary](https://brandstore.baemin.com/), which specializes in stationery, books, and gifts.

WePet RESTful API 프로젝트는 사랑하는 "개와 고양이"를 위한 독특하고 안전한 애완동물 제품을 주목적으로 하는 플랫폼을 개발하는 데에 초점을 맞추었습니다. 우리는 애완동물 주인들이 단순히 동물이 아닌 가족 구성원으로 보는 보는 경향이 있다는 사실을 알게되었습니다. 우리의 목표는 시장에서 제공되는 다양한 제품들과 제품 선택에 따른 시행착오 과정과 같은 특정 도전에 대응하는 것이었습니다. 철저한 조사 결과, 우리의 주요 대상 고객은 20대에서 40대 여성들로 구성되었으며 이러한 서비스를 요구했습니다. 우리는 검증되고 고품질의 제품을 신중하게 선별하는 플랫폼을 제공함으로써 차별화될 수 있다고 믿었습니다. UI와 UX 디자인은 [배민문방구](https://brandstore.baemin.com/)의 간결하고 귀여운 접근 방식에서 영감을 받았습니다.

## Description / 설명:

Our backend API serves as the central point for handling CRUD (Create, Read, Update, Delete) operations for our frontend application. The API's endpoints are primarily categorized into the following:

- **/users**
- **/products**
- **/shopping-carts**
- **/orders**

The **users** endpoints enable users to create accounts, log in, and manage their personal information. The **products** endpoint allows users to view product listings, access detailed information about individual products, and make purchases. Additionally, we have implemented a sub-endpoint for administrators to add new products to the database. The **shopping-carts** and **orders** endpoints facilitate operations related to shopping carts, order management, and payment processing.

우리의 백엔드 API는 프론트엔드 애플리케이션의 CRUD(Create, Read, Update, Delete) 작업을 처리하는 지점으로 작동합니다. API의 엔드포인트는 다음과 같이 주로 분류됩니다:

- **/users**
- **/products**
- **/shopping-carts**
- **/orders**

**users** 엔드포인트는 사용자 계정 생성, 로그인, 개인 정보 관리를 위한 기능을 제공합니다. **products** 엔드포인트는 제품 목록을 표시하고 개별 제품에 대한 자세한 정보를 액세스하며 구매를 진행할 수 있는 기능을 제공합니다. 추가로, 관리자가 데이터베이스에 새로운 제품을 추가하기 위한 하위 엔드포인트를 구현하였습니다. **shopping-carts**와 **orders** 엔드포인트는 쇼핑 카트 작업, 주문 관리 및 결제 처리와 관련된 기능을 지원합니다.

### Tech / 기술:

For this project, we selected a technology stack consisting of **Node.js, Express, TypeORM, and MySQL**. We chose these technologies based on their familiarity within our team, the simplicity it offers, and the rich ecosystem of packages and libraries available for it. Moreover, we recognized that our e-commerce site would heavily rely on real-time user interactions and event-driven processes, which made Node.js an ideal choice. Another advantage of this stack is the seamless handling of JSON data for communication with the frontend through the use of Express middleware. Our development team also adhered to Node.js best practices and adopted a layered pattern to organize our codebase and API structure effectively.

이 프로젝트에서는 \*\*Node.js, Express, TypeORM, MySQL\*\*로 구성된 기술 스택을 선택했습니다. 이 선택은 팀 내에서의 익숙함, 간결성, 그리고 풍부한 패키지와 라이브러리 생태계로 인해 이루어졌습니다. 또한, 실시간 사용자 상호작용 및 이벤트 기반 프로세스에 대한 의존성이 높은 전자상거래 사이트에 Node.js가 이상적인 선택이라고 판단했습니다. 이 스택의 또 다른 이점은 Express 미들웨어를 통한 프론트엔드와의 JSON 데이터 통신의 원활한 처리입니다. 개발 팀은 Node.js의 최적 관행을 준수하고 코드 구조와 API 설계를 래이어드 패턴으로 조직화했습니다.

### Learning points / 배운 점:

Throughout the course of this project, we encountered several challenges that provided valuable learning opportunities. One notable challenge was understanding the user flow and ensuring consistent JSON key data and response messages for efficient utilization by the frontend team. Additionally, we honed our skills in writing efficient SQL queries to optimize database performance.

이 프로젝트를 통해 우리는 가치있는 학습 기회를 제공하는 여러 가지 도전에 직면했습니다. 특히, 사용자 플로우를 이해하고 프론트엔드 팀이 효율적으로 활용할 수 있는 일관된 JSON 키 데이터와 응답 메시지를 보장하는 것이 주요 도전이었습니다. 또한, 데이터베이스 성능 최적화를 위해 효율적인 SQL 쿼리 작성 기술을 향상시켰습니다.

## How to run our project / 프로젝트 실행 방법:

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

[WePet POSTMAN API DOCUMENTATION](https://documenter.getpostman.com/view/20495360/2s93sXbZk7)

## Team Members 팀 구성원:

### Front End / 프론트엔드

[Front-End Team Github](https://github.com/wecode-bootcamp-korea/46-1st-WePet-frontend):

[AGNESBAEK](https://github.com/AGNESBAEK)
[zozusin](https://github.com/AGNESBAEK)
[sstaar91](https://github.com/sstaar91)

### Back End / 백엔드

[Back-End Team Github](https://github.com/wecode-bootcamp-korea/46-1st-WePet-backend):

[lee-kwanyong](https://github.com/lee-kwanyong)
[ts-oh](https://github.com/ts-oh)
