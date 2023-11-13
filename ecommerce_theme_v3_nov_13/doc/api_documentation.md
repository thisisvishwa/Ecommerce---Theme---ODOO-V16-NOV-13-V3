# API Documentation for ecommerce_theme_v3_nov_13

## Product Customizer API

### Endpoint: `/api/customize`

- **Method**: POST
- **Request Body**:
  ```json
  {
    "productId": "<product_id>",
    "components": ["<component_id_1>", "<component_id_2>", "..."]
  }
  ```
- **Response**:
  ```json
  {
    "status": "<success or error>",
    "message": "<message>",
    "customizedProduct": {
      "id": "<customized_product_id>",
      "components": ["<component_id_1>", "<component_id_2>", "..."]
    }
  }
  ```

### Endpoint: `/api/check-compatibility`

- **Method**: POST
- **Request Body**:
  ```json
  {
    "components": ["<component_id_1>", "<component_id_2>", "..."]
  }
  ```
- **Response**:
  ```json
  {
    "status": "<success or error>",
    "message": "<message>",
    "isCompatible": "<true or false>"
  }
  ```

## Advanced Search API

### Endpoint: `/api/suggest-products`

- **Method**: GET
- **Query Parameters**:
  - `input`: User input for search
  - `history`: User's browsing history
- **Response**:
  ```json
  {
    "status": "<success or error>",
    "message": "<message>",
    "suggestedProducts": ["<product_id_1>", "<product_id_2>", "..."]
  }
  ```

### Endpoint: `/api/auto-complete`

- **Method**: GET
- **Query Parameters**:
  - `input`: User input for search
- **Response**:
  ```json
  {
    "status": "<success or error>",
    "message": "<message>",
    "predictions": ["<prediction_1>", "<prediction_2>", "..."]
  }
  ```