# Improving the Security of JSON Web Tokens (JWTs)
Example code related to our blog post: [Improving the Security of JSON Web Tokens (JWTs)](https://stacklegend.com/blog/improving-the-security-of-json-web-tokens-jwts/)

## Install
- Clone the rpository
- Run `yarn` in terminal
- Run `yarn start` in terminal

## How to use

### First step
- Open `http://localhost:3010`
- Click on `Get token` button - this will gererate a JWT token
- Copy the token
- Paste the token to the textarea and click on `Check token`
- Token must be shown

### Second step
- Open the url from another brower or another IP address
- Use the previously generated token
- Paste the token to the textarea and click on `Check token`
- Token will be invalid

## What happened
- We added an extra security layer to the JWT.
- We verify the visitor IP address and the User-Agent string
- If any of them change, the token is unusable.
