# BLINDOOR - online store for interior and exterior doors

Angular project for SoftUni JS-Web, 2021.

## Technologies

- Angular
- Angular Material
- NgRx
- [Nest.js API](https://github.com/mariyanuzunov/nest-api-blindoor)
- MongoDB

## User roles

#### Guest

- Access to Home, Catalogue, About, Login and Register pages.
- Log In to an existing account
- Create a new account

#### User (customer)

- Add items to the cart
- Submit an order
- Cancel an order, but only if the status is still the default - 'registered'
- Write a review about a product, but only if the status of the order is 'completed'.
- Access to user profile page, where he can
  - View account details
  - View his order history
  - View his reviews history

#### Admin

- Add, Edit and Delete items
- View all orders
- Change order status
- View all user reviews
- Delete a review

## Usage

### Instalation

`$ npm install`

### Spin a development server

```
# Angular
$ ng serve

# Nest API - Visit (https://github.com/mariyanuzunov/nest-api-blindoor) for more details
$ npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
