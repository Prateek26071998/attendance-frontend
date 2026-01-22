# 📌 Attendance Management System (Django)

## 📖 Project Overview

This project is a **Django-based Attendance Management System** developed as part of an internship assignment.
It demonstrates **backend development fundamentals**, **authentication**, and **role-based access control (RBAC)**.

The system supports **Admin**, **HR**, and **Employee** roles with different permissions.

---

## 🎯 Features

### 🔐 Authentication

* User login using Django authentication
* Session-based login & logout
* Passwords securely hashed

### 👥 Role-Based Access Control

* **Admin**

  * Create HR and Employee users
* **HR**

  * View employee list
  * Mark attendance
* **Employee**

  * View own attendance records only

### 🗄️ Attendance Management

* Date-wise attendance
* Status: PRESENT / ABSENT
* Stored using Django ORM

---

## 🛠️ Technology Stack

| Component      | Technology       |
| -------------- | ---------------- |
| Backend        | Django           |
| Database       | SQLite (default) |
| Frontend       | HTML, CSS        |
| Authentication | Django Auth      |
| ORM            | Django ORM       |

---

## 📂 Project Structure

```
django attendance/
│
├── core/                  # Main project settings
│   ├── settings.py
│   ├── urls.py
│
├── accounts/              # Custom user app
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│
├── attendance/            # Attendance management app
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│
├── templates/             # HTML templates
│   ├── accounts/
│   ├── admin/
│   ├── hr/
│   └── employee/
│
├── static/                # CSS files
│
├── db.sqlite3
├── manage.py
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Create Virtual Environment

```bash
python -m venv venv
```

### 2️⃣ Activate Virtual Environment

```bash
# Windows
venv\Scripts\activate
```

### 3️⃣ Install Dependencies

```bash
pip install django
```

### 4️⃣ Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

### 6️⃣ Run Server

```bash
python manage.py runserver
```

Access the app at:

```
http://127.0.0.1:8000/
```

---

## 🔑 User Roles & Access

| Role     | Access                          |
| -------- | ------------------------------- |
| Admin    | User creation                   |
| HR       | Mark attendance, view employees |
| Employee | View own attendance             |

Users and roles are managed via **Django Admin Panel**:

```
http://127.0.0.1:8000/admin/
```

---

## 🧪 How to Test the Project

1. Login as **Admin**
2. Create HR and Employee users
3. Login as **HR**
4. Mark attendance
5. Login as **Employee**
6. View attendance records

---

## 🚀 Future Enhancements

* Monthly attendance reports
* Date filters
* Export attendance to CSV
* Improved frontend UI
* API-based frontend (React / Angular)

---

## 🧠 Learning Outcomes

* Django project structure
* Custom user model
* Authentication & authorization
* Database modeling with ORM
* Role-based access control
* Backend–frontend integration

---



