# FastPizza Application Setup Guide

## Database Setup

### Option 1: Manual PostgreSQL Installation

1. **Install PostgreSQL:**
   - Visit [PostgreSQL Downloads](https://www.postgresql.org/download/) and follow the installation instructions for your operating system.

2. **Create a Database:**
   - Open the PostgreSQL command line or a tool like pgAdmin.
   - Create a new database named 'fast_pizza':
     ```sql
     CREATE DATABASE fast_pizza;
     ```

3. **Update Database Connection Properties:**
   - In the backend application, navigate to `fastpizza/backend/src/main/resources/application.properties`.
   - Update the database connection properties with your PostgreSQL credentials.

### Option 2: Using Docker Compose

1. **Install Docker:**
   - Follow the instructions at [Docker Installation Guide](https://docs.docker.com/get-docker/) to install Docker on your machine.

2. **Run PostgreSQL Container:**
   - Open a terminal and navigate to the project root directory.
   - Run the following command in the root of the folder to start the PostgreSQL container:
     ```bash
     docker-compose up -d
     ```
   - This will create and start a PostgreSQL container with the necessary configuration.

## Backend Setup

### Prerequisites

- **Java 17:** Ensure that Java 17 is installed on your machine.
- **Maven:** Make sure Maven is installed to manage dependencies and build the project.

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ulianovish/FastSpringTest.git
   ```

2. **Navigate to the Backend Directory:**
   ```bash
   cd fastpizza/backend
   ```
3. **Update Database Connection Properties:**
   - Open src/main/resources/application.properties.
   - Ensure that the database connection properties match your PostgreSQL 
4. **Navigate to the Backend Directory:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   - This will build and start the backend server at http://localhost:8081.
5. **Access Swagger for API Documentation:**
   - Open [Swagger UI](http://localhost:8081/swagger-ui/index.html) to explore and test the API.

## Frontend Setup

### Prerequisites

- **Node.js 19 or newer:** Install Node.js from [Node.js Downloads](https://nodejs.org/).

### Steps

1. **Navigate to the Frontend Directory:**

   ```bash
   cd fastpizza/frontend
   ```
2. **Install Dependencies:**

   ```bash
   npm install
   ```
3. **Run the Application:**
   ```bash
   npm run dev
   ```
   - This will start the frontend server at http://localhost:5173.
