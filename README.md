[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Docker]:https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 <h1 align="center" style="font-weight: bold;">Queue Implementation 💻</h1>

![typescript][TYPESCRIPT__BADGE]
![javascript][JAVASCRIPT__BADGE]
![Nodejs]
![Docker]

## Description

This project implements queues with framework nestjs, for this project i used [Bull](https://github.com/OptimalBits/bull), to create queues and redis to memory database.


## Installation

```bash
$ npm install
```
<h3> Environment Variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your resend credentials to send email.

```yaml
RESEND_API_KEY='<Resend API>'
```

## Before Run the app
Before run this app certify you are installed docker in your system and run:
```bash
 docker-compose up
```
To run container with redis database .
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /user</kbd>     | authenticate user into the api see [request details](#post-auth-detail)



<h3 id="post-auth-detail">POST /user</h3>

**REQUEST**
```json
{
  "name": "Fernanda Kipper",
  "email": "her-email@gmail.com"
}
```

**RESPONSE**
```json
{
   "name": "Fernanda Kipper",
   "email": "her-email@gmail.com"
}
```
## License

Nest is [MIT licensed](LICENSE).
