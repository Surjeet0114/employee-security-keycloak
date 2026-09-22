# Employee Security — Spring Boot + Keycloak

A learning project demonstrating authentication and authorization using Spring Boot, Spring Security, Keycloak, OAuth2, JWT, React, and TypeScript.

The main purpose of this project is to understand how authentication, JWT-based security, protected APIs, and role-based authorization work together.

## Architecture

```text
React Frontend :5173
        |
        v
Keycloak :8180
        |
      JWT
        |
        v
Spring Boot Backend :8080
```

Keycloak uses PostgreSQL as its database.

```text
Keycloak
    |
    v
PostgreSQL :5432
```

## Technologies

### Backend

- Java 21
- Spring Boot 3.3.4
- Spring Web
- Spring Security
- OAuth2 Resource Server
- JWT
- Maven
- Jakarta Validation
- Spring Boot Actuator

### Authentication and Authorization

- Keycloak 26.3
- OAuth2 / OpenID Connect
- JWT authentication
- Role-based authorization
- Protected API endpoints
- Custom JWT authority mapping

### Frontend

- React
- TypeScript
- Vite
- React Router
- Keycloak authentication
- Protected routes
- Role-based route guards

### Infrastructure

- Docker
- Docker Compose
- PostgreSQL 17

## Project Structure

```text
employee-security-keycloak/
|
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/employeesecurity/
│   │       │       ├── config/
│   │       │       ├── controller/
│   │       │       ├── dto/
│   │       │       ├── exception/
│   │       │       └── service/
│   │       │
│   │       └── resources/
│   │           └── application.yml
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── config/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   │
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Security Flow

```text
User
 |
 v
React Frontend
 |
 v
Keycloak Login
 |
 v
Authentication
 |
 v
JWT Access Token
 |
 v
React sends JWT
 |
 v
Spring Security
 |
 +-- Validate JWT
 |
 +-- Extract Roles
 |
 +-- Authorize Request
 |
 v
Protected Controller
```

## Roles

The project demonstrates role-based authorization using:

- `EMPLOYEE`
- `ADMIN`

The frontend uses protected routes and role guards.

The backend also validates authorization through Spring Security.

## Keycloak Configuration

Keycloak runs on:

```text
http://localhost:8180
```

Realm:

```text
employee-security
```

Frontend client:

```text
employee-frontend
```

The backend uses the Keycloak realm as the JWT issuer.

## Running the Project

### 1. Start Keycloak and PostgreSQL

From the project root:

```bash
docker compose up -d
```

Check the containers:

```bash
docker ps
```

Keycloak should be available at:

```text
http://localhost:8180
```

### 2. Start the Backend

Open the backend in IntelliJ IDEA and run:

```text
EmployeeSecurityBackendApplication
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the Frontend

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Authentication Flow

The basic authentication flow is:

```text
React
  |
  v
Keycloak Login
  |
  v
JWT
  |
  v
Spring Security
  |
  v
Protected API
```

Unauthenticated requests to protected backend endpoints return:

```text
401 Unauthorized
```

After successful authentication, the user can access protected routes according to their assigned role.

## Learning Goals

This project was created to understand:

- Spring Security fundamentals
- Keycloak integration
- OAuth2
- OpenID Connect
- JWT authentication
- JWT validation
- Role-based authorization
- Protected REST APIs
- React authentication
- Protected React routes
- Frontend role guards
- Communication between React, Keycloak, and Spring Boot
- Docker-based Keycloak setup

## Project Status

This is a learning project focused primarily on authentication and authorization.

It is intentionally smaller than the larger microservices projects and is not intended to be a complete production application.

The main security concepts explored in this project include:

- Keycloak authentication
- JWT-based security
- Spring Security
- Role-based authorization
- Protected frontend routes
- Protected backend APIs

Further frontend development is optional and is not the primary goal of this project.

## Purpose

This project is part of my backend and security learning journey, particularly for understanding how Spring Boot applications integrate with Keycloak and modern frontend authentication flows.