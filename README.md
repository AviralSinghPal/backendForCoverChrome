# backendForCoverChrome
this is backend app built using MREN stack for my back cover/cases for mobile phones.

## File Structure

![File Structure](structure.PNG)

This is the file structure of our backend project. As you can see, it consists of several directories and files that are organized in a logical manner to make development and maintenance easier.

## User Model

The User model is used to store user information for your ecommerce app.

### Fields

- `_id` (ObjectId) - The unique identifier for the user.
- `name` (String) - The name of the user.
- `email` (String) - The email address of the user. This field is unique and required.
- `password` (String) - The password for the user. This field is required and has a minimum length of 6 characters.
- `photo` (Object) - An object containing information about the user's profile photo.
  - `secure_url` (String) - The secure URL for the user's profile photo, retrieved from Cloudinary.
  - `id` (String) - The unique identifier for the user's profile photo, retrieved from Cloudinary.
- `role` (String) - The role of the user, such as "customer" or "admin".
- `createdAt` (Date) - The date when the user's account was created.
------------------------------------------------
## Additional Functions in User Model

In addition to the standard fields in the User model, there are some additional functions that have been implemented to improve the user experience and security of the application. These functions are as follows:

### resetPasswordToken()

The `resetPasswordToken()` function is used to generate a unique token that is sent to the user when they request to reset their password. This token is then checked when the user sends a request to reset their password and verifies that the user is who they say they are.

### resetPasswordExpiry

The `resetPasswordExpiry` field is used to store the expiry time of the reset password token. This is important as it ensures that the token is only valid for a certain period of time, improving the security of the application.

### getJwtToken()

The `getJwtToken()` function is used to generate a JSON Web Token (JWT) for the user. This token is used to authenticate the user when they make requests to the server, ensuring that only authorized users can access the application.

### Pre-hooks to encrypt password that we take from user

To improve the security of the application, pre-hooks have been implemented to encrypt the password that is taken from the user. This ensures that even if the database is compromised, the user's password remains secure.

### comparePassword()

The `comparePassword()` function is used to compare the user's entered password with the hashed password stored in the database. This ensures that the user is who they say they are and that their password is correct.

### getResetPasswordToken()

The `getResetPasswordToken()` function is used to retrieve the reset password token for the user. This is useful if the user has lost their token or if it has expired and they need a new one.

By implementing these additional functions in the User model, we have improved the security and user experience of the application.```

I hope this helps!


Additional fields can be added as needed to store other user information, such as shipping address or payment details.

This model can be implemented using an ORM like Mongoose for a MongoDB database or Sequelize for a SQL database.

## Product Model

The Product model is used to store information about the products available on your ecommerce app.

### Fields

- `name` (String) - The name of the product.
- `price` (Number) - The price of the product.
- `description` (String) - A brief description of the product.
- `photos` (Array) - An array of objects, each containing information about a photo of the product.
  - `secure_url` (String) - The secure URL for the photo, retrieved from Cloudinary.
  - `id` (String) - The unique identifier for the photo, retrieved from Cloudinary.
- `category` (String) - The category of the product. This can be an enumerated type to limit the options available for selection.
- `brand` (String) - The brand of the product.
- `stock` (Number) - The number of units of the product currently in stock.
- `ratings` (Number) - The average rating for the product.
- `numReviews` (Number) - The number of reviews for the product.
- `reviews` (Array) - An array of objects, each containing information about a review for the product.
  - `user` (ObjectId) - The unique identifier for the user who submitted the review.
  - `name` (String) - The name of the user who submitted the review.
  - `rating` (Number) - The rating given by the user for the product.
  - `comment` (String) - The comment left by the user for the product.
- `user` (ObjectId) - The unique identifier for the user who added the product.
- `createdAt` (Date) - The date when the product was added to the system.

## Order Model

The Order model is used to store information about orders placed by users on your ecommerce app.

### Fields

- `shippingInfo` (Object) - An object containing the shipping information for the order.
  - `phone` (String) - The phone number of the recipient.
  - `address` (String) - The address of the recipient.
  - `city` (String) - The city of the recipient.
  - `postalCode` (String) - The postal code of the recipient.
  - `country` (String) - The country of the recipient.
- `user` (ObjectId) - The unique identifier for the user who placed the order.
- `paymentInfo` (Object) - An object containing the payment information for the order.
  - `orderId` (String) - The unique identifier for the order.
  - `successId` (String) - The unique identifier for the payment success.
  - `paymentMethod` (String) - The payment method used to place the order (e.g. Stripe, Razorpay).
- `taxAmount` (Number) - The tax amount for the order.
- `totalAmount` (Number) - The total amount for the order (including tax and shipping).
- `orderStatus` (String) - The status of the order (e.g. pending, shipped, delivered).
- `deliveryAt` (Date) - The date when the order is expected to be delivered.
- `createdAt` (Date) - The date when the order was created.

### Order Items

Each order can contain multiple order items, which represent the products that were purchased as part of the order. These order items are stored as an array of objects within the Order model.

- `name` (String) - The name of the product.
- `quantity` (Number) - The quantity of the product purchased.
- `image` (String) - The secure URL for the main image of the product.
- `price` (Number) - The price of the product.
- `product` (ObjectId) - The unique identifier for the product purchased.

By storing each order item as a separate object, you can easily retrieve information about the products that were part of a specific order.
