# Meeting Calendar Application

## Frontend Setup
1. Clone this repository:
    ```
    git clone <repository-url>
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Run the development server:
    ```
    npm start
    ```
4. Access the app at `http://localhost:3000`.

## Backend Setup
1. Clone this repository:
    ```
    git clone <repository-url>
    ```
2. Install dependencies:
    ```
    mvn install
    ```
3. Run the Spring Boot backend:
    ```
    mvn spring-boot:run
    ```
4. Access the API at `http://localhost:8080`.

## API Endpoints
1. **GET** `/api/meetings` - Fetch all meetings
2. **POST** `/api/meetings` - Create a new meeting
3. **PUT** `/api/meetings/{id}` - Update a meeting by ID
4. **DELETE** `/api/meetings/{id}` - Delete a meeting by ID

## Features
- Create and manage meetings
- View meetings on a calendar

## Notes
- Make sure the backend is running on `http://localhost:8080` before starting the frontend.
