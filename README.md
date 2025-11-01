# E-Commerce Project API

This is a comprehensive backend API for a full-featured e-commerce application, built with Node.js, Express, and MongoDB. It includes services for user authentication, product management, shopping cart, wishlists, and order invoicing.

## Features

* **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
* **User Profile Management:** Users can create, read, and update their profiles (including shipping details).
* **Product Catalog:**
    * List products by category, brand, or remark (e.g., "new", "trending").
    * Retrieve detailed information for a single product.
    * Filter products by keyword.
* **Brand & Category:** List all available product brands and categories.
* **Product Sliders:** Get a list of products designated for main page sliders.
* **Product Reviews:**
    * Create, update, and list reviews for products.
* **Shopping Cart:**
    * Add, remove, and update products in the user's cart.
    * View all items in the cart.
* **Wishlist:**
    * Add and remove products from the user's wishlist.
    * View all items on the wishlist.
* **Invoicing:**
    * Create a new invoice (order).
    * View a list of all invoices for a user.
    * View detailed information for a single invoice.
* **Security:** Includes `helmet` for common vulnerability protection, `express-rate-limit` to prevent brute-force attacks, and `cors` for resource sharing.
* **Email Service:** Uses `nodemailer` for sending emails (like OTP or order confirmation).

---

## Technologies Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Authentication:** JSON Web Token (jsonwebtoken)
* **Security:** Helmet, Express Rate Limit, HPP (HTTP Parameter Pollution)
* **Email:** Nodemailer
* **Other:** CORS, Cookie-Parser
* **Development:** Nodemon

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need to have the following software installed on your system:
* [Node.js](https://nodejs.org/) (which includes npm)
* [MongoDB](https://www.mongodb.com/) (either a local instance or a cloud-hosted one like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Sani-Mohibur/Ecommerce-Project-API.git](https://github.com/Sani-Mohibur/Ecommerce-Project-API.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Ecommerce-Project-API
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    This project uses a `config.js` file in `/app/config/`. You will need to provide your own values for:
    * `DATABASE`: Your MongoDB connection string.
    * `PORT`: The port to run the server on (e.g., `5050`).
    * `JWT_KEY`: A strong secret key for signing tokens.
    * `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`: Your SMTP mail server credentials.
    * *(...and other config values as needed)*

### Running the Application

* **For development (with auto-reload):**
    ```sh
    npm run dev
    ```

* **For production:**
    ```sh
    npm start
    ```
    The server will be running on the port specified in your config file.

---

## API Endpoints

All endpoints are prefixed with `/api`.

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **Users** | | | |
| `POST` | `/Login` | Logs in a user. | No |
| `POST` | `/VerifyLogin` | Verifies a user's login (e.g., OTP). | No |
| `POST` | `/CreateUserProfile` | Create a profile for the logged-in user. | **Yes** |
| `POST` | `/UpdateUserProfile` | Update the logged-in user's profile. | **Yes** |
| `GET` | `/ReadUserProfile` | Read the logged-in user's profile. | **Yes** |
| **Brand** | | | |
| `GET` | `/BrandList` | Get a list of all brands. | No |
| **Category** | | | |
| `GET` | `/CategoryList` | Get a list of all categories. | No |
| **Product** | | | |
| `GET` | `/ProductListByCategory/:CategoryID` | Get products by category. | No |
| `GET` | `/ProductListByRemark/:Remark` | Get products by remark (e.g., "new"). | No |
| `GET` | `/ProductListByBrand/:BrandID` | Get products by brand. | No |
| `GET` | `/ProductListBySlider` | Get products for the homepage slider. | No |
| `GET` | `/ProductDetailsById/:ProductID` | Get details for a single product. | No |
| `GET` | `/ProductListByKeyword/:keyword` | Search products by keyword. | No |
| `GET` | `/ProductReviewListById/:ProductID`| Get all reviews for a product. | No |
| **Wishlist** | | | |
| `POST` | `/CreateWish` | Add a product to the wishlist. | **Yes** |
| `GET` | `/ReadWishList` | Get the user's wishlist. | **Yes** |
| `DELETE` | `/RemoveWish` | Remove a product from the wishlist. | **Yes** |
| **CartList** | | | |
| `POST` | `/CreateCart` | Add a product to the cart. | **Yes** |
| `GET` | `/ReadCart` | Get the user's cart. | **Yes** |
| `POST` | `/UpdateCart` | Update a product in the cart. | **Yes** |
| `DELETE` | `/DeleteCart` | Remove a product from the cart. | **Yes** |
| **Invoice** | | | |
| `POST` | `/CreateInvoice` | Create a new invoice (order). | No (Can be Yes) |
| `GET` | `/ReadInvoiceDetails`| Get details for a single invoice. | No (Can be Yes) |
| `GET` | `/ReadInvoiceList` | Get the user's invoice history. | No (Can be Yes) |
| **Review** | | | |
| `POST` | `/CreateReview` | Create a review for a product. | **Yes** |
| `POST` | `/UpdateReview` | Update an existing review. | **Yes** |
