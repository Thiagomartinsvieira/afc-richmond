# AFC Richmond Backend Documentation

<!--toc:start-->
- [AFC Richmond Backend Documentation](#afc-richmond-backend-documentation)
  - [Routes](#routes)
    - [Users](#users)
    - [Membership](#membership)
    - [Contact](#contact)
    - [Players](#players)
<!--toc:end-->

## Routes

The http routes available in the project.

### Users

This route starts with: `/users/`.

| Route             | Method | Authenticated | Permission |
| ----------------- | ------ | ------------- | ---------- |
| `/`               | GET    | No            | user       |
| `/register`       | POST   | No            | user       |
| `/getuserbytoken` | GET    | Yes           | user       |
| `/login`          | POST   | No            | user       |
| `/:id`            | GET    | Yes           | user       |
| `/edit/:id`       | PATCH  | Yes           | user       |
| `/delete/:id`     | DELETE | Yes           | user       |

### Membership

This route starts with: `/membership/`.

| Route         | Method | Authenticated | Permission |
| ------------- | ------ | ------------- | ---------- |
| `/add`        | POST   | Yes           | user       |
| `/remove`     | POST   | Yes           | user       |
| `/edit`       | PATCH  | Yes           | user       |
| `/associates` | GET    | No            | user       |

### Contact

This route starts with: `/contact/`.

> NOTE: On this route you can do 3 requests per hour.

| Route | Method | Authenticated | Permission |
| ----- | ------ | ------------- | ---------- |
| `/`   | POST   | Yes           | user       |

### Players

This route starts with: `/players/`.

> NOTE: You need to have a role (permission) of admin to add, remove or edit a player. 

| Route         | Method | Authenticated | Permission |
| ------------- | ------ | ------------- | ---------- |
| `/`           | GET    | No            | user       |
| `/add`        | POST   | Yes           | admin      |
| `/:id`        | GET    | No            | user       |
| `/edit/:id`   | PATCH  | No            | user       |
| `/delete/:id` | DELETE | Yes           | admin      |
