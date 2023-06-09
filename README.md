# 🐶 WePet 😸 RESTful API 🔗

## Introduction:

Our project, the WePet RESTful API, was developed with the aim of creating an e-commerce platform that offers a carefully curated selection of unique and safe pet products for our beloved "dogs and cats." We recognized the need to cater to pet owners who view their furry companions as integral members of their families, rather than mere animals. Our goal was to address the specific challenges faced by these owners, such as the overwhelming variety of products available on the market and the trial-and-error process of finding the right ones. Extensive research revealed that our target audience primarily consisted of females in the 20s-40s age range who sought such a service. We believed that our platform would stand out by offering a thoughtfully curated collection of tested and high-quality products. To design our user interface and user experience, we drew inspiration from the simplicity and whimsical approach of [Baemin Moongu](https://brandstore.baemin.com/), which specializes in stationery, books, and gifts.

---

## Description:

Our backend API serves as the central point for handling CRUD (Create, Read, Update, Delete) operations for our frontend application. The API's endpoints are primarily categorized into the following:

- **/users**
- **/products**
- **/shopping-carts**
- **/orders**

The **users** endpoints enable users to create accounts, log in, and manage their personal information. The **products** endpoint allows users to view product listings, access detailed information about individual products, and make purchases. Additionally, we have implemented a sub-endpoint for administrators to add new products to the database. The **shopping-carts** and **orders** endpoints facilitate operations related to shopping carts, order management, and payment processing.

### Tech:

For this project, we selected a technology stack consisting of **Node.js, Express, TypeORM, and MySQL**. We chose these technologies based on their familiarity within our team, the simplicity it offers, and the rich ecosystem of packages and libraries available for it. Moreover, we recognized that our e-commerce site would heavily rely on real-time user interactions and event-driven processes, which made Node.js an ideal choice. Another advantage of this stack is the seamless handling of JSON data for communication with the frontend through the use of Express middleware. Our development team also adhered to Node.js best practices and adopted a layered pattern to organize our codebase and API structure effectively.

### Learning points:

Throughout the course of this project, we encountered several challenges that provided valuable learning opportunities. One notable challenge was understanding the user flow and ensuring consistent JSON key data and response messages for efficient utilization by the frontend team. Additionally, we honed our skills in writing efficient SQL queries to optimize database performance.

---

## How to run our project:

To run our project, follow these steps:

1. Clone the project repository.
2. Run `npm install` to install the required npm packages.
3. Ensure that you have a local MySQL server running and import the provided SQL dump file.
4. Once you have completed the above steps, type `npm start` to start the server.
5. For detailed information about the API endpoints, please refer to our WePet API Postman documentation provided below.

[WePet](https://documenter.getpostman.com/view/20495360/2s93sXbZk7)

---

## Team Members:

### Front End [Github](https://github.com/wecode-bootcamp-korea/46-1st-WePet-frontend):

    - [AGNESBAEK](https://github.com/AGNESBAEK)
    - [zozusin](https://github.com/AGNESBAEK)
    - [sstaar91](https://github.com/sstaar91)

### Back End [Github](https://github.com/wecode-bootcamp-korea/46-1st-WePet-backend):

    - [lee-kwanyong](https://github.com/lee-kwanyong)
    - [ts-oh](https://github.com/ts-oh)
