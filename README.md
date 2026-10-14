# Employee Management System

A simple full-stack web application built using **React, Django REST Framework, Python, and SQLite** to manage employee records.

## About the Project

The Employee Management System provides a simple interface to perform CRUD (Create, Read, Update, and Delete) operations on employee information. The React frontend communicates with a Django REST API to store and retrieve employee data.

This project was developed to practice full-stack web development and understand how a frontend application interacts with a backend API and database.

## Features

- Add new employees
- View all employee records in a table
- Update existing employee details
- Delete employee records
- Manage employee name, age, gender, phone, email, department, joining date, projects, and salary
- Connect the React frontend with Django REST APIs
- Store and retrieve employee data using SQLite

## Technologies Used

**Frontend**

- React
- JavaScript
- HTML
- CSS
- Vite

**Backend**

- Python
- Django
- Django REST Framework

**Database**

- SQLite

**Tools**

- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
Employee-Management-System/
├── backend/
│   ├── config/
│   ├── employees/
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

- Python
- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Cka000/Employee-Management-System.git
cd Employee-Management-System
```

### 2. Set Up the Backend

Navigate to the backend folder:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend runs at `http://127.0.0.1:8000/`.

### 3. Set Up the Frontend

Open a **second terminal** in the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

Keep both the backend and frontend servers running while using the application.

## API Endpoints

| Method | Endpoint               | Description                |
| ------ | ---------------------- | -------------------------- |
| GET    | `/api/employees/`      | Retrieve all employees     |
| POST   | `/api/employees/`      | Create a new employee      |
| GET    | `/api/employees/<id>/` | Retrieve an employee by ID |
| PUT    | `/api/employees/<id>/` | Update an employee         |
| DELETE | `/api/employees/<id>/` | Delete an employee         |

## What I Learned

- Building user interfaces with React
- Managing component state using React Hooks
- Handling forms and user interactions
- Creating REST APIs with Django REST Framework
- Using serializers to convert and validate data
- Connecting a frontend application to a backend API
- Performing CRUD operations with database records
- Using Git and GitHub for version control

## Future Improvements

- Add employee search and filtering
- Improve form validation and error handling
- Add authentication and role-based access
- Improve mobile responsiveness
- Deploy the application online

GitHub: [Cka000](https://github.com/Cka000)

---

This project was created as a learning project to practice full-stack web development using React and Django REST Framework.
