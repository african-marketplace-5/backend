
## African Marketplace API Reference

### API URL `https://african-marketplace-5.herokuapp.com`

#### Create New User

```
POST /api/auth/register
```
*Response includes newly created user object*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |
| `location_id` | `integer` | **Not required**. User location |

---------------------------------------------------------

#### User Login

```
POST /api/auth/login
```
*Response includes user object. Authorization token in headers object*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |

---------------------------------------------------------

#### Get all Locations

```
GET /api/locations/
```
*Returns list of all locations as objects.*

Each object follows the pattern below:
```
{
  location_id: 1,
  location_name: 'Kenya',
  location_abr: 'KEN'
}
```

---------------------------------------------------------

#### Get All Items (**Authorization Required!**)

```
GET /api/items/
```

*Returns list of all items as objects.*

Each object follows the pattern below:
```
{
  item_id: 1,
  item_name: 'Eggs',
  category: 'Animal Products'
}
```

---------------------------------------------------------

#### Get All Food Categories (**Authorization Required!**)

```
GET /api/food_categories/
```

*Returns list of all food categories as objects.*

Each object follows the pattern below:
```
{
  category_id: 1,
  category: 'Animal Products'
}
```

---------------------------------------------------------

#### Add an Item (**Authorization Required!**)

```
POST /api/items/
```

*Response includes newly added item*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `item_name` | `string` | **Required** |
| `category_id` | `integer` | **Required** |

---------------------------------------------------------

#### Get Filtered List of Items by category ID (**Authorization Required!**)

```
GET /api/items/filter/:category_id
```

---------------------------------------------------------
  
#### Get current user's user-items (**Authorization Required!**)

```
GET /api/user_items/filter/:user_id
```
*Returns list of user's items as objects*

Each object follows the pattern below:
```
{
  user_item_id: 2,
  item_name: 'Beef',
  user_item_description: 'God's gift to mankind',
  user_item_price: 12
}
```

---------------------------------------------------------

#### Add new user-item (**Authorization Required!**)

```
POST /api/user_items/
```

*Response includes newly added user-item*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_item_description` | `string` | Optional |
| `user_item_price` | `float` | **Required** |
| `item_id` | `integer` | **Required** |
| `user_id` | `integer` | **Required** |

---------------------------------------------------------

#### Edit user-item (**Authorization Required!**)

```
PUT /api/user_items/:user_item_id
```

*Response includes edited user-item*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_item_description` | `string` | Optional |
| `user_item_price` | `float` | Optional|

---------------------------------------------------------

#### Delete user-item (**Authorization Required!**)

```
DELETE /api/user_items/:user_item_id
```


*Response includes deleted user-item*

---------------------------------------------------------
