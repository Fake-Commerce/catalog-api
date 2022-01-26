# fakecommerce-catalog-api

## Products

### GET - `/products`

#### RESPONSE

##### HTTP Code: `200 - OK`
```json
[
    {
        "id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
        "name": "Sabonete Dove",
        "price": 2.45,
        "quantity": 10
    }
]
```
### GET - `/products/:id`

#### RESPONSE

##### HTTP Code: `200 - OK`
```json
{
    "id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
    "name": "Sabonete Dove",
    "price": 2.45,
    "quantity": 10
}
```

### PUT - `/products/:id`

```json
{
    "quantity": 12
}
```

#### RESPONSE

##### HTTP Code: `200 - OK`
```json
{
    "id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
    "name": "Sabonete Dove",
    "price": 2.45,
    "quantity": 12
}
```

### DELETE - `/products/:id`

#### RESPONSE

##### HTTP Code: `204 - No Content`

### POST - `/products`

- Request

#### payload
```json
{
    "name": "Sabonete Dove",
    "price": 2.45,
    "quantity": 10
}
```


#### RESPONSE

##### HTTP Code: `201 - Created`

```json
{
    "id":"c53acb91-04cf-4eab-adfe-bf940e0197c1",
    "name": "Sabonete Dove",
    "price": 2.45,
    "quantity": 10
}
```

