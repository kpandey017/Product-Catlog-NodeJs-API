# Product Catlog NodeJs API

We have Build a RESTful APIs from scratch using Express & NodeJs. There are two entities i.e. “Category” and “Products”.

Category can have multiple child categories.

Child category can have further child categories.

Category can have multiple products and product can have a multiplecategories.

## Requirements

- Node and npm

## Installation

- Clone the repo
- Install dependencies: `npm install`
- Start the server: `node server.js`

## API Requests

- Add  Categories:

```sh
http POST localhost:3000/category 
```
 Body -
 {
	"name":"Cat3",
	"parentCategory":"Cat1"
 }

- Add  Product with categories:

```sh
http POST localhost:3000/product 
```
 Body -
    {
        "name":"Prod1",
        "price":10999123123,
        "categories":"cat1,cat2"
    } 

- Get All Categories:

```sh
http GET localhost:3000/category 
```
 Response -
 [
    {
        "_id": "5c46a3924cc10940d0300d02",
        "name": "Cat1",
        "childCategories": [
            {
                "_id": "5c46a9df6ea2fa4de8fc55cf",
                "name": "Cat3",
                "parentCategory": "Cat1"
            }
        ]
    }
 ]

- Get all products by a category

 ```sh
http GET localhost:3000/product/getByCategory/cat1
```
 Response -
 [
    {
        "name":"Prod1",
        "price":10999123123,
        "categories":"cat1,cat2"
    } 
 ]

- Update product details 

 ```sh
http PUT localhost:3000/product
```
    Body -
    {
        "name":"Prod1",
        "price":10999123,
        "categories":"cat1,cat2"
    }
 


## Testing the API
Test your API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop)