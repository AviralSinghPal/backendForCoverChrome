# Using Morgan as a Logging Middleware for Node.js Web Applications

Morgan is a popular logging middleware for Node.js web applications that provides detailed information about incoming requests and outgoing responses. To use Morgan in your Node.js application, the first step is to install it using npm.

---------------------------

## Installing Morgan

To install Morgan, simply run the following command in your terminal or command prompt:

npm i morgan


This will download and install the latest version of the package from the npm registry.


-------------------------------------------------
## Using Morgan

To use Morgan, you need to add it to your application's middleware stack. This can be done by requiring the `morgan` module in your code and then calling `morgan()` with the desired options. For example, to log the time, request method, URL, and response status code of incoming requests, you can use the following code:


const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('[:date[iso]] :method :url :status'));


------------------------------------

Morgan supports several predefined formats for logging, such as `combined`, `common`, `dev`, and `short`. These formats provide different levels of detail and can be used by passing their name as a parameter to the `morgan()` function. For example, to use the `dev` format, which logs the request method, URL, response status code, and response time, you can use the following code:

app.use(morgan('dev'));


In addition to the predefined formats, you can also create custom formats by using tokens. Tokens are placeholders that are replaced with actual values at runtime. For example, the `:id` token can be used to log the ID of the current user, while the `:response-time` token can be used to log the response time in milliseconds. To create a custom format, you can use the `morgan.format()` method, like this:

morgan.format('myformat', '[:date[iso]] :method :url :status :response-time ms - :res[content-length]');

app.use(morgan('myformat'));

------------------


## Conclusion

Using Morgan as a logging middleware in your Node.js application can provide valuable insights into the behavior of your web server. By logging important details about incoming requests and outgoing responses, you can debug issues, optimize performance, and improve the overall user experience.
