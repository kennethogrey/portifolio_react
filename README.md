# My portifolio
## Requirements
1. [node js](https://nodejs.org/en)
## Frontend
1. react js
### Packages
Search for the packages below [here](https://www.npmjs.com/)
1. react icons
2. @sanity/client
3. @sanity/image-url
4. framer-motion
5. sass
6. react-icons
### emails library
1. [email js](https://www.emailjs.com/)
## backend
1. [sanity](https://www.sanity.io/)

# Environment Variables
1. create a `.env` file at the root of the react application folder and create the following environment variables.the variables must be named following `REACT_APP_....`
```
REACT_APP_SANITY_PROJECT_ID = 'Your sanity project id'
REACT_APP_SANITY_TOKEN = 'Your sanity api token'
REACT_APP_EMAIL_JS_SERVICE_ID = 'Your email JS service id'
REACT_APP_EMAIL_JS_TEMPLATE_ID = 'YOur email JS template id'
REACT_APP_EMAIL_JS_PUBLIC_KEY = 'Your email JS public key'
```
1. inside the frontend_react/client.js
```
projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
dataset: 'production',
apiVersion: '2022-02-01',
useCdn: true,
token: process.env.REACT_APP_SANITY_TOKEN,
```
2. inside frontend_react/src/container/Footer/Footer.jsx

```
process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
form.current,
process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
```


