
<img src="https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/logo-color.png" alt="Your Logo" height="100">

Our platform serves as an e-commerce solution for ordering food directly from canteens. 
## CONTRIBUTORS

- Ayush Singh Rajawat

- Deepanshu Rajput

 - Ankush Kumar Sultaniya

 - Vishesh Agrawal


##
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/landing.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/login.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/main.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/items.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/cart.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/discount.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/byShop.png)
![Logo](https://github.com/the-panshu/Personal_Website-HTML/blob/main/GIT%20IMAGE/stripe.png)


## Installation FrontEnd & Backend
To Install npm Module

```bash
cd client
npm install
```

```bash
cd server
npm install
```

## Run FrontEnd & Backend



```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

## Env Variable

```python
.env 

# Our Server Runs
PORT=
MONGODB_URL=
CORS_ORIGIN=

#Cloudinary details
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#Tokens details
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

#Stripe Payment Key
STRIPE_SECRET=

```
## FEATURES IMPLEMENTATION


1.User Login/Signup Based on organisation ID.

2.Authentication & Autherization using JSON Web Token.

3.Password Hashing using bcrypt & Strong Password Implemented using REGEX.

4.On Main Page : Items are Sorted By: 
  
 - BY ITEMS
- BY SHOP
- MOST RATED ITEMS
- MOST SOLD ITEMS

5.Added Add to Cart Functionality.


6.Payment Functionality implemented using STRIPE.

7.Shopkeeper can register their Shop and can add their items dynamically using "MULTER".

8.ShopKeeper can see items that have been Ordered from User on their Dashboard.

9.For Forgot Password Email has been sent to the user to Reset Password using Nodemailer.

10.LogOut Feature is implemented by expiring Tokens.

## SPECIAL FEATURES

1.User can see the number of reviews and rating of individual items and can also rate the items after ordering.

2.Discount Feature is available to the user on the basis of Points we Credited to the user on the basis of certain rules.

3.User can see their History of Orders they Placed.

4.ShopKeeper can Register their Shop with its Shopname and images and can add items with their images. (Implemented using MULTER)

5.Images are uploaded on Cloud using Cloudinary.

## TECH STACK 

1.Frontend:  React.js

2.Backend: Node.js, Express.js

3.Database: MongoDB

## TOOLS USED

1.MongoDB Compass : For Creating Databases.

2.Postman : For Testing Api End Points.

3.Cloudinary : For Uploading images on Cloud.

